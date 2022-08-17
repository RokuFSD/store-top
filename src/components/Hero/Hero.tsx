import React from 'react';

function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center w-full lg:flex-row justify-center">
      {children}
    </section>
  );
}

export default Hero;
