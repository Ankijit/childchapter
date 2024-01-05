document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo')
    var navbarfixed = document.getElementById('fixednavbar')
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Check the scroll direction
        if (scrollTop > lastScrollTop) {
            // Scrolling down, hide the navbar
            navbar.style.height = '72px'
            logo.style.height = '45px';
            navbarfixed.style.position = 'fixed'

        } if (scrollTop === 0) {
            // Scrolling up, show the navbar
            navbar.style.height = '112px';
            logo.style.height = '52px';
            navbarfixed.style.position = 'static'
        }

        lastScrollTop = scrollTop;
    });
});