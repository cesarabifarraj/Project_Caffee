const menuOpenBtn = document.getElementById("menu_btn");
const menuCloseBtn = document.getElementById("close_btn");


menuOpenBtn.addEventListener("click" , event =>{
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseBtn.addEventListener("click" , event => menuOpenBtn.click());


const swiper = new Swiper('.slider_wrapper', {
  loop: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
  
});