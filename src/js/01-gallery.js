// Add imports above this line
// Описан в документации

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"  />
  </a>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryItem);

new SimpleLightbox('a.gallery__item', {
  captionDelay: '250',
  captionsData: 'alt',
});