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

imageContainer.addEventListener("click", (evt) => {
  evt.preventDefault();
});

const galleryItem = document.querySelector(".gallery__image");
let imageLink = "";

imageContainer.addEventListener("click", onImageClick);

document.querySelector(".gallery__link").onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${imageLink}">
	`
    )
    .show();
};

function onImageClick(evt) {
  const isImagePickedEl = evt.target.classList.contains("gallery__image");
  if (!isImagePickedEl) {
    return;
  }

  console.log(evt.target.dataset.source);
  imageLink = evt.target.dataset.source;
}
