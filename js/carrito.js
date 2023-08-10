const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title"> Carrito </h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);


    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3> 
        <p>${producto.precio} $</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${producto.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${producto.cantidad * producto.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
            if(producto.cantidad !== 1) {
                producto.cantidad--;}
            saveLocal();
            pintarCarrito();
        })

        let sumar = carritoContent.querySelector(".sumar")

        sumar.addEventListener("click", () => {
            producto.cantidad++;
            saveLocal();
            pintarCarrito();
        })

        let eliminar = document.createElement("span");

        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "total-content"
    totalComprado.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalComprado);
}

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = (e) => {

    Swal.fire({
        title: '¿Estas seguro que quieres borrar el producto de tu carrito?',
        icon: 'question',
        html: 'Se borraran los productos seleccionados',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const foundNombre = e.target.parentNode.children[1].innerText
    carrito = carrito.filter((carritoId) => {
        return carritoId.nombre !== foundNombre;
    });
    carritoNumerito();
    saveLocal();
    pintarCarrito();
}
        })

    carritoNumerito();
    saveLocal();
    pintarCarrito();}

const carritoNumerito = () => {

    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.reduce((total, prod) => total + prod.cantidad, 0);

    localStorage.setItem("carritoLength", carritoLength)

    cantidadCarrito.innerText = localStorage.getItem("carritoLength");

};