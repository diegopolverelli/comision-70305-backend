import { productosModelo } from "./models/productos.model.js";

export class ProductosManager{
    static async getProductos(){
        return await productosModelo.find().lean()
    }

    static async getProductoBy(filtro={}){  // {descrip:"Martillo"}
        return await productosModelo.findOne(filtro).lean()
    }

    static async getProductoByCode(code=""){  //
        return await productosModelo.findOne({code:code}).lean()
    }

    static async createProducto(producto={}){
        let nuevoProducto=await productosModelo.create(producto)
        return nuevoProducto.toJSON()
    }

    static async updateProducto(id, aModificar){
        // return await productosModelo.updateOne({_id:id}, aModificar)
        return await productosModelo.findByIdAndUpdate(id, aModificar, {new: true}).lean()
    }

    static async deleteProducto(id){
        // return await productosModelo.deleteOne({_id:id}) 
        return await productosModelo.findByIdAndDelete(id).lean()
    }
}