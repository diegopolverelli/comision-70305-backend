import { Router } from 'express';
import { UsuariosDAO } from '../dao/UsuariosDAO.js';
export const router=Router()

router.get('/',async(req,res)=>{

    let {page, limit}=req.query

    let usuarios=await UsuariosDAO.getUsers(page, limit)
    usuarios={
        usuarios:usuarios.docs, 
        ...usuarios   // spread
    }
    delete usuarios.docs

    res.setHeader('Content-Type','application/json')
    res.status(200).json(usuarios)
})