import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

router.get('/heroes',async(req,res)=>{
    let{nombre}=req.query

    let heroes=await HeroesManager.getHeroes()

    res.render("heroes", {
        heroes, nombre
    })
    

})