import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let heroes=await HeroesManager.get()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({heroes})
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }

})


router.post("/", async(req, res)=>{
    let {name, alias, ...otros}=req.body
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete name`})
    }

    try {
        let heroes=await HeroesManager.get()
        let existe=heroes.find(h=>h.name===name)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe ${name} en la BD`})
        }        

        let nuevoHeroe=await HeroesManager.create({name, alias, ...otros})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoHeroe});
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})

router.put("/:id", async(req, res)=>{
    let{id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Formato inválido id`})
    }

    let {...aModificar}=req.body
    let cantPropsModificar=Object.keys(aModificar).length
    if(cantPropsModificar===0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No se han ingresado propiedades para modificar`})
    }

    try {
        let heroeModificado=await HeroesManager.update(id, aModificar)  
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({heroeModificado});      
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})

router.delete("/:id", async(req, res)=>{
    let{id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Formato inválido id`})
    }

    try {
        let heroeEliminado=await HeroesManager.delete(id)  
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({heroeEliminado});      
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})