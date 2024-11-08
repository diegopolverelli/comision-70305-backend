import express from 'express';
import mongoose from 'mongoose';
import { mongourl } from './utils.js';


const estudiantesCol = 'estudiantes'

const estudiantesEsquema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String,
})

const estudiantesModelo = mongoose.model(estudiantesCol, estudiantesEsquema);


try {
    await mongoose.connect(mongourl)
    console.log(`Conexión a DB establecida`);

} catch (error) {
    console.log(error.message)
}

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {

    let estudiantes = await estudiantesModelo.find()

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ estudiantes });
})

app.get('/1', async (req, res) => {

    let estudiantes = await estudiantesModelo.aggregate(
        [
            {
                $group: {
                    _id: '$grade',
                    nota: { $min: '$grade' },
                    detalle: {
                        $push: {
                            nombreCompleto: { $concat: ['$first_name', ' ', '$last_name'] },
                            nota: '$grade',
                            comentario: 'me cae bien',
                            _id: 0
                        }
                    },
                }
            },
            {
                $sort: { nota: -1 }
            }
        ]
    )

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ estudiantes });
})


app.get('/2', async (req, res) => {
    let resultado = await estudiantesModelo.aggregate([
        {
            $group: {
                _id: '$group',
                detalle: {
                    // $push:'$$ROOT'
                    $push: {
                        nombreCompleto: { $concat: ['$first_name', ' ', '$last_name'] },
                        nota: '$grade',
                    }
                }
            }
        },
    ])

    res.setHeader('Content-Type', 'application/json');
    res.json({ resultado })

})


app.get('/3', async (req, res) => {
    let resultado = await estudiantesModelo.aggregate([
        {
            $match: { group: '1B' }
        },
        {
            $group: {
                _id: '$group',
                notaPromedio: { $avg: '$grade' },
                detalle: {
                    // $push:'$$ROOT'
                    $push: {
                        nombreCompleto: { $concat: ['$first_name', ' ', '$last_name'] },
                        nota: '$grade',
                    }
                }
            }
        },
        {
            $unwind: '$detalle' // Desagrupar el array 'detalle'
        },
        {
            $sort: { 'detalle.nombreCompleto': -1 } // Ordenar por nombreCompleto
        },
        {
            $group: {
                _id: '$_id',
                notaPromedio: { $first: '$notaPromedio' },
                detalle: { $push: '$detalle' } // Agrupar nuevamente por _id
            }
        }
    ])

    res.setHeader('Content-Type', 'application/json');
    res.json({ resultado })

})

app.get('/3b', async (req, res) => {
    let resultado = await estudiantesModelo.aggregate([
        {
            $match: { group: '1B' }
        },
        {
            $sort: { first_name: 1 } // Ordenar por nombreCompleto
        },
        {
            $group: {
                _id: '$group',
                notaPromedio: { $avg: '$grade' },
                detalle: {
                    // $push:'$$ROOT'
                    $push: {
                        nombreCompleto: { $concat: ['$first_name', ' ', '$last_name'] },
                        nota: '$grade',
                    }
                }
            }
        },
    ])

    res.setHeader('Content-Type', 'application/json');
    res.json({ resultado })

})

app.get('/3c', async (req, res) => {
    let resultado = await estudiantesModelo.aggregate([
        {
            $match: { group: '1B' }
        },
        {
            $group: {
                _id: '$group',
                notaPromedio: { $avg: '$grade' },
                detalle: {
                    // $push:'$$ROOT'
                    $push: {
                        nombreCompleto: { $concat: ['$first_name', ' ', '$last_name'] },
                        nota: '$grade',
                    }
                }
            }
        },
        {
            $project:{
                _id:0,
                titulo: 'Calificaciones 1B',
                notaPromedio: 1,
                apertura: {
                    $sortArray:{input:"$detalle", sortBy:{last_name:1}}
                }
            }
        }

    ])

    res.setHeader('Content-Type', 'application/json');
    res.json({ resultado })

})



app.get('/4',async(req,res)=>{
    let resultado=await estudiantesModelo.aggregate([
        {
            $match:{group:'1A'}
        },
        {
            $group:{
                _id:'$group',
                notaPromedio:{$avg:'$grade'},
                detalle:{
                    $push:'$$ROOT'
                }
            }
        },
    ])
    
    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})

app.get('/5',async(req,res)=>{
    let resultado=await estudiantesModelo.aggregate([
        {
            $group:{
                _id:'Todos los estudiantes',
                notaPromedio:{$avg:'$grade'},
                // detalle:{
                //     $push:'$$ROOT'
                // }
            }
        },
    ])
    
    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})


app.get('/6',async(req,res)=>{
    let resultado=await estudiantesModelo.aggregate([
        {
            $match:{gender:'Male'}
        },
        {
            $group:{
                _id:'$gender',
                notaPromedio:{$avg:'$grade'},
                detalle:{
                    $push:'$$ROOT'
                }
            }
        },
        {
            $project:{
                _id:0,
                titulo: 'Calificaciones hombres',
                notaPromedio: 1,
                apertura: {
                    $sortArray:{input:"$detalle", sortBy:{last_name:1}}
                }
            }
        }
    ])
    
    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})

app.get('/7',async(req,res)=>{
    let resultado=await estudiantesModelo.aggregate([
        {
            $match:{gender:'Female'}
        },
        {
            $group:{
                _id:'$gender',
                notaPromedio:{$avg:'$grade'},
                detalle:{
                    $push:'$$ROOT'
                }
            }
        },
        {
            $project:{
                _id:0,
                titulo: 'Calificaciones mujeres',
                notaPromedio: 1,
                apertura: {
                    // $sortArray:{input:"$detalle", sortBy:{last_name:1}}
                    $sortArray:{input:"$detalle", sortBy:{grade:-1}}
                }
            }
        }
    ])
    
    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})



const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});

