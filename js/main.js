const _$ = document.querySelector.bind(document)
const _$$ = document.querySelectorAll.bind(document)


// // click next/prev btn

// const nextBtn = _$('.next-btn')
// const prevBtn = _$('.next-btn')
// listItem = _$$('.product__item')
// const index = 0
// listItem.forEach((item) => {
//     const itemIndex = item.getAttribute('data-index')
//     if (Number(itemIndex) === this.index) {
//       item.classList.add('active');
//     }
//   });
// nextBtn.onclick = function(){
//     if(itemIndex){
//         index++;
//     }
// }
// prevBtn.onclick = function(){
//     if(itemIndex){
//         index--;
//     }
// }

// //  end click next/prev btn


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