//utiliza todos los métodos que creaste en las clases de archivo class
import { Uno } from "./clase.js";
import { Dos } from "./clase.js";

let edA=document.getElementById("editaA");
let edB=document.getElementById("editaB");
let mostrarA=document.getElementById("a");
let mostrarB=document.getElementById("b");
let mostrarC=document.getElementById("c");
let mostrarD=document.getElementById("d");
let mostrar=document.getElementById("mostrar")

let uno = new Uno();
let dos = new Dos("UAL","TORREÓN");

mostrar.addEventListener("click", function(){
    uno.editaA(edA.value);
    uno.editaB(edB.value);

    mostrarA.innerHTML="Dato número 1: " + uno.consultaA();
    mostrarB.innerHTML="Dato número 2: " + uno.consultaB();
    mostrarC.innerHTML="Parámetro 1: " + dos.consultaC();
    mostrarD.innerHTML="Parámetro 2: " + dos.consultaD();
})




