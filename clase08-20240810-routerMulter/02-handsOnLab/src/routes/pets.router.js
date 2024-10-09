import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    let pets=`get pets`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({pets})
})
router.get('/:id',(req,res)=>{

    let {id}=req.params
    let pets=`get pet id ${id}`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({pets})
})
router.post('/',(req,res)=>{

    let pets=`post pets`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({pets})
})
router.put('/:id',(req,res)=>{

    let {id}=req.params
    let pets=`modifica / put pet id ${id}`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({pets})
})
router.delete('/:id',(req,res)=>{

    let {id}=req.params
    let pets=`delete pet id ${id}`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({pets})
})