const slider = () => {

  const swiperNews = new Swiper(".feed__slider", {
    grabCursor: false,
    initialSlide: 0,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.feed__arrow--next',
      prevEl: '.feed__arrow--prev',
    },
    spaceBetween: 30,
    slidesPerView: 'auto'
  });

const swiperTeam = new Swiper(".team__slider", {
    autoHeight: false,
    initialSlide: 0,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.team__slider-arrow--next',
      prevEl: '.team__slider-arrow--prev',
    },
    spaceBetween: 20,
    slidesPerView: 'auto'
  });

}

slider();
