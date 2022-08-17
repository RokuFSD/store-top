import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="flex flex-col items-center w-full lg:flex-row justify-center">
        <div className="flex w-11/12 max-w-md gap-y-12 flex-col order-2 lg:order-1 max-w-lg px-3">
          <div>
            <span className="tracking-widest text-2xl text-neutral-500">Wear the best</span>
            <h1 className="text-4xl font-bold">Make people fall in love with your clothes</h1>
          </div>
          <Link to="/store">
            <button
              type="button"
              className="flex items-center justify-center transition-all border-2 border-neutral-800 text-xl bg-neutral-800 text-neutral-200 rounded-full w-40 h-11 hover:bg-transparent hover:text-neutral-800 withArrow"
            >
              Shop Now
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
        <img
          src="src/assets/thrift-shop-not-css.svg"
          alt="thrift shop"
          className="w-full max-w-2xl order-1 lg:order-2 lg:max-w-lg 2xl:max-w-3xl"
        />
      </section>
    </main>
  );
}

export default Home;
