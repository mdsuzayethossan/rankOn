(() => {
    'use strict'

    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    });
  //------------------------ back to top ------------------//
    var navbar = $('.navbar');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
        navbar.addClass('bg-nav');
        } else {
        navbar.removeClass('bg-nav');
        }
    });
    //------------------------ back to top ------------------//
    var btn = $('.back-to-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });
    btn.on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "0" },  5000);
    });

    //------------------------ review ------------------//
    $('.review-slider-main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.review-up-icon'),
        nextArrow: $('.review-down-icon')

      });
    //------------------------ counter ------------------//
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
    //------------------------ venobox ------------------//
     new VenoBox({
      selector: '.my-play',
    });
    //------------------------ client-brand ------------------//
    $('.client-brand').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      //------------------------ news ------------------//
    $('.news-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})()