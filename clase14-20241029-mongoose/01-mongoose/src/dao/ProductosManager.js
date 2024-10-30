import { productosModelo } from "./models/productos.model.js";

export class ProductosManager{
    static async getProductos(){
        return productosModelo.find()
    }

    static async createProducto(producto={}){
        return await productosModelo.create(producto)
    }
}