import { Router } from "express"
import { DemonManager } from "../dao/DemonManager.js";
import { procesaErrores } from "../utils.js";

export const router=Router()

DemonManager.setPath("./src/data/demonSlayer.json")

router.get("/", async(req, res)=>{
    try {
        let personajes=await DemonManager.getPersonajes()
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({personajes});
    } catch (error) {
        procesaErrores(res, error)
    }
})
router.get("/:id", async(req, res)=>{
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id debe ser numérico`})
    }

    try {
        let personajes=await DemonManager.getPersonajes()
        let personaje=personajes.find(p=>p.id===id)
        if(!personaje){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen personajes con id ${id}`})
        }
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({personaje});
    } catch (error) {
        procesaErrores(res, error)
    }
})
router.post("/", async(req, res)=>{
    let {name, id, ...otros} = req.body   // ... op rest
    console.log(otros)
    if(id){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No se admite prop. id (se genera automaticamente...!!!)`})
    }
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre es requerido`})
    }

    // validaciones pertinentes
    try {
        let personajes=await DemonManager.getPersonajes()
        let existe=personajes.find(p=>p.name.toLowerCase()===name.trim().toLowerCase())
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe ${name} en BD`})
        }

        let nuevoPersonaje=await DemonManager.addPersonaje({name, ...otros})  // ... acá es op. rest

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoPersonaje});
    } catch (error) {
        procesaErrores(res, error)
    }
})
router.put("/:id", async(req, res)=>{
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id debe ser numérico`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({message:`Se modifico el personaje ${id}`});
})
router.delete("/:id", async(req, res)=>{
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id debe ser numérico`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({message:`Se elimino el personaje ${id}`});
})