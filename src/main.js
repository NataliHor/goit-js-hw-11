import { getPictures } from './pixabay-api';
import { renderGallery } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loading = document.querySelector('.loading');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const queryValue = form.elements.query.value.toLowerCase();

  if (queryValue === '') {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
  loading.style.display = 'flex';
  gallery.innerHTML = '';

  getPictures(queryValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      loading.style.display = 'none';
    });
}
