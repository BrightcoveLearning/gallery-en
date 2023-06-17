"use strict";


/* ====== Define JS Constants ====== */
const sidebarToggler = document.getElementById('docs-sidebar-toggler');
const sidebar = document.getElementById('docs-sidebar');
const sidebarLinks = document.querySelectorAll('#docs-sidebar .scrollto');
const path = window.location.pathname;



/* ===== Responsive Sidebar ====== */

window.onload = function () {
  responsiveSidebar();
};

window.onresize = function () {
  if (path === '/' || path === '/index.html') {
    sidebar.classList.remove('sidebar-visible');
    sidebar.classList.add('sidebar-hidden');
  } else {
    responsiveSidebar();
  }
};


function responsiveSidebar() {
  sidebar.classList.remove('sidebar-visible');
  sidebar.classList.add('sidebar-hidden');
  let w = window.innerWidth;
  let url = window.location.href;
  if (w >= 1200 && url.includes('.html')) {
    sidebar.classList.remove('sidebar-hidden');
    sidebar.classList.add('sidebar-visible');
  
  } else {
    sidebar.classList.remove('sidebar-visible');
    sidebar.classList.add('sidebar-hidden');
  }
};

sidebarToggler.addEventListener('click', () => {
  if (sidebar.classList.contains('sidebar-visible')) {
    sidebar.classList.remove('sidebar-visible');
    sidebar.classList.add('sidebar-hidden');

  } else {
    sidebar.classList.remove('sidebar-hidden');
    sidebar.classList.add('sidebar-visible');
  }
});


/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

sidebarLinks.forEach((sidebarLink) => {

  sidebarLink.addEventListener('click', (e) => {

    e.preventDefault();

    var target = sidebarLink.getAttribute("href").replace('#', '');

    //console.log(target);

    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });


    //Collapse sidebar after clicking
    if (sidebar.classList.contains('sidebar-visible') && window.innerWidth < 1200) {

      sidebar.classList.remove('sidebar-visible');
      sidebar.classList.add('sidebar-hidden');
    }

  });

});


/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Initialize Gumshoe
var spy = new Gumshoe('#docs-nav a', {
  offset: 69 //sticky header height
});


/* ====== SimpleLightbox Plugin ======= */
/*  Ref: https://github.com/andreknieriem/simplelightbox */

var lightbox = new SimpleLightbox('.simplelightbox-gallery a', {/* options */ });











