import { Router } from 'express';
import { AlumnosManager } from '../dao/AlumnosManager.js';
// import { procesaErrores } from '../utils.js';
import {procesaErrores} from "../utils.js"
import { CursosManager } from '../dao/CursosManager.js';
export const router=Router()

AlumnosManager.path="./src/data/alumnos.json"
CursosManager.path="./src/data/cursos.json"

router.get('/alumnos',async(req,res)=>{

    try {
        let alumnos=await AlumnosManager.getAlumnos()
        res.render("alumnos",{
            alumnos
        })
    } catch (error) {
        procesaErrores()
    }

})

router.get("/alumno/:aid", async(req, res)=>{

    let {aid}=req.params
    aid=Number(aid)
    if(isNaN(aid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }

    try {
        let alumnos=await AlumnosManager.getAlumnos()
        let alumno=alumnos.find(a=>a.id===aid)
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen alumnos con id ${aid}`})
        }
        let cursos=await CursosManager.getCursos()

        alumno.cursando.forEach(c=>{
            let dataCurso=cursos.find(curso=>curso.id===c.id)
            if(dataCurso){
                c.nombre=dataCurso.nombre
                c.horas=dataCurso.horas
            }
        })
        res.render("alumno",{
            alumno,
            cursos
        })
    } catch (error) {
        procesaErrores(res, error)
    }

})