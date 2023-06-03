import galleryImgData from "./img_gallery";

export const curatedImgData = galleryImgData.filter(
  item => item.isCurated === true
);
