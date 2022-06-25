import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'



const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
        // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
});
