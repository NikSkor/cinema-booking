const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (e)=> {
    const elem = e.target;
    if (!elem.classList.contains('booked')){
        elem.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent=totalPrice;
    }

})

menuButton.addEventListener('click', ()=> {
    menu.classList.toggle('is-open');
})