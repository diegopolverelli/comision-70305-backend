import express from 'express';
import { DemonManager } from './dao/DemonManager.js';
// import fs from "fs"

const PORT=3000;
const rutaArchivo="./src/data/demonSlayer.json"
const demonManager=new DemonManager(rutaArchivo)

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    res.send("home page")
})

app.get("/ds", async(req, res)=>{
    // let personajes=JSON.parse(fs.readFileSync("./src/data/demonSlayer.json", {encoding:"utf-8"}))
    let personajes=await demonManager.getPersonajes()

    let {limit, skip}=req.query
    let respuesta=personajes
    if(!limit){
        limit=personajes.length
    }else{
        limit=Number(limit)
        if(isNaN(limit)){
            return res.send(`limit debe ser numérico`)
        }
    }
    if(!skip){
        skip=0
    }else{
        skip=Number(skip)
        if(isNaN(skip)){
            return res.send(`skip debe ser numérico`)
        }
    }

    // [].sli
    respuesta=respuesta.slice(skip, limit+skip)

    res.send(respuesta)
})

app.get("/ds/:id", async(req, res)=>{
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        return res.send(`id debe ser numérico`)
    }

    let personajes=await demonManager.getPersonajes()
    let personaje=personajes.find(p=>p.id===id)
    if(!personaje){
        return res.send(`No existen personajes con id ${id}`)
    }

    res.send(personaje)
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});



