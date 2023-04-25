const navBar = document.querySelector('.header__nav');
const mobHamburger = document.querySelector('.header__container__menu');
///hamburger
function toggleHamburger() {
  mobHamburger.classList.toggle('active');
  navBar.classList.toggle('active');
}
mobHamburger.addEventListener('click', toggleHamburger);

///accordion
const contentBox = document.getElementsByClassName('section__faq__accordion__box');
for (let i = 0; i < contentBox.length; i++) {
  contentBox[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
