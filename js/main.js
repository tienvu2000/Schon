
// const headerSearch = $('.header__blog-search')
// const search = $('.search__blog');
// const isClose = $('.search__blog-close');
// const modalSearch = $('.modal__search')
// function isShow (){
//     search.classList.add('isShow');
// }
// function isHide (){
//     search.classList.remove('isShow');
// }
// headerSearch.addEventListener('click',isShow);
// isClose.addEventListener('click',isHide);
// modalSearch.addEventListener('click',isHide)
const showMenu = document.querySelector('.bar-menu')
// function isShowMenu (){
//   showMenu.classList.add('isShow');
// }
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
    modalNotify.classList.remove('isShowed');
}
modalNotifyClose.addEventListener('click', hideNotify);

modalNotify.addEventListener('click', hideNotify);
modalNotifyContainer.addEventListener('click' , function (event){
event.stopPropagation()
});

// <!-- end modal notify -->
// // Reveal Website 
ScrollReveal({
    distance: '15px',
    duration: 2500,
    delay: 250,
})
ScrollReveal().reveal('.banner , .product , .product__best-seller, .product__list', {delay : 200})
// end Reveal 
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