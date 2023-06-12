// Creamos una funcion que se auto inicia al finally. De este modo una vez se ha cargado ella misma se ejecuta
(function () {
    let servicio1 = document.querySelector('#servicio1');
    let servicio2 = document.querySelector('#servicio2');
    let aboutUs = document.querySelector('#aboutUs');
    let contactUs = document.querySelector('#contactUs');
    let dayNightMode = document.querySelector('#dayNightMode'); 
    dayNightMode.addEventListener('click', () => {
        servicio1.classList.toggle('switchModeBlack');
        servicio2.classList.toggle('switchMode');
        aboutUs.classList.toggle('switchModeBlack');
        contactUs.classList.toggle('switchMode');
        dayNightMode.classList.toggle('switchMode');
    })
})();