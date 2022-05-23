"use strict";

import {viewModule} from './ViewModule.js';

const newAuthor = document.getElementById('menu_new_author');
newAuthor.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleMenuActive('menu_new_author');
});
const newBook = document.getElementById('menu_new_book');
newBook.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleMenuActive('menu_new_book');
});
const buyBook = document.getElementById('menu_buy_book');
buyBook.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleMenuActive('menu_buy_book');
});
const profile = document.getElementById('menu_profile');
profile.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleMenuActive('menu_profile');
});
const adminPanel = document.getElementById('menu_admin_panel');
adminPanel.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleMenuActive('menu_admin_panel');
});
const menuLogin = document.getElementById('menu_login');
menuLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    hiddenMenuLogin();
    viewModule.showLoginForm();
});
const menuLogout = document.getElementById('menu_logout');
menuLogout.addEventListener('click',(e)=>{
    e.preventDefault();
    hiddenMenuLogout();
});

function toggleMenuActive(selectedElementId){
    const menuElements = document.getElementsByClassName('nav-item');
    for (var i = 0; i < menuElements.length; i++) {
        if(menuElements[i].id === selectedElementId){
            if(!menuElements[i].classList.contains('active')){
                menuElements[i].classList.add('active');
            }
        }else{
            if(menuElements[i].classList.contains('active')){
                menuElements[i].classList.remove('active');
            }
        }
    }
}
function hiddenMenuLogin(){
    document.getElementById('menu_login').classList.add('d-none');
    document.getElementById('menu_logout').classList.remove('d-none');
    toggleMenuActive();
}
function hiddenMenuLogout(){
    document.getElementById('menu_logout').classList.add('d-none');
    document.getElementById('menu_login').classList.remove('d-none');
    toggleMenuActive();
    document.getElementById('content').innerHTML = '';
}

function checkMenu(){
    const userRole = JSON.parse(sessionStorage.getItem('role'));
    if(userRole == null){
        if(!newBook.classList.contain('d-none')){
            newBook.classList.add('d-none');
        }
        if(!buyBook.classList.contain('d-none')){
            buyBook.classList.add('d-none');
        }
        if(!profile.classList.contain('d-none')){
            profile.classList.add('d-none');
        }
        if(!adminPanel.classList.contain('d-none')){
            adminPanel.classList.add('d-none');
        }
        if(!menuLogin.classList.contain('d-none')){
            menuLogin.classList.add('d-none');
        }
        if(menuLogin.classList.contain('d-none')){
            menuLogin.classList.add('d-none');
        }
    }else if('READER'===userRole){
        if(!newBook.classList.contain('d-none')){
            newBook.classList.add('d-none');
        }
        if(!buyBook.classList.contain('d-none')){
            buyBook.classList.remove('d-none');
        }
        if(!profile.classList.contain('d-none')){
            profile.classList.remove('d-none');
        }
        if(!adminPanel.classList.contain('d-none')){
            adminPanel.classList.add('d-none');
        }
        if(!menuLogin.classList.contain('d-none')){
            menuLogin.classList.add('d-none');
        }
        if(menuLogin.classList.contain('d-none')){
            menuLogin.classList.remove('d-none');
        }
    }else if('MANAGER'===userRole){
        if(!newBook.classList.contain('d-none')){
            newBook.classList.remove('d-none');
        }
        if(!buyBook.classList.contain('d-none')){
            buyBook.classList.remove('d-none');
        }
        if(!profile.classList.contain('d-none')){
            profile.classList.remove('d-none');
        }
        if(!adminPanel.classList.contain('d-none')){
            adminPanel.classList.add('d-none');
        }
        if(!menuLogin.classList.contain('d-none')){
            menuLogin.classList.add('d-none');
        }
        if(menuLogin.classList.contain('d-none')){
            menuLogin.classList.remove('d-none');
        }
    }else if('ADMINISTRATOR'===userRole){
        if(!newBook.classList.contain('d-none')){
            newBook.classList.remove('d-none');
        }
        if(!buyBook.classList.contain('d-none')){
            buyBook.classList.remove('d-none');
        }
        if(!profile.classList.contain('d-none')){
            profile.classList.remove('d-none');
        }
        if(!adminPanel.classList.contain('d-none')){
            adminPanel.classList.remove('d-none');
        }
        if(!menuLogin.classList.contain('d-none')){
            menuLogin.classList.remove('d-none');
        }
        if(menuLogin.classList.contain('d-none')){
            menuLogin.classList.remove('d-none');
        }
    }
}
