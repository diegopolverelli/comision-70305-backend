import mongoose from 'mongoose';
import { mongourl } from './utils.js';

let alumnoEsquema=new mongoose.Schema({
    codigo: Number,
    nombre: String, 
    apellido: String,
    email: String,
    estudios: String,
    origen: String,
    promedio: Number
  }, {collection:'bigAlumnos'})

alumnoEsquema.index({nombre: -1})
alumnoEsquema.index({nombre: -1, apellido:1})


let alumnoModelo=mongoose.model('alumnos', alumnoEsquema)


const entorno=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)

        // let resultado=await alumnoModelo.find().explain()
        let resultado=await alumnoModelo.find({nombre:"Morena"}).explain()
        // let resultado=await alumnoModelo.findOne({nombre:"Morena"}).explain()


        console.log(JSON.stringify(resultado.executionStats,null,5))


        process.exit()

    } catch (error) {
        console.log(error.message)
    }

}

entorno()