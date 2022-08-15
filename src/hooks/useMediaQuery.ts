import { useState, useEffect } from 'react';

function useMediaQuery(query: string) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const mediaQuery = window.matchMedia(query);

  function handleMediaQueryChange(media: MediaQueryList) {
    if (media.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }

  useEffect(() => {
    mediaQuery.addEventListener('change', () => handleMediaQueryChange(mediaQuery));
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', () => handleMediaQueryChange(mediaQuery));
    };
  }, [mediaQuery]);

  return { isSmallScreen };
}

export default useMediaQuery;
