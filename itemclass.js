class Item {
    producto; 
    cantidad;
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }

    precioTotal() {
        return this.precio * this.producto.precio;
    }
}