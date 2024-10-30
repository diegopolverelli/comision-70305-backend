import { Router } from 'express';
import { ProductosManager } from '../dao/ProductosManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let productos=await ProductosManager.getProductos()

        res.setHeader('Content-Type','application/json')
        res.status(200).json({productos})
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }

})