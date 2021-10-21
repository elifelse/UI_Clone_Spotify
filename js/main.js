const btnHamburger = document.querySelector('.btn-hamburger');
const navHamburger = document.querySelector('.nav-hamburger');

btnHamburger.addEventListener('click', handleToggleNavHamburger);

function handleToggleNavHamburger(e){
    navHamburger.classList.toggle('on');
}