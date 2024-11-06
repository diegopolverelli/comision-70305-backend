import mongoose from "mongoose";

try {
    await mongoose.connect(
        "mongodb+srv://backend70305:CoderCoder@cluster0.ot7vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "clase16"
        }
    )
    console.log(`DB online...!!!`)
} catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit()
}

const cursosModelo = mongoose.model(
    "cursos",
    new mongoose.Schema(
        {
            descrip: String,
            horas: Number,
            docente: String
        },
        {
            timestamps: true
        }
    )
)

const alumnoSchema = new mongoose.Schema(
    {
        nombre: String,
        email: {
            type: String, unique: true
        },
        cursando: {
            type: [
                {
                    cursoId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "cursos"
                    },
                    notaPromedio: Number,
                    reincripciones: Number
                }
            ]
        },
        // cp: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "codigospostales"
        // }
    },
    {
        timestamps: true
    }
)

alumnoSchema.pre("find", function(){
    this.populate("cursando.cursoId").lean()
})
alumnoSchema.pre("findOne", function(){
    this.populate("cursando.cursoId").lean()
})

const alumnosModelo = mongoose.model(
    "alumnos",
    alumnoSchema
)


let alumnos = await alumnosModelo.find()
console.log(JSON.stringify(alumnos, null, 5))


process.exit()