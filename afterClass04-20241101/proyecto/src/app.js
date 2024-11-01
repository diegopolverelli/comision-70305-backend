import express from 'express';
import {engine} from "express-handlebars"
import mongoose from "mongoose"

import { router as cursosRouter } from './routes/cursosRouter.js';
import { router as alumnosRouter } from './routes/alumnosRouter.js';
import { router as vistasRouter } from './routes/viewsRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))


app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/cursos", cursosRouter)
app.use("/api/alumnos", alumnosRouter)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

// try {
//     await mongoose.connect(
//         "mongodb+srv://backend70305:CoderCoder@cluster0.ot7vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//         {
//             dbName:"afterClass04"
//         }
//     )
//     console.log(`DB online...!!!`)
// } catch (error) {
//     console.log(`Error al conectar a DB: ${error.message}`)
// }

mongoose.connect(
    "mongodb+srv://backend70305:CoderCoder@cluster0.ot7vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
        dbName:"afterClass04"
    }
)
.then(()=>{
    console.log(`DB online...!!!`)
})
.catch(e=>console.log(e.message))

