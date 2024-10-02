import express from "express"
import { HeroesManager } from "./dao/HeroesManager.js"

const PORT=3000

const app=express()

app.get("/", (req, res)=>{
    
    res.send(`<h2 style="color:blue;">Bienvenidos...!!!</h2>`)
})

app.get("/heroes", (req, res)=>{
    let heroes=HeroesManager.getHeroes()

    res.send(heroes)
})


app.listen(PORT, ()=>{
    console.log(`Server escuchando el puerto ${PORT}`)
})