import { Router } from 'express';

// import { AlumnosManager } from '../dao/AlumnosManager.js';
import { AlumnosMongoManager as AlumnosManager} from '../dao/AlumnosMongoManager.js';
// import { CursosManager } from '../dao/CursosManager.js';
import { CursosMongoManager as CursosManager } from '../dao/CursosMongoManager.js';

import { procesaErrores } from '../utils.js';
import { isValidObjectId } from 'mongoose';
export const router=Router()

// AlumnosManager.path="./src/data/alumnos.json"
// CursosManager.path="./src/data/cursos.json"

router.get('/',async(req,res)=>{

    try {
        let alumnos=await AlumnosManager.getAlumnos()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({alumnos})
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.post("/", async(req, res)=>{
    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre / email son requeridos`})
    }

    // validaciones
    
    try {
        let alumnos=await AlumnosManager.getAlumnos()
        let existe=alumnos.find(a=>a.email===email)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe ${email} en DB`})
        }
        
        let nuevoUsuario=await AlumnosManager.createAlumno({nombre, email})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});
    } catch (error) {
        procesaErrores(res, error)
    }
})


router.post("/:aid/curso/:cid", async(req, res)=>{
    let{aid, cid}=req.params
    // aid=Number(aid)
    // cid=Number(cid)
    // if(isNaN(aid) || isNaN(cid)){
    if(!isValidObjectId(aid) || !isValidObjectId(cid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Los id deben ser id validos de MongoDB`})
    }

    let alumnos=await AlumnosManager.getAlumnos()
    let alumno=alumnos.find(a=>a._id==aid)
    if(!alumno){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existe el alumno con id ${aid}`})
    }

    let cursos=await CursosManager.getCursos()
    let curso=cursos.find(c=>c._id==cid)
    if(!curso){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existe curso con id ${cid}`})
    }

    let cursandoIndice=alumno.cursando.findIndex(c=>c.id==cid)
    if(cursandoIndice===-1){
        alumno.cursando.push({
            id: cid, 
            reinscripciones: 0
        })
    }else{
        alumno.cursando[cursandoIndice].reinscripciones++
    }

    try {
        let alumnoModificado=await AlumnosManager.modificaAlumno(aid, alumno)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({alumnoModificado});
    } catch (error) {
        procesaErrores(res, error)
    }

})

router.put("/:aid", async(req, res)=>{
    let {aid}=req.params
    // aid=Number(aid)
    // if(isNaN(aid)){
    if(!isValidObjectId(aid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Los id deben ser id validos de MongoDB`})
    }

    let alumnos=await AlumnosManager.getAlumnos()
    let alumno=alumnos.find(a=>a._id==aid)
    if(!alumno){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existe alumno con id ${aid}`})
    }

    let cursando=req.body
    // validaciones
    if(!Array.isArray(cursando)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Formato inválido de los datos`})
    }

    let cursos=await CursosManager.getCursos()
    let error=false
    cursando.forEach(c=>{
        let data=cursos.find(curso=>curso._id==c.id)
        if(!data){
            error=true
        }
    })

    if(error){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Error con alguno de los cursos enviados`})
    }

    cursando=cursando.map(c=>{
        if(c.reinscripciones){
            return {
                id:c.id, 
                reinscripciones:c.reinscripciones
            }
        }else{
            return {
                id:c.id, 
                reinscripciones: 0
            }
        }
    })

    alumno.cursando=cursando
    let alumnoModificado=await AlumnosManager.modificaAlumno(aid, alumno)
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({alumnoModificado});

})