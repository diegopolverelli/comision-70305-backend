import express from 'express';
import { uploader } from './utils.js';
import fs from "fs"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})
app.post("/usuario", uploader.single("foto") ,(req, res)=>{

    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre`})
    }

    if(!req.file){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No se recibieron imagenes`})
    }
    
    // validaciones
    let{mimetype, path, originalname}=req.file
    let tipoArchivo=mimetype.split("/")[0]
    if(tipoArchivo!=="image"){
        fs.unlinkSync(path)

        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo se admiten imagenes`})
    }


    // grabar en DB la info...

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        nombre, 
        mimetype, 
        path, 
        originalname
    });

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
