/* 2da preentrega Curso Javascript CoderHouse */

const productos = [
    { nombre: "Camiseta River", precio: 47000 },
    { nombre: "Camiseta Real Madrid", precio: 40000 },
    { nombre: "Camiseta Manchester City", precio: 43000 },
    { nombre: "Camiseta PSG", precio: 35000 },
];

let productoAComprar = prompt("Ingrese el producto que quiera comprar");

console.log( productos.find((producto) => producto.nombre === productoAComprar ) );