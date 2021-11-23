// const Año = parseInt ("2021");
// let nombre = prompt ("Ingrese su Nombre");
// let apellido = prompt("Ingrese su Apellido");

// if (nombre == "" || apellido == ""){
//     console.error( "Error! Datos no ingresados");
//     alert("Ingresar Datos Validos");
// } else {
//     let fechaNacimiento = parseInt( prompt("Ingrese su fecha de Nacimiento"));
//     let edad = parseInt( Año - fechaNacimiento );
//         if ( fechaNacimiento == "" || edad < 18 ){  
//             alert("No puede Ingresar!");
//         } else {
//             alert("Hola "+ nombre + " " + apellido + "\nBienvenido al curos de JavaScript!");
//             console.log(nombre);
//             console.log(apellido);
//             console.log(edad);

// }

class Producto {
    constructor(id,nombre, precio) {
        this.id     = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock  = true; 
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    sinStock() {
        this.stock = false;
    }
}

const productos = [];
productos.push(new Producto(1,"Nvidia Gigabyte GeForce 10 Series GT 1030 2GB", 21550));
productos.push(new Producto(2,"Nvidia Gigabyte GeForce 10 Series GT 1050 4GB", 49200));
productos.push(new Producto(3,"Nvidia MSI Ventus GeForce RTX 30 Series RTX 3070 8GB", 210000));
productos.push(new Producto(4,"AMD Afox Radeon RX 500 Series RX 580 8GB", 119990));

for ( const producto of productos)
    producto.sumaIva();
  
console.log(productos);

const buscarGt1050 = productos.find( nombre => nombre.id === 2);
console.log(buscarGt1050);

// DOM 

let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;

elemento = document.domain;
elemento = document.URL;

elemento = document.links;
elemento = document.links[3];
elemento = document.links[3].className;
elemento = document.links[3].classList;


console.log(elemento);
console.log(typeof elemento);


const div = document.getElementById("productos");
console.log(div);

const header = document.getElementsByClassName("header");
console.log(header);

// const divBox = document.getElementsByClassName("box__uno");
// console.log(divBox);
// console.log(divBox[0].innerHTML);

let h3 = document.querySelectorAll('div h3');
// console.log(h3);
// console.log(h3[3].innerHTML);
// console.log(h3[0].innerHTML);

let li = document.querySelectorAll('li');
console.log(li);

for (const titulo of h3) {
    console.log(titulo.innerHTML);
}


let parrafo = document.createElement("p");

parrafo.innerHTML = "<h4>Mas buscadas</h4>";

// document.body.appendChild(parrafo);
// document.querySelector('main').appendChild(parrafo);
// document.getElementById('coder').appendChild(parrafo);

//  -------------------EVENTOS--------------------

let divPc = document.getElementById("pc");

console.log(divPc);

// divPc.onclick = () =>{console.log("click en pc armadas")};
// divPc.onmousemove = () =>{console.log("mover sobre pc armadas");}
 

let input1 = document.getElementById("nombre");
console.log(input1);

let input2 = document.getElementById("email");
console.log(input2);

let input3 = document.getElementById("edad");

let input4 = document.getElementById("pais");

input1.onkeyup = () => {console.log("nombre")};
input2.onkeydown = () => {console.log("email")};

input1.onchange = () => {console.log("cambio 1")};
input2.onchange = () => {console.log("cambio 2")};
input3.onchange = () => {console.log("cambio 3")};
input4.onchange = () => {console.log("cambio 4")};

let miFormulario = document.getElementById("Formulario");
console.log(miFormulario);

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario enviado");
}