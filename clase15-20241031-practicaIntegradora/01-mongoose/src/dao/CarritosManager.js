import { carritoModelo } from "./models/carritoModelo.js";

export class CarritosManager{
    static async createCarrito(){
        let carritoNuevo=await carritoModelo.create({productos:[]})
        return carritoNuevo.toJSON()  // quitarle el "hidratado" al doc de mongoose
    }

    static async getById(id){   
        return carritoModelo.findOne({_id:id})
    }

    static async updateCarrito(id, carrito){
        return await carritoModelo.findByIdAndUpdate(id, carrito, {new:true})
    }
}