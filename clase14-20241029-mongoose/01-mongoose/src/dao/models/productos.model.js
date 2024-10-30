import mongoose from "mongoose"

const productoSchema=new mongoose.Schema(
    {
        code: {
            type: String, 
            unique: true
        }, 
        descrip: String, 
        price: Number,
        stock: {
            type: Number, 
            default: 0
        }, 
    },
    {
        timestamps: true,
    }
)

export const productosModelo=mongoose.model(
    "productos",
    productoSchema
)
