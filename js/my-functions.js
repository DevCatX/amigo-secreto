// Estas son funciones utiles de acceso rapido

export function capturaHtml(elemento){
  return document.getElementById(elemento);
}

export function salidaTexto(elemento, texto){
  let elementoHtml = document.getElementById(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

export function limpiarCajaTexto(elemento){
  return document.getElementById(elemento).value = "";
}

export function numeroRandom(numero){
  return Math.floor(Math.random()*numero)+1
}

export function recargaPagina(tiempo){
  return setTimeout(() => {location.reload();}, tiempo);
}
