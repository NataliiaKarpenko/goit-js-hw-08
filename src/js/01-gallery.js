import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryListRef = document.querySelector('.gallery');

const makeGalleryItemRef = ({ preview, original, description } = {}) =>
  `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;

const makeGallery = galleryItems.map(makeGalleryItemRef).join('');
galleryListRef.insertAdjacentHTML('beforeend', makeGallery);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
