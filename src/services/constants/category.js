import galleryImgData from "./img-gallery";

const categoryCuratedData = [];
galleryImgData
  .filter(item => item.isCurated === true)
  .forEach(item => {
    if (!categoryCuratedData.includes(item.category)) {
      categoryCuratedData.push(item.category);
    }
  });

const categoryGallery = ["all"];
galleryImgData.forEach(item => {
  if (!categoryGallery.includes(item.category)) {
    categoryGallery.push(item.category);
  }
});

export { categoryCuratedData, categoryGallery };
