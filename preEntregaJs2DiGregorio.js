
let tarea ='buscar';

//definicion del objeto
class unProducto {
    constructor(nombre, precio, stock){
        this.nombre = nombre.toLowerCase();
        this.precio = Number(precio);
        this.stock = Number(stock);
        this.vendido = false;
        this.ventas = 0;
    }
    vender(){
        this.vendido = true;
        this.stock--;
        this.ventas++;
        let valorIva = this.precio * 0.21;
    }
}
//array de objeto Productos, inicial
//estos registros fallan al actualizarse, por no INCLUIR los metodos del CONSTRUCTOR
//NO funciona método "vender()" en estos registros por no haber sido creados con el CONSTRUCTOR
const losProductos = [
    {nombre: 'sal', precio: 25, stock: 250, vendido: false, ventas: 0},
    {nombre: 'pimienta', precio: 56, stock: 150, vendido: false, ventas: 0},
    {nombre: 'tomates', precio: 250, stock: 85, vendido: false, ventas: 0},
    {nombre: 'galletitas', precio: 130, stock: 128, vendido: false, ventas: 0}
];
//Productos agregados con push y unshift
//estos registros SI INCLUYEN los metodos del constructor
let prod1 = new unProducto('virulana', 150, 43);
let prod2 = new unProducto('ACEITE', 740, 21);
let prod3 = new unProducto('ZANAHORIA', 30, 62);
let prod4 = new unProducto('limón', 25, 88);
let prod5 = new unProducto('vinagre', 432, 50);
losProductos.push(prod1, prod3, prod5, prod4);
losProductos.unshift(prod2);

function ubicarProducto(tarea){
    let buscar = prompt(`Buscar producto acción: ${tarea}`).toLowerCase();
    elemento = losProductos.findIndex((campo)=> campo.nombre === buscar);
    console.table(losProductos[elemento]);
}
function venderProducto(){
    ubicarProducto('vender');
    losProductos[elemento].vender();
    console.table(losProductos[elemento].nombre, losProductos[elemento].ventas);
}
function eliminarProducto(){
    ubicarProducto('eliminar');
    losProductos.splice(elemento,1);
}
function agregarProducto(){
    let nombre = prompt('Producto: ');
    let precio = prompt('Precio: ');
    let stock = prompt('Stock: ');
    let nuevoProducto = new unProducto(nombre, precio, stock);
    losProductos.push(nuevoProducto);
}

console.table(losProductos);
