import { Router } from 'express';
import { UsuariosDAO } from '../dao/UsuariosDAO.js';
export const router=Router()

router.get('/usuarios',async(req,res)=>{
    let {page, limit}=req.query

    let {docs: usuarios, totalPages, hasNextPage, hasPrevPage, nextPage, prevPage}=await UsuariosDAO.getUsers(page, limit)
    // console.log(usuarios)


    res.render("home", {
        usuarios,
        totalPages, 
        hasNextPage, 
        hasPrevPage, 
        nextPage, 
        prevPage
    })

})