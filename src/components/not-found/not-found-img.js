export class NotFound {
  static searchImg(searchInputValue) {
    return (
      <div className="absolute flex flex-col items-center justify-center w-full px-12 mx-auto top-8">
        <p className="text-2xl font-semibold text-center text-gray-700">
          {`Sorry, we can't find any images with the title ${searchInputValue}`}
        </p>
        <p className="mt-2 text-lg text-center text-gray-700 font-md">
          Please try another title
        </p>
      </div>
    );
  }

  static noImg() {
    return (
      <div className="absolute items-center w-full top-8">
        <p className="w-full text-2xl font-semibold text-center text-gray-700">
          No Images
        </p>
      </div>
    );
  }
}
