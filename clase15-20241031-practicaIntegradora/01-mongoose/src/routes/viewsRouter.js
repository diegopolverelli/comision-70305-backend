import {Router} from "express"
import { ProductosManager } from "../dao/ProductosManager.js"
export const router=Router()

router.get("/", async(req, res)=>{

    let productos=await ProductosManager.getProductos()
    console.log(productos)
    console.log(productos[0])
    console.log(Object.keys(productos[0]))

    res.render("home", {
        productos
    })
})