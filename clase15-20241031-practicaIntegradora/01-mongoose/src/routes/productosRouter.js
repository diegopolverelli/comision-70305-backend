import { Router } from 'express';
import { ProductosManager } from '../dao/ProductosManager.js';
import { isValidObjectId } from 'mongoose';
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

router.post("/", async(req, res)=>{
    let {code, descrip, price, stock}=req.body
    if(!code || !descrip || !price){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos...!!!`})
    }

    // validaciones...!!!
    try {
        let existe=await ProductosManager.getProductoBy({code})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe el producto con code ${code}`})
        }

        let nuevoProducto=await ProductosManager.createProducto({code, descrip, price, stock})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoProducto});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})        
    }

})

router.put("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id inválido`})
    }

    let aModificar=req.body

    // validaciones varias... necesarias

    try {
        let productoModificado=await ProductosManager.updateProducto(id, aModificar)
        // if(productoModificado.modifiedCount>0){
        //     res.setHeader('Content-Type','application/json');
        //     return res.status(200).json({payload:"Producto modificado...!!!"});
        // }else{
        //     res.setHeader('Content-Type','application/json');
        //     return res.status(400).json({error:`Error al modificar`})
        // }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productoModificado});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})           
    }

})

router.delete("/:id", async(req, res)=>{
    let {id}= req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id inválido`})
    }
    // validaciones... 
    try {
        let productoEliminado=await ProductosManager.deleteProducto(id)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productoEliminado});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})          
    }
})