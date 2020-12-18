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
      slidesPerView: 4,
      slidesPerGroup: 4,
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: ".js-customers-pagination",
        clickable: true,
      },
      breakpoints: {},
    });
  }
}