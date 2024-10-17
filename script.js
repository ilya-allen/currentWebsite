'use strict';

const header = document.querySelector('.navigator');
const rightArrow = document.querySelector('.right_arrow');
const leftArrow = document.querySelector('.left_arrow');
const picOne = document.querySelector('#photo_1');
const picTwo = document.querySelector('#photo_2');
const picThree = document.querySelector('#photo_3');
const circleOne = document.querySelector('#circle_1')
const circleTwo = document.querySelector('#circle_2')
const circleThree = document.querySelector('#circle_3')
const headerIcon = document.querySelector('.header_pic')
const topButton = document.querySelector('.top_button')

let picCount = 1;
let lastKnownScrollPosition = 0;

topButton.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
})

document.addEventListener('scroll', function (){
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition >= 1000) {
        header.style.position = "fixed"
    } else {
        header.style.position = "absolute"
    }
})

rightArrow.addEventListener('click', function() {
    picCount++;

    if (picCount == 4) {
        picCount = 1;
    }
    
    if (picCount === 1) {
        picOne.style.opacity = 100;
        picThree.style.opacity = 0;
        circleThree.style.opacity = 0.5;
        circleOne.style.opacity = 1;
    } else if (picCount == 2) {
        picTwo.style.opacity = 100;
        picOne.style.opacity = 0;
        circleOne.style.opacity = 0.5;
        circleTwo.style.opacity = 1;
    } else if (picCount == 3) {
        picTwo.style.opacity = 0;
        picThree.style.opacity = 100;
        circleTwo.style.opacity = 0.5;
        circleThree.style.opacity = 1;
    }
})

leftArrow.addEventListener('click', function() {
    picCount -= 1;

    if (picCount == 0) {
        picCount = 3;
    }
    
    if (picCount === 1) {
        picOne.style.opacity = 100;
        picTwo.style.opacity = 0;
        circleTwo.style.opacity = 0.5;
        circleOne.style.opacity = 1;
    } else if (picCount === 2) {
        picTwo.style.opacity = 100;
        picThree.style.opacity = 0;
        circleThree.style.opacity = 0.5;
        circleTwo.style.opacity = 1;
    } else if (picCount === 3) {
        picThree.style.opacity = 100;
        picOne.style.opacity = 0;
        circleOne.style.opacity = 0.5;
        circleThree.style.opacity = 1;
    }
})

headerIcon.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
})

const headerButtons = document.querySelectorAll('.header_buttons');
const navi = document.querySelector('.navigator')

console.log(headerButtons)
console.log(document.querySelector('#social_button'))

headerButtons.forEach(function(i) {
    i.addEventListener('mouseover', function() {
        headerButtons.forEach(function(el) {
            if(el !== i) {
                el.style.opacity = 0.5
            }
        })
    })

    i.addEventListener('mouseout', function(i) {
        headerButtons.forEach(function(el) {
            if(el !== i) {
                el.style.opacity = 1;
            }
        })
    }) 
})
