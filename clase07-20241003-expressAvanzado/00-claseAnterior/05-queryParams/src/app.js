import express from "express"
const PORT=3000
const app=express()

app.get("/", (req, res)=>{

    let {nombre}=req.query
    let saludo=`Hola ${nombre?nombre:""}`

    res.send({
        queryParams: req.query, 
        saludo
    })
})

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:4, nombre:"Juan", email:"juan1@test.com", password:"123", rol:"user"},
    {id:5, nombre:"Juan", email:"juan2@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    {id:6, nombre:"Juan", email:"juan3@test.com", password:"123", rol:"user"},
]

app.get("/usuarios", (req, res)=>{

    let {nombre, email}=req.query
    let respuesta=usuarios
    if(nombre){
        respuesta=respuesta.filter(u=>u.nombre.toLowerCase()===nombre.toLowerCase())
    }
    if(email){
        respuesta=respuesta.filter(u=>u.email.toLowerCase()===email.toLowerCase())
    }

    res.send(respuesta)
})

app.get("/usuarios/:id", (req, res)=>{
    let {id}=req.params
    console.log(typeof id, id)
    id=Number(id)
    if(isNaN(id)){
        return res.send(`Ingrese un id numérico`)
    }

    let usuario=usuarios.find(u=>u.id===id)
    if(!usuario){
        return res.send(`No existen usuarios con id ${id}`)
    }

    res.send(usuario)

})

app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`)
})