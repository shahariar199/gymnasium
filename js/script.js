$(function(){
    'use strict';
    //  banner js start
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      }); 
      
      // about video js stsrt
      $('.venobox').venobox(); 

     //  test js start
      $('.text_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }); 

      // counter js start
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // client js start
    $('.class_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      nextArrow: '<i class="fas fa-arrow-left next_arr"></i>',
      prevArrow: '<i class="fas fa-arrow-right prev_arr"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1 ,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });
});