import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

router.get('/',(req,res)=>{

    let{nombre, importe}=req.query
    if(!nombre) nombre="XXXXXX"
    if(!importe) importe="999999.99"

    res.render("home", {
        nombre, importe
    })
})

router.get("/heroes", async(req, res)=>{

    let heroes=await HeroesManager.getHeroes()
    let numero=Math.floor(Math.random()*(20)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    let heroe=heroes[numero]

    res.render("heroes", {
        heroe
    })
})