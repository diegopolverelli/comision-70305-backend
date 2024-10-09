import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

let nombres=["Carlos", "Luciana", "Mirna", "Claudia"]

app.get("/api/nombres", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombres});
} )
app.get("/api/nombres/:pos", (req, res)=>{
    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`pos debe ser numérica`})
    }

    // validaciones
    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo se aceptan posiciones entre 1 y ${nombres.length}`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre:nombres[pos-1]});
} )
app.post("/api/nombres", (req, res)=>{
    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`complete prop. nombre en body`})
    }

    // validaciones... 
    nombres.push(nombre)

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({nombre, nombres});
} )
app.put("/api/nombres/:pos", (req, res)=>{
    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`complete prop. nombre en body`})
    }    

    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`pos debe ser numérica`})
    }

    // validaciones
    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo se aceptan posiciones entre 1 y ${nombres.length}`})
    }

    let nombreAnterior=nombres[pos-1]
    nombres[pos-1]=nombre


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombreAnterior, modificadoPor: nombre});
} )
app.delete("/api/nombres/:pos", (req, res)=>{
    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`pos debe ser numérica`})
    }

    // validaciones
    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo se aceptan posiciones entre 1 y ${nombres.length}`})
    }

    let nombreEliminado=nombres[pos-1]
    nombres.splice(pos-1,1)


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombreEliminado, nombres});
} )

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
