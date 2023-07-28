// Creamos una funcion que se auto inicia al finally. De este modo una vez se ha cargado ella misma se ejecuta
(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#input-checkbox'); 
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})();