import { DependencyList, EffectCallback, useEffect } from 'react';
import useFirstRender from './useFirstRender';

function useUpdateEffect(effect: EffectCallback, deps: DependencyList){
  const isFirst = useFirstRender()
  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useUpdateEffect;
