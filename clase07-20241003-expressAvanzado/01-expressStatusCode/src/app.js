import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]


app.get("/usuarios", (req, res)=>{

    res.status(200).send(usuarios)
})

app.post("/usuarios", (req, res)=>{

    res.status(201).send({nuevoUsuario:req.body})
})


app.get("/usuarios/:id", (req, res)=>{
    if(Math.random()>.5){
        return res.status(500).send(`Error inesperado. Reintente en unos minutos`)
    }


    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        return res.status(400).send(`Error, el id debe ser numércio`)
    }

    let usuario=usuarios.find(u=>u.id===id)
    if(!usuario){
        return res.status(404).send(`No existen usuarios con id ${id}`)
    }

    res.status(200).send(usuario)
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
