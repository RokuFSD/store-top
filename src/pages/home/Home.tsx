import React from 'react';

function Home() {
  return (
    <main>
      <section className="flex justify-around items-center">
        <div className="w-4/12">
          <span>Wear the best</span>
          <h1 className="text-6xl">Make people fall in love with your clothes</h1>
        </div>
        <img src="src/assets/thrift-shop-not-css.svg" alt="thrift shop" className="w-176" />
      </section>
      <div className="custom-shape-divider-bottom-1660620352">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </main>
  );
}

export default Home;
