
//var casilla = document.getElementById('numero');
var casilla = document.getElementsByClassName('numero');
casilla[0].addEventListener("click",mostrarNumero);

function mostrarNumero() {
  var casillaNumero = document.getElementsByClassName('numero')
  casillaNumero[0].innerHTML = 1;
}

var mina = document.getElementById('mina');
mina.addEventListener("click",mostrarMina);

function mostrarMina() {
  var casillaMina = document.getElementById('mina');
  var mensaje = document.getElementById('termina');
  mensaje.innerHTML = "Game Over!"
  casillaMina.innerHTML = "X";
}

var vacia = document.getElementById('color');
vacia.addEventListener("click",cambiarColor);

function cambiarColor() {
  var casillaVacia = document.getElementById('color');
  casillaVacia.style.backgroundColor = "blue";
}
