import express from 'express';
import mongoose from 'mongoose';
import { router as productosRouter } from './routes/productosRouter.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/productos", productosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const conectarDB=async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://backend70305:CoderCoder@cluster0.ot7vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                dbName: "clase14"
            }
        )
        console.log("DB Online...!!!")
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

conectarDB()
