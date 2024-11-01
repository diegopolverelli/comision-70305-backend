import mongoose from "mongoose";

export const alumnosModelo=mongoose.model(
    "alumnos",
    new mongoose.Schema(
        {
            nombre: String,
            email:{
                type: String, unique:true
            },
            cursando:{
                type:[
                    {
                        id: String,
                        reinscripciones: Number
                    }
                ]
            }
        },
        {
            timestamps: true
        }
    )
)