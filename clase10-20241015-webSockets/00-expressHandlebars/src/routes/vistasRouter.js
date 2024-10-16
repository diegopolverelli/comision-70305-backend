import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    let {nombre, estilo}=req.query
    if(!estilo) estilo="styles"

    let usuarios=[
        {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
        {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
        {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    ]

    res.render("home", {
        usuarios, 
        nombre,
        estilo
    })
})

router.get("/contacto", (req, res)=>{

    res.render("contacto", {estilo:"styles"})
})