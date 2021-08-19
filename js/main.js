// <!-- begin js back to top -->
    $(document).ready(function() {
        $(window).scroll(function() {
            if($(window).scrollTop() > 300){
                $('.btn__back-to-top').css({
                    'opacity':'1','pointer-events':"auto"
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
            },500);
        })
    }
);

// <!-- end back to top -->
// <!-- // slick slider -->
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    }
);
{/* //  slick best seller */}
    $('.product__seller-row').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
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
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// <!-- js modal notify -->
    const modalNotify = document.querySelector('.modal__notify');
    const modalNotifyClose = document.querySelector('.modal__notify-btn-close');
    const modalNotifyContainer = document.querySelector('.modal__notify-container');
    function hideNotify(){
        modalNotify.classList.remove('isShoww');
    }
    modalNotifyClose.addEventListener('click', hideNotify);

    modalNotify.addEventListener('click', hideNotify);
    modalNotifyContainer.addEventListener('click' , function (event){
    event.stopPropagation()
    });

// <!-- end modal notify -->
