import {capturaHtml, recargaPagina, numeroRandom} from "./my-functions.js";

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
  let nuevoLi = document.createElement("li"); // se crea unn elemento li para la lista html
  if (addAmigo.trim() === ""){ // trim() elimina espacios en blanco al inicio y final de la cadena para validar que el campo no este vacio
    alert("Debe ingresar un nombre valido");
    txtAmigo.value = "";
  }
  else{
    nuevoLi.innerHTML = addAmigo; // al elemento li se le asigna el valor obtenido del campo de texto html
    listaAmigos.push(addAmigo); // el valor obtenido del campo de texto se añade a la lista
    txtAmigo.value = "";
    ulListaAmigos.appendChild(nuevoLi); // a la lista html se le añade el elenemto li como elemeto hijo
    console.log(listaAmigos);
    //btnSortearAmigo.removeAttribute("disabled")
  }
}
btnAgregarAmigo.addEventListener("click", agregarAmigo);

function sortearAmigo(){
  if (listaAmigos.length < 3){
    alert("Debes ingresar al menos 3 amigos para poder realizar el sorteo");
  }
  else{
    let sorteo = numeroRandom(listaAmigos.length); // se ramdomisa un numero entre 1 y el largo de la lista
    let nuevoLi = document.createElement("li");
    ulListaAmigos.style.display = "none"; // oculta la vista de la lista con los nombres
    nuevoLi.innerHTML = `Tu amigo secreto es: ${listaAmigos[sorteo - 1]}`; // se imprime el valor del numero ramdom como indice de la lista, -1 ya que los indices arrancan desde 0 y no desde 1
    ulResultado.appendChild(nuevoLi);
    btnSortearAmigo.setAttribute("disabled", "");// cuando se juega el sorteo el boton se bloquea
    recargaPagina(6000);// recarga la pagina luego de 10 segundos de haber sorteado el amigo secreto
  }
}
btnSortearAmigo.addEventListener("click", sortearAmigo);