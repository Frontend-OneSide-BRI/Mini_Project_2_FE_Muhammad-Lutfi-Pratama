import React from "react";

export default function HomeLeading({ inputValListener: onChangeListener }) {
  return (
    <div className="mb-8">
      <div className="mt-10 mb-6 text-center">
        <h1 className="text-3xl font-semibold md:text-3xl">
          Toward Your Imagination
        </h1>
      </div>

      <div class="relative mx-auto w-max md:w-1/2 xl:w-2/6">
        <input
          type="search"
          class="peer cursor-pointer relative h-12 rounded-full border bg-transparent pl-12 outline-none w-full focus:cursor-text focus:border-yellow-800 focus:pl-16 pr-4 focus:pr-4 transition-all ease-in-out shadow-md focus:shadow-none"
          onChange={val => onChangeListener(val.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-700 peer-focus:stroke-yellow-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
