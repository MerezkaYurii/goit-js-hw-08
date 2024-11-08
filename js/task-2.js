const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];



const newList = document.querySelector(".gallery");

const newImg = (array) => {
  return array.map(item =>{
const imgEl = document.createElement("img");
imgEl.classList.add("img-gallary");
imgEl.src = item.url;
imgEl.alt = item.alt;
return imgEl
}
)
}
const newItem = (res) =>{
  return res.map(element =>{
    const itemEl = document.createElement("li");
 itemEl.classList.add("item-gallery");
        itemEl.append(element);
     return itemEl;
  })
}
const res = newImg(images)
console.log(newItem(res))


newList.append(...newItem(res))



