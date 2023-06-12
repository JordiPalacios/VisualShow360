
const buttons = document.querySelectorAll('#servicio2 button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const carta = event.target.parentNode;
    const parrafo = carta.querySelector('p');
    const textoBoton = event.target.textContent;

    if (textoBoton === '+ Información') {
      parrafo.style.display = 'block';
      event.target.textContent = '- Info';
      event.target.style.transform = 'scale(0.9)';
    } else {
      parrafo.style.display = 'none';
      event.target.textContent = '+ Información';
      event.target.style.transform = 'scale(1)';
    }
  });
});