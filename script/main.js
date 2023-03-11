const nav = document.querySelector('.header')
const navBtn = document.querySelector('.header__hamburger')
const navBtnImg = document.querySelector('#header__hamburger-img')

navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = './img/close-icon.svg'
    } else {
        navBtnImg.src = './img/Hamburger-Button.svg'
    }
}