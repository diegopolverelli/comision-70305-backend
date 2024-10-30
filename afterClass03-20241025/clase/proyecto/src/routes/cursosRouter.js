import { Router } from 'express';
import { CursosManager } from '../dao/CursosManager.js';
import { procesaErrores } from '../utils.js';
export const router=Router()

CursosManager.path="./src/data/cursos.json"

router.get('/',async(req,res)=>{

    try {
        let cursos=await CursosManager.getCursos()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({cursos})
    } catch (error) {
        procesaErrores(res, error)
    }

})

router.post("/", async(req, res)=>{
    let {nombre, horas, docente}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre es requerido`})
    }

    // validaciones...
    try {
        let nuevoCurso=await CursosManager.createCurso({nombre, horas, docente})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoCurso});
    } catch (error) {
        procesaErrores
    }
})