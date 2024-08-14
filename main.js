import Swiper from 'swiper';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import SimpleLightbox from 'simplelightbox';
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'
import ajax from '@imacrayon/alpine-ajax'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'
import './src/assets/scss/main.scss'

window.Alpine = Alpine
Alpine.plugin(ajax)
Alpine.plugin(mask)
Alpine.start()

new Swiper('.swiper-portfolio', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    centeredSlides : true,
    centeredSlidesBounds : true,
    initialSlide: 5,
    spaceBetween: 0,
    breakpoints: {
        1300: {
            slidesPerView: 6,
            spaceBetween: 10
        },

        740: {
            slidesPerView: 4,
            spaceBetween: 10
        },

        451: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.swiper-result', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    centeredSlides : true,
    centeredSlidesBounds : true,
    spaceBetween: 0,
    breakpoints: {
        1300: {
            slidesPerView: 6,
            spaceBetween: 10
        },

        740: {
            slidesPerView: 4,
            spaceBetween: 10
        },

        450: {
            slidesPerView: 2,
            spaceBetween: 0
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.banner__slider', {
    modules: [EffectCards, Pagination],
    effect: "cards",
    cardsEffect: {
        perSlideOffset: 8,
        perSlideRotate: 4,
        slideShadows: false
    },
    initialSlide: 5,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var lightbox = new SimpleLightbox(
    '.swiper-slide__link',
    {
        overlayOpacity: .9,
        loop: false,
        fadeSpeed: 150,
        animationSpeed: 150
    }
);
var lightboxPortfoliio = new SimpleLightbox(
    '.swiper-slide__link_portfolio',
    {
        overlayOpacity: .9,
        loop: false,
        fadeSpeed: 150,
        animationSpeed: 150
    }
);

var lightboxResult = new SimpleLightbox(
    '.swiper-slide__link_result',
    {
        overlayOpacity: .9,
        loop: false,
        fadeSpeed: 150,
        animationSpeed: 150
    }
);

window.addEventListener('load', function() {
    document.body.classList.add('ready');
});