import '../scss/style.scss';
import DefaultCarousel from 'components/DefaultCarousel';

$(document).ready(() => {
  let defaultCarousel = new DefaultCarousel();
  defaultCarousel.init();

  console.log('dek');
});
