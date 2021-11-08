// <!-- begin js back to top -->
$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 300){
            $('.btn__back-to-top').css({
                'opacity':'1','pointer-events':"auto",
            });
        } else {
            $('.btn__back-to-top').css({
                'opacity':'0','pointer-events':"none"
            });
        }
    });
    $('.btn__back-to-top').click(function(){
        $('html').animate({
            scrollTop:0
        },300);
    })
}
);
// <!-- end back to top -->
// <!--  slick slider -->
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
}
);
// slick product list 
$('.product__slick').slick({
    // autoplay: true,
    // autoplaySpeed: 1500,
    dots: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button class="btn-slick slick-prev pull-left "><i class="fas fa-angle-left"></i></button>`,
    nextArrow: `<button class="btn-slick slick-next pull-right "><i class="fas fa-angle-right"></i></button>`,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
]
});

// end slick product list
/* //  slick best seller */
$('.product__seller-row').slick({
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 1500,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button class="btn-slick slick-prev pull-left "><i class="fas fa-angle-left"></i></button>`,
    nextArrow: `<button class="btn-slick slick-next pull-right "><i class="fas fa-angle-right"></i></button>`,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
]
});
// end responsive slick