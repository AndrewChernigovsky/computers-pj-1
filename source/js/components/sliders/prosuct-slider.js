const productsSlider = document.querySelector('.productsSlider');
const productsSliderWrapper = document.querySelector('.productsSlider__slide-wrapper');

// slide

const productsSlide = document.querySelector('.productsSlider__slide');
const buttonPrev = document.querySelector('.productsSlider__button-prev');
const buttonNext = document.querySelector('.productsSlider__button-next');

let IndexofSliderProducts = 1;
showsSlidesProducts(IndexofSliderProducts);

function sliderProductsPrevious(){
    showsSlidesProducts(IndexofSliderProducts -= 1);
}

function sliderProductsCurrent(n){
    showsSlidesProducts(IndexofSliderProducts = n);
}

function sliderProductsNext(){
    showsSlidesProducts(IndexofSliderProducts += 1);
}

function showsSlidesProducts(n){
    let i;
    let slides = document.getElementsByClassName("productsSlider__slide");
    if ( n > slides.length){
        IndexofSliderProducts = 1
    }

    if (n < 1) {
        IndexofSliderProducts = slides.length
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[IndexofSliderProducts - 1].style.display = "block";
};

buttonPrev.addEventListener('click', sliderProductsPrevious);
buttonNext.addEventListener('click', sliderProductsNext);
