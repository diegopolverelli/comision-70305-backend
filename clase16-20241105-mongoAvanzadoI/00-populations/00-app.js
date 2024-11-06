import mongoose from "mongoose";

try {
    await mongoose.connect(
        "mongodb+srv://backend70305:CoderCoder@cluster0.ot7vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName:"clase16"
        }
    )
    console.log(`DB online...!!!`)
} catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit()  
}

const cursosModelo=mongoose.model(
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

const alumnosModelo=mongoose.model(
    "alumnos", 
    new mongoose.Schema(
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
                            ref:"cursos"
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
)

// cursosModelo.deleteMany()
// alumnosModelo.deleteMany()

// let curso01=await cursosModelo.create({
//     descrip: "Calculo II", horas: 18, docente: "Gabriel Lopez"
// })
// let curso02=await cursosModelo.create({
//     descrip: "Matemática Discreta I", horas: 12, docente: "Rafael Gonzalez"
// })

// let alumno01=await alumnosModelo.create({
//     nombre: "Carolina Marquez", 
//     email: "cmarquez@test.com",
//     cursando: [
//         {
//             cursoId: curso01._id,
//             notaPromedio: 7, 
//             reincripciones: 0
//         },
//         {
//             cursoId: curso02._id,
//             notaPromedio: 8,
//             reincripciones: 1
//         }
//     ]
// })

// console.log(curso01)
// console.log(curso02)
// console.log(alumno01)

// let alumnos=await alumnosModelo.find()
// let alumnos=await alumnosModelo.find().populate("cursando.cursoId")
let alumnos=await alumnosModelo.find().populate({
    path: "cursando.cursoId",
    // populate:{
    //     path: "docente"
    // }
})
// .populate("cp")

console.log(JSON.stringify(alumnos, null, 5))

let alumnosComisA=await alumnosModelo.find({}).populate("cursando.cursoId")
let alumnoMejorPromedio=await alumnosModelo.findOne({}).populate("cursando.cursoId")

process.exit()