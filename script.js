import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
let swiperStyleLink = 'https://unpkg.com/swiper@8/swiper-bundle.min.css';


window.onload = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
        document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${swiperStyleLink}" />`;
        let swiper = new Swiper('.swiper', {
            // width: 208,
            // spaceBetween: 16,
            // slidesPerView: 1,
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}

let expand = document.querySelector('.expand');
expand.addEventListener('click', () => {

    let hideBrends768 = document.querySelectorAll('.hide768'),
        hideBrends1120 = document.querySelectorAll('.hide1120'),
        text = document.querySelector('.expand__text'),
        img = document.querySelector('.expand__img'),
        button = document.querySelector('.expand'),
        brands = document.querySelector('.brands');
    function change(arr) {
        if (text.innerHTML === 'Показать все') {
            for (const item of arr) {
                item.style.display = 'block';
            }
            text.innerHTML = 'Скрыть все';
            img.src = 'img/expandUp.svg';
            button.style.transform = 'translateY(22px)';
            brands.style.paddingBottom = '14px';
        } else {
            for (const item of arr) {
                item.style.display = 'none';
            }
            text.innerHTML = 'Показать все';
            img.src = 'img/expandDown.svg'
            button.style.transform = 'translateY(0)';
            brands.style.paddingBottom = '16px';
        }
    }
    if (window.matchMedia('(min-width: 1120px)').matches) {
        change(hideBrends1120);
    } else if ('(min-width:767px) and (max-width: 1119px)') {
        change(hideBrends768);
    }


})