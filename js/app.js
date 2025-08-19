import {capturaHtml, salidaTexto, limpiarCajaTexto, numeroRandom} from "./my-functions.js";

// importacion de etiquetas html por Id
let txtAmigo = capturaHtml("txtAmigo");
let btnSortearAmigo = capturaHtml("btnSortearAmigo");
let btnAgregarAmigo = capturaHtml("btnAgregarAmigo");
let ulListaAmigos = capturaHtml("ulListaAmigos");
let ulResultado = capturaHtml("ulResultado");
// variables internas
let listaAmigos = [];
// funciones
function agregarAmigo(){
  let addAmigo = txtAmigo.value;
  let nuevoLi = document.createElement("li");
  if (addAmigo.trim() === ""){
    alert("Debe ingresar un nombre valido");
    txtAmigo.value = "";
  }
  else{
    nuevoLi.innerHTML = addAmigo;
    listaAmigos.push(addAmigo);
    txtAmigo.value = "";
    ulListaAmigos.appendChild(nuevoLi);
    console.log(listaAmigos);
  }
}
btnAgregarAmigo.addEventListener("click", agregarAmigo);

function sortearAmigo(){
  let sorteo = numeroRandom(listaAmigos.length);
  let nuevoLi = document.createElement("li");
  ulListaAmigos.style.display = "none"; // oculta la vista de la lista con los nombres
  nuevoLi.innerHTML = `Tu amigo secreto es: ${listaAmigos[sorteo - 1]}`;
  ulResultado.appendChild(nuevoLi);
}
btnSortearAmigo.addEventListener("click", sortearAmigo);