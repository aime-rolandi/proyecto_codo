window.onload = function() {
    fetch('/Aime/pages/aux/nav.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('menu-container').innerHTML = html;
    });
};
