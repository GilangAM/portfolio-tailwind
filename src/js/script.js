// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Ambil tombol hamburger dan menu navigasi
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Tambahkan event listener untuk toggle menu
hamburger.addEventListener('click', function (e) {
    e.stopPropagation(); // Mencegah event bubbling ke window
    this.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger untuk menutup menu
window.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden'); // Pastikan hidden digunakan untuk menutup
    }
});

// Darkmode Toggle
const Toggle = document.querySelector('#toggle');
const html = document.querySelector('html');

Toggle.addEventListener('click',function(){
    if (Toggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// Pindahkan toggle sesuai tema
if (
  localStorage.theme === 'dark' || 
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark'); // Tambahkan class dark
  Toggle.checked = true; // Centang toggle
} else {
  document.documentElement.classList.remove('dark'); // Hapus class dark
}
