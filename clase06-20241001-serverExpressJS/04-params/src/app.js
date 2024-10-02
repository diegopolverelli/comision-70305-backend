import express from "express"

const PORT=3000
const app=express()


app.get("/", (req, res)=>{


    res.send(`Home Page`)
})
// app.get("/", (req, res)=>{


//     res.send(`otra Home Page`)
// })

app.get("/saludo/:nombre/:apellido", (req, res)=>{

    console.log(req.url)
    console.log(req.headers)

    let nombre=req.params.nombre
    let apellido=req.params.apellido

    res.send(`Hola ${nombre} ${apellido}. Primera ruta...!!!`)
})
app.get("/saludo/:apodo/:textoSaludo", (req, res)=>{

    console.log(req.url)
    console.log(req.headers)

    // let nombre=req.params.nombre
    // let apellido=req.params.apellido

    res.send(`Hola apodo texto`)
})


app.listen(PORT, ()=>{
    console.log(`server escuchando el puerto ${PORT}`)
})