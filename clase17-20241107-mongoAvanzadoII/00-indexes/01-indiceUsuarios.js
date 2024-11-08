import mongoose from 'mongoose';
import { mongourl } from './utils.js';

const usuariosEsquema = new mongoose.Schema(
    {
        first_name: {
            type: String, 
            index: true
        }, 
        last_name: String,
        email: {type: String, unique:true}, 
        gender: String, 
        code: Number
    },
    { collection: 'bigUsers' }
)

export const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)


const entorno = async () => {
    try {
        await mongoose.connect(mongourl)
        // await mongoose.connect(
        //     "urlMonDB", {dbName:"clase 17"}
        // )
        console.log(`Conexión a DB establecida`)

        // let resultado=await usuariosModelo.find().explain()

        // let resultado=await usuariosModelo.find({first_name:"Bill"}).explain()

        // let resultado=await usuariosModelo.findOne({first_name:"Marcellina"}).explain()

        let resultado=await usuariosModelo.findOne({first_name:"Brian"}).explain()

        console.log(JSON.stringify(resultado.executionStats, null, 5))



        process.exit()

    } catch (error) {
        console.log(error.message)
    }
}

entorno()