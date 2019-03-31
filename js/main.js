'use strict';

const openBtn = document.querySelector('.nav-trigger');
const closeBtn = document.querySelector('.nav-close');
const menu = document.querySelector('.nav');

function showMenu() {
  console.log('open');
  menu.classList.add('show');
  menu.classList.remove('hide');
}

function hideMenu() {
  console.log('hide');
  menu.classList.add('hide');
  menu.classList.remove('show');
}

openBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);