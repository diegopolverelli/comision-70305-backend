import mongoose from "mongoose";

export const cursosModelo=mongoose.model(
    "cursos",
    new mongoose.Schema(
        {
            nombre: String,
            horas: Number,
            docente: String
        },
        {
            timestamps: true
        }
    )
)