const productsSlider = document.querySelector('.productsSlider');
const productsSliderWrapper = document.querySelector('.productsSlider__slide-wrapper');

// slide

const productsSlide = document.querySelector('.productsSlider__slide');
const productsSlidePrev = document.querySelector('.productsSlider__slide-prev');
const productsSlideActive = document.querySelector('.productsSlider__slide-active');
const productsSlideNext = document.querySelector('.productsSlider__slide-next');
// buttons
const buttonPrev = productsSlider.querySelector('.productsSlider__button-prev')
const buttonNext = productsSlider.querySelector('.productsSlider__button-next')

function sliderProducts(){
    if(productsSliderWrapper.hasChildNodes()) {
        var collectionslide = productsSliderWrapper.childNodes;
        for (let i = 0; i < collectionslide.length;i++){
            collectionslide[i]
            console.log(collectionslide[i]);

            if(collectionslide[0]){
                
            }
        }
    }

    if(!productsSlide.classList.contains('.productsSlider__slide-prev')){

    }
}

buttonPrev.addEventListener('click', sliderProducts);
