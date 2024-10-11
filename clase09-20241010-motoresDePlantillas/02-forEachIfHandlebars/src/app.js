import express from 'express';
import {engine} from "express-handlebars"
import { router as vistasRouter } from './routes/viewsRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use('/api/heroes', heroesRouter)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
