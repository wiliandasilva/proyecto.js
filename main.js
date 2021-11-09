const Año = parseInt ("2021");
let nombre = prompt ("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");

if (nombre == "" || apellido == ""){
    console.error( "Error! Datos no ingresados");
    alert("Ingresar Datos Validos");
} else {
    let fechaNacimiento = parseInt( prompt("Ingrese su fecha de Nacimiento"));
    let edad = parseInt( Año - fechaNacimiento );
        if ( fechaNacimiento == "" || edad < 18 ){  
            alert("No puede Ingresar!");
        } else {
            document.write("<div class=box2 >" + "<h2>" + "Hola "+ nombre + " " + apellido + "\nBienvenido al curos de JavaScript!" + "</h2>" + "</div>");
            console.log(nombre);
            console.log(apellido);
            console.log(edad);

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
        }
}