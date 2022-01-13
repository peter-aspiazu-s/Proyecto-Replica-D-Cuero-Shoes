const slider = document.querySelector('#slider');
let sliderDivs = document.querySelectorAll('.main__slider-div');
let sliderDivsLast = sliderDivs[sliderDivs.length -1];

const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');

slider.insertAdjacentElement('afterbegin', sliderDivsLast);

function Next() {
    let sliderDivsFirst = document.querySelectorAll('.main__slider-div')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderDivsFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}

function Prev() {
    let sliderDivs = document.querySelectorAll('.main__slider-div');
    let sliderDivsLast = sliderDivs[sliderDivs.length -1];
    slider.style.marginLeft = '0%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderDivsLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

btnRight.addEventListener('click', Next);
btnLeft.addEventListener('click', Prev);

setInterval(() => {
    Next();
}, 5000);
