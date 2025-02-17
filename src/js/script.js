// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

// Ambil tombol hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

// Tambahkan event listener
hamburger.addEventListener('click', function () {
    this.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
