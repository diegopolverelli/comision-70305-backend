import express from 'express';
import {engine} from "express-handlebars"
import { router as vistasRouter } from './routes/vistasRouter.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/", vistasRouter)

app.get("/factura",(req, res)=>{
    let {cliente, importe}=req.query
    if(!cliente) cliente="XXXXXX"
    if(!importe) importe="99999.99"

    let factura=`
<h2>Factura cliente ${cliente}</h2>
<hr>
<p>Importe a pagar ${importe}</p>
    `

    res.status(200).send(factura)
})

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
