// "use strict";                                      // --> JS executed in strict mode
var slides = [],
    currentSlide = 0,                              // --> current slide
    activeBtn;                                     // --> active button

function slide(slideIndex, that) {
  activeBtn.classList.remove('btn-active');            // --> remove active class
  slides[currentSlide].classList.remove('slide-active'); //     from "old" slide

  currentSlide = slideIndex;                       // --> set new slide and 
  activeBtn = that;                                //     active button

  activeBtn.classList.add('btn-active');
  slides[currentSlide].classList.add('slide-active');
}

function init() {
  slides = document.getElementsByClassName('reviews__slider-card ');
  var firstBtn = document.getElementById('one'),
      secondBtn = document.getElementById('two'),
      thirdBtn = document.getElementById('three');

  activeBtn = firstBtn;

  firstBtn.addEventListener('click', function() {
    slide(0, this);                                 // --> call function to slide
  });
  secondBtn.addEventListener('click', function() {
    slide(1, this);
  });
  thirdBtn.addEventListener('click', function() {
    slide(2, this);
  });
}

init();