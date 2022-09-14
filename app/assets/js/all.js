// course-swiper
const course_swiper = new Swiper(".course-swiper", {
  autoplay: {
    disableOnInteraction: false,
    delay: 0,
  },
  speed: 1500,
  loop: true,
  spaceBetween: 12,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    768: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 9,
    },
  },
});


// share
// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});