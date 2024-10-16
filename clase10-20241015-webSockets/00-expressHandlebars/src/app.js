import express from 'express';
import {engine} from "express-handlebars"

import { router as vistasRouter } from './routes/vistasRouter.js';

import __dirname from './utils.js';
import { join } from 'path';
const PORT=3000;

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
let rutaPublic=join(__dirname, "public")
app.use(express.static(rutaPublic))
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
let rutaViews=join(__dirname, "views")
console.log(rutaViews)
// app.set("views", "./src/views")
app.set("views", rutaViews)

// c:\.. o d:\

app.use("/", vistasRouter)



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
