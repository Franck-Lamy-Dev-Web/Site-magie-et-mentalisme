/* OnScroll animation effects */

const slidingElements = document.querySelectorAll('.reveal')

window.addEventListener('scroll', () => {
     slidingElements.forEach(element => {
          const { scrollTop, clientHeight } = document.documentElement;
          const topElementtoTopViewport = element.getBoundingClientRect().top;
          if (scrollTop > (scrollTop + topElementtoTopViewport).toFixed() - clientHeight * 0.99) {
               element.classList.add('reveal-visible')
          }
     });
     



})

/* Slider */

const sliderImages = document.querySelectorAll('.slider-img');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const max = sliderImages.length - 1;
let imageIndex = 0

const removeActiveAll = () => {
     sliderImages.forEach(image => {
          image.classList.remove("active")
          image.classList.remove("rightToLeft")
          image.classList.remove("leftToRight")
     });
}
const nextImage = () => {
     removeActiveAll()
     if (imageIndex < max) {
          imageIndex++;
     }
     else {
          imageIndex = 0
     }
     sliderImages[imageIndex].classList.add('active')
     sliderImages[imageIndex].classList.add('leftToRight')
}

const previousImage = () => {
     removeActiveAll()
     if (imageIndex > 0) {
          imageIndex--;
     }
     else {
          imageIndex = max
     }
     sliderImages[imageIndex].classList.add('active')
     sliderImages[imageIndex].classList.add('rightToLeft')

}

rightArrow.addEventListener('click', () => {
     nextImage()
});

leftArrow.addEventListener('click', () => {
     previousImage()
});
