
var div = document.getElementById('numero');
var boton = document.getElementById('boton');
boton.onclick = function tirardado(){
 var random = Math.floor(Math.random()*6);
 div.textContent=random;
}
