new WOW().init();
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 1500,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".swiper-slide").on("mouseover", function () {
  swiper.autoplay.stop();
});

$(".swiper-slide").on("mouseout", function () {
  swiper.autoplay.start();
});

const nav = document.querySelector('.nav');
const navbutton = document.querySelector('.bars');
navbutton.addEventListener('click', function(){
  nav.classList.toggle('active');
})

const accHeader = document.querySelectorAll('.accordion-header');
accHeader.forEach(button =>{
  button.addEventListener('click', function(){
   this.querySelector('.arrow').classList.toggle('active');
    this.nextElementSibling.classList.toggle('active')
  });
});

document.querySelector('.gift-container').addEventListener('click', function(){
  this.classList.toggle('active');
})