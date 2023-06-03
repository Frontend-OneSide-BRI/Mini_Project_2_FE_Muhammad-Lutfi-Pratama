import galleryImgData from "./img-gallery";

export const curatedImgData = galleryImgData.filter(
  item => item.isCurated === true
);
