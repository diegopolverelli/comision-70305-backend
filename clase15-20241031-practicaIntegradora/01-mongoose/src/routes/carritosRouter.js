import { Router } from 'express';
import { CarritosManager } from '../dao/CarritosManager.js';
import { isValidObjectId } from 'mongoose';
import { ProductosManager } from '../dao/ProductosManager.js';
export const router=Router()

router.post('/',async(req,res)=>{

    try {
        let nuevoCarrito=await CarritosManager.createCarrito()
        res.setHeader('Content-Type','application/json')
        res.status(201).json({nuevoCarrito})

    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`${error.message}`})
    }

})

router.post("/:cid/producto/:pid", async(req, res)=>{
    let {cid, pid}=req.params
    if(!isValidObjectId(cid) || !isValidObjectId(pid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id invalido...`})
    }

    // validaciones...
    try {
        let carrito=await CarritosManager.getById(cid)
        if(!carrito){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existe carrito con id ${cid}`})
        }

        let producto=await ProductosManager.getProductoBy({_id:pid})
        if(!producto){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existe producto con id ${pid}`})
        }

        console.log(carrito)
        let indiceProducto=carrito.productos.findIndex(p=>p.id==pid)
        if(indiceProducto===-1){
            carrito.productos.push({
                id: pid, cantidad: 1
            })
        }else{
            carrito.productos[indiceProducto].cantidad ++
        }

        let carritoActualizado=await CarritosManager.updateCarrito(cid, carrito)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({carritoActualizado});
        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`${error.message}`})        
    }
})