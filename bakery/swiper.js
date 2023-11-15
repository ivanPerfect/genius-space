const swiper = new Swiper(".swiper-conteiner", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: ".pagi",
    bulletClass:'pagBtn',
    bulletActiveClass:'active',
  },

  // Navigation arrows
  navigation: {
    nextEl: ".rightArrow",
    prevEl: ".leftArrow",
  },
});
