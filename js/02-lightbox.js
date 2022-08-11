import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector(".gallery");
const imageMarkup = createImageCardMarkup(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
