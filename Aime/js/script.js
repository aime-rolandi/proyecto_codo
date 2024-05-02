window.onload = function() {
    fetch('/Aime/pages/aux/nav.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('menu-container').innerHTML = html;

        const currentPage = window.location.pathname;
        const menuLinks = document.querySelectorAll('.menu-link');
    
        menuLinks.forEach(link => {
            const linkUrl = link.getAttribute('href');
    
            if (currentPage === linkUrl) {
                link.classList.add('active');
            }
        });
    });
};
$(document).ready(function(){
    $('.fotos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });
});

