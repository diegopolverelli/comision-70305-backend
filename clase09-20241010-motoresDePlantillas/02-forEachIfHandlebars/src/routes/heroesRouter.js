import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    let heroes=await HeroesManager.getHeroes()

    res.status(200).json({heroes})
})