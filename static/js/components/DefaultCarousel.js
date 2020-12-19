import Swiper from "swiper/js/swiper.js";

export default class DefaultCarousel {
  constructor(options) {
    const _defaults = {};
    this.defaults = Object.assign({}, _defaults, options);
  }

  init() {
    this.carousel();
  }

  carousel() {
    var defaultSwiper = new Swiper(".js-customers-carousel", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      pagination: {
        el: ".js-customers-pagination",
        clickable: true,
      },
      breakpoints: {
        567: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        },
        800: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30
        }
      },
    });
  }
}