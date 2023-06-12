(function () {
    // definimos las variables de escucha
    let navbar = document.querySelector('#navbar');
    let checkboxchecked = document.querySelector('#input-checkbox');
    // El main no es una id por eso no va con #
    let main = document.querySelector('main');
    // definimos el evento para saber la altura del menu
    let navbarHeight = navbar.getBoundingClientRect().height;
    // creamos la zona breakpoint que sera donde se fija el menu
    let breakpoint = main.offsetTop - navbarHeight;
    // definimos la variable donde guardaremos la pos de la ventana
    let windowPos;
    let windowPosTemp;
    // definimos la variable para saber si el menu esta fijo o no
    isFixed = false;

    // funcion para actualizar la posicion actual de la ventana
    // ademas he añadido que si se actualiza la pagina con un scroll, si tenemos menu abierto se cierre automaticamente
    function updatePos() {
        windowPos = window.scrollY;
        let tonSetTimeout = setTimeout(() => {
            windowPosTemp = window.scrollY
        }, 2000);
        if ((windowPos != windowPosTemp) && tonSetTimeout && isFixed) {
            checkboxchecked.checked = false;
            navbar.classList.remove('open');
        }
    };

    // Creamos la funcion que hara de logica para fijar o no el menu
    function onScroll() {
        updatePos();

        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');
            checkboxchecked.checked = false;
            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + 'px;';
            isFixed = true;
        } else if (windowPos <= breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    };

    document.addEventListener('scroll', onScroll);

})();
