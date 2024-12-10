'use strict'

const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlides = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slidesCount = mainSlides.querySelectorAll('div').length

let slideCounter = 0

const changeSlide = (direction) => {
    const heightSliderBlock = container.clientHeight
    if (direction === 'up') {
        slideCounter++
        if (slideCounter >= slidesCount) {
            slideCounter = 0
        }
    } else if (direction === 'down') {
        slideCounter--
        if (slideCounter < 0) {
            slideCounter = slidesCount - 1
        }
    }
    sidebar.style.transform = `translateY(${slideCounter * heightSliderBlock}px)`
    mainSlides.style.transform = `translateY(-${slideCounter * heightSliderBlock}px)`
}

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        changeSlide('up')
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        changeSlide('down')
    };

})

