var casilla = document.getElementsByClassName('numero');

for (var i = 0; i < casilla.length; i++) {
  casilla[i].addEventListener("click",mostrarNumero);
}

function mostrarNumero() {
    this.innerHTML = 1;
}

var mina = document.getElementsByClassName('mina');

for (i = 0; i < mina.length; i++) {
  mina[i].addEventListener("click",mostrarMina);
}

function mostrarMina() {
  this.innerHTML = "X";

  var mensaje = document.getElementById('termina');
  mensaje.innerHTML = "Game Over!"

  event.stopPropagation();
}

var vacia = document.getElementsByClassName('vacia');

for (var i = 0; i < vacia.length; i++) {
  vacia[i].addEventListener("click",cambiarColor);
}

function cambiarColor() {
    this.style.backgroundColor = "blue";
}

var boton = document.getElementById('boton');
boton.addEventListener("click",reiniciarJuego);

function reiniciarJuego() {
    location.reload();
}
