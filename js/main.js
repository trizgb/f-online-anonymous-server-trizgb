'use strict';

const openBtn = document.querySelector('.nav-trigger');
const closeBtn = document.querySelector('.nav-close');
const menu = document.querySelector('.nav');

function showMenu() {
  menu.classList.add('show');
  menu.classList.remove('hide');
}

function hideMenu() {
  menu.classList.add('hide');
  menu.classList.remove('show');
}

openBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);