import mongoose from "mongoose";

export const carritoModelo=mongoose.model(
    "carritos",
    new mongoose.Schema(
        {
            productos: {
                type:[
                    {
                        id: String, 
                        cantidad: Number
                    }
                ]
            }
        },
        {
            timestamps: true
        }
    )
)