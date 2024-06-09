const swiper = [
    new Swiper('.partners .swiper', {
        loop: false,
        rewind: true,
        spaceBetween: 24,
        speed: 1400,
        // autoplay: {
        //     delay: 5000,
        // },
        pagination: {
            el: '.partners .swiper-pagination',
        },
        navigation: {
            nextEl: '.partners .swiper-button-next',
            prevEl: '.partners .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            },

        },
    }),
    new Swiper('.partners-about-us .swiper', {
        loop: false,
        rewind: true,
        spaceBetween: 24,
        speed: 1400,
        // autoplay: {
        //     delay: 5000,
        // },
        pagination: {
            el: '.partners-about-us .swiper-pagination',
        },
        navigation: {
            nextEl: '.partners-about-us .swiper-button-next',
            prevEl: '.partners-about-us .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        },
    }),
]
