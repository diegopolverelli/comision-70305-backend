import {Router} from "express"

export const router=Router()

router.get("/", (req, res)=>{
    let users=`Usuarios get`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({users});
})
router.get("/:id", (req, res)=>{
    let{id}=req.params
    let users=`Usuarios get user ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({users});
})
router.post("/", (req, res)=>{
    let users=`Crear usuario post`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({users});
})
router.put("/:id", (req, res)=>{
    let{id}=req.params
    let users=`Usuarios put / modificar user ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({users});
})
router.delete("/:id", (req, res)=>{
    let{id}=req.params
    let users=`Usuarios delete user ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({users});
})