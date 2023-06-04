const galleryImgData = [];

for (let i = 1; i <= 10; i++) {
  let isEven = i % 2 === 0;

  galleryImgData.push({
    id: i,
    title: `Robot ${i}${isEven ? " Special Edition" : ""}`,
    urlImg: `https://robohash.org/${i}/.png`,
    category: "robot",
    isCurated: isEven ? true : false,
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  });
  galleryImgData.push({
    id: i,
    title: `Nature ${i}${isEven ? " Special Edition" : ""}`,
    urlImg: `https://source.unsplash.com/random/900x900?nature-${i}`,
    category: "nature",
    isCurated: isEven ? true : false,
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  });
  galleryImgData.push({
    id: i,
    title: `Human ${i}${isEven ? " Special Edition" : ""}`,
    urlImg: `https://source.unsplash.com/random/900x900?face-${i}`,
    category: "human",
    isCurated: isEven ? true : false,
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  });
}

export default galleryImgData;
