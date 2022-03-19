const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imagesItem = $$('.slider_item');
const imagesList = $('.slider_main');
const dotItem = $$(".slider-dots-item");
const captionsItem = $$('.slider_item-caption');


let  imgNumber = imagesItem.length;
let index = 0; 

// Slider


imagesItem.forEach((item, index) => {
    dotItem[index].addEventListener("click", function() {
        
        Slider(index);
    })
});

imgSlider  = () => {
    index++;
    if(index  >=  imgNumber ) {
        index = 0
    }
    
    Slider(index)
}

Slider = (index) => {
    const cap = captionsItem[index];
    $('.slider-dots-item.active').classList.remove('active');
    $('.slider_item-caption.active').classList.remove('active');
    $('.slider_item.active').classList.remove('active');
       
    imagesItem[index].classList.add("active");

    cap.classList.add("active");
    dotItem[index].classList.add("active");

}

setInterval(imgSlider, 2000);


// Slider Top Games

const imgsTopGame = $$('.top_game-item');
const listTopGame = $('.top_game-container');

let imgTopGameNumber = imgsTopGame.length;
let index1 = 0;

SliderTopGame = (index1) => {
    listTopGame.style.left = "-" + index1*25 + "%";
}

imgsTopGame.forEach((value, index1) => {
    if (index1 = 7) {
        index1 = 0;
    }
    SliderTopGame(index1);
});

imgSliderTopGame  = () => {
    index1++;
    if(index1  >=  imgTopGameNumber-3) {
        index1 = 0;
    }
    
    
    SliderTopGame(index1);
}

setInterval(imgSliderTopGame,4000)