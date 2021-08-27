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
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 400,
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
        var revealRight = document.querySelectorAll('.reveal-right');
        for(var i=0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var reveal = reveals[i].getBoundingClientRect().top;
            var revealPoint = 100;
            if(reveal < windowHeight - revealPoint){
                reveals[i].classList.add('isActive');
            }
            else {
                reveals[i].classList.remove('isActive');
            }
        }
        // var revealPositionLeft = revealLeft.getBoundingClientRect().top;
        // if(revealPositionLeft < windownHeight - revealPoint){
        //     revealLeft.classList.add('isActiveLeft');
        // }
        // else {
        //     revealLeft.classList.remove('isActiveLeft');
        // }
        for(var j=0; j < revealRight.length; j++){
            var revealScrollRight = revealRight[j].getBoundingClientRect().top;
            if(revealScrollRight < windowHeight - revealPoint){
                revealRight[j].classList.add('isActiveLeft');
            }
            else {
                revealRight[j].classList.remove('isActiveLeft');
            }
        }
    }
// product next page
const filterOptions = document.querySelectorAll(".product__filter-options");
const productOptions = document.querySelectorAll(".product__row");

const tabActive = document.querySelector(".product__filter-options.active");


filterOptions.forEach((option, index) => {
  const productOption = productOptions[index];

  option.onclick = function () {
   document.querySelector(".product__filter-options.active").classList.remove("active");
   document.querySelector(".product__row.active").classList.remove("active");


    this.classList.add("active");
    productOption.classList.add("active");
  };
});

// load page
function loader(){
    document.querySelector('.loader-homepage').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 500);
  }
  
  window.onload = fadeOut;