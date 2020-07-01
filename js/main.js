'use strict';

const face = document.querySelector('.face');
const head = document.querySelector('.head');
const page = document.querySelector('.page');

function wink() {
    face.innerHTML = ';)';
}

function unwink() {
    face.innerHTML = ':)';
}

head.addEventListener('mouseover', wink);
page.addEventListener('mouseout', unwink);
