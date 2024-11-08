import mongoose from 'mongoose';
import { mongourl } from './utils.js';


const ventasCol='ventas'

const ventasEsquema=new mongoose.Schema({
    name:String,
    size:{
        type: String,
        enum:["small","medium","large"],
        default:"medium"
    },
    price:Number, 
    quantity:Number,
    date:Date, 
})

const ventasModelo=mongoose.model(ventasCol,ventasEsquema);

const env=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`);

        // let resultado=await ventasModelo.find()
        let resultado=await ventasModelo.aggregate(
            [
                {
                    $match:{size:{$in:["medium"]}}
                },
                {
                    $group:{
                        _id: "$name",
                        cantidadTotal: {$sum: "$quantity"}
                    }
                },
                {
                    $sort:{cantidadTotal: -1}
                }
            ]
        )
        console.log(resultado)

        process.exit()

    } catch (error) {
        console.log(`Error en la app: ${error.message}`);
    }
}

env()