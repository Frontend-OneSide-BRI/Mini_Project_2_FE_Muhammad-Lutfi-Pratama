import React from "react";

function GalleryLeading({ inputValListener }) {
  return (
    <section className="w-full md:rounded-xl md:w-11/12 mx-auto my-8 bg-bottom lg:bg-center bg-[url('https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-fixed bg-cover bg-gray-300 shadow-xl">
      <div className="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56">
        <h1 className="mb-10 text-2xl font-semibold leading-none text-yellow-700">
          Boost your imagination
        </h1>
        <div className="max-w-xl mx-auto">
          <label
            htmlFor="search-input"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 items-center hidden pl-3 pointer-events-none sm:flex left-20 sm:left-0">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search-input"
              className="block w-[300px] p-4 text-center sm:text-left pl-10 mx-auto text-sm text-gray-900 border border-black rounded-full outline-none sm:w-full bg-gray-50"
              placeholder="Go find..."
              onChange={val => inputValListener(val.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryLeading;
