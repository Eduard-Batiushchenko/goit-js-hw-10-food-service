import itemsTamplate from '../tamplates/gallery-food.hbs';
import dataBase from '../menu.json';

const markup = itemsTamplate(dataBase);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);
