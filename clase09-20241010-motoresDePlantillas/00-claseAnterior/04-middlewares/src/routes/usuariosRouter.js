import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
export const router=Router()

router.use(auth)

router.get('/',(req,res)=>{

    let usuarios=[
        {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
        {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
        {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    ]

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuarios})
})