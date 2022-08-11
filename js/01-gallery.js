import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageContainer = document.querySelector(".gallery");
const imageMarkup = createImageCardMarkup(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}}"/>
      </a></div>`;
    })
    .join("");
}

// imageContainer.addEventListener("click", (evt) => {
//   evt.preventDefault();
// });

// const galleryItem = document.querySelector(".gallery__image");
// let imageLink = "";

imageContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  const isImagePickedEl = evt.target.classList.contains("gallery__image");
  if (!isImagePickedEl) {
    return;
  }
  const imageLink = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imageLink}" width="800" height="600">
`);

  instance.show();
}

// document.querySelector(".gallery__link").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="${imageLink}">
// 	`
//     )
//     .show();
// };
// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
