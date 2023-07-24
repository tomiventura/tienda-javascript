/* 2da preentrega Curso Javascript CoderHouse */
const contenidoTienda = document.querySelector("#contenidoTienda ");
const abrirCarrito = document.querySelector("#verCarrito ");
const modalContainer = document.querySelector("#modal-container");
const cantidadCarrito = document.querySelector("#cantidadCarrito");



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
productos.forEach((producto) => {
    let contenido = document.createElement("div");
    contenido.className = "card"
    contenido.innerHTML = `
    <img src=${producto.img}
    <h2 class="tituloProducto">${producto.nombre}</h2>
    <p class="precioProducto">${producto.precio} $</p>
    `;
    
    contenidoTienda.append(contenido);

    let botonComprar = document.createElement("button")
    botonComprar.innerText = "Añadir al carrito"
    botonComprar.className = "botonComprar"

    contenido.append(botonComprar)

    botonComprar.addEventListener("click", () =>{

    const repeat = carrito.some((repeatProducto) => repeatProducto.nombre === producto.nombre);
    
    if (repeat){
        carrito.map((prod) => {
            if(prod.nombre === producto.nombre){
                prod.cantidad++;
            }
        });
    }else {
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            img: producto.img,
            cantidad: producto.cantidad, 
        });
        }
        console.log(carrito);
        carritoNumerito();  
        saveLocal(); 
    })
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify (carrito));
};

carritoNumerito(); 