import React from 'react';
import Hero from '../../components/Hero/Hero';
import HeroDescription from '../../components/Hero/HeroDescription/HeroDescription';
import HeroImg from '../../components/Hero/HeroImg/HeroImg';

function Home() {
  return (
    <main>
      <Hero>
        <HeroDescription />
        <HeroImg />
      </Hero>
    </main>
  );
}

export default Home;
