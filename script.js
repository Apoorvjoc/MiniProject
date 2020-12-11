// variables
// const cartBtn = document.querySelector('.cart-btn');
// const closeCartBtn = document.querySelector('.close-cart');
// const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
// const cartItems = document.querySelector('.cart-items');
// const clearTotal = document.querySelector('.cart-total');
// const clearcontent = document.querySelector('.cart-content');
// const productsDOM = document.querySelector('.products-center');
const toggle = document.querySelector('.toggle-nav')

function showCart(){
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add("showCart");
}

function hello()
{
    alert('hello');
    // cartOverlay.classList.add('transparentBcg');
    // cartDOM.classList.add("showCart");
}

function removeCart(){
    cartOverlay.classList.remove('transparentBcg');
    cartDOM.classList.remove("showCart");
}
function showNavbar(){
    toggle.classList.toggle('show-navbar');
    // toggle.className = " show-navbar"
    // alert('hello')
}

function closeNavbar(){
    toggle.classList.remove('show-navbar');
    // toggle.className = " show-navbar"
    // alert('hello')
}