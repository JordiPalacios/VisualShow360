(function () {
    let navbar = document.querySelector('#navbar');

    if (window.innerWidth >= 700) {
        navbar.classList.add("openResponsive");
    } else {
        navbar.classList.remove("openResponsive");
    }
})();
