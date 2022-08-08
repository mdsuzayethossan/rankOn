(() => {
    'use strict'

    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })

    //review
    $('.review-slider-main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.review-up-icon'),
        nextArrow: $('.review-down-icon')

      });
    //news
    $('.news-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });
})()