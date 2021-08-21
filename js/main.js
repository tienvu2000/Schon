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
// Reveal Website 
    window.addEventListener('scroll',reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');
        var revealLeft = document.querySelector('.reveal-left');
        var revealRight = document.querySelector('.reveal-right');
        for(var i=0; i < reveals.length; i++){
            var windownHeight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 200;
            if(revealtop < windownHeight - revealPoint){
                reveals[i].classList.add('isActive');
            }
            else {
                reveals[i].classList.remove('isActive');
            }
        }
        var revealPositionLeft = revealLeft.getBoundingClientRect().top;
        if(revealPositionLeft < windownHeight - revealPoint){
            revealLeft.classList.add('isActiveLeft');
        }
        else {
            revealLeft.classList.remove('isActiveLeft');
        }
            var revealPositionRight = revealRight.getBoundingClientRect().top;
            if(revealPositionRight < windownHeight - revealPoint){
                revealRight.classList.add('isActiveLeft');
            }
            else {
                revealRight.classList.remove('isActiveLeft');
            }
    }