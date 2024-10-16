import express from 'express';
import {Server} from "socket.io"
import { router as heroesRouter } from './routes/heroesRouter.js';
const PORT=3000;
let serverSocket

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.use(
    '/api/heroes',
    (req, res, next)=>{
        req.serverSocket=serverSocket
        next()
    }, 
    heroesRouter
)

app.get("/oferta", (req, res)=>{

    let{oferta}=req.query
    if(!oferta){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`complete oferta`})
    }

    serverSocket.emit("oferta", oferta)


    res.send({mensaje:"oferta enviada...!!!"})
})


const serverHTTP=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

serverSocket=new Server(serverHTTP)   // const io=new Server(server)

serverSocket.on("connection", socket=>{
    // console.log(socket.handshake)
    console.log(`Se conecto un cliente con id ${socket.id}`)

    socket.emit("saludo", {emisor:"Server WebSocket", mensaje:"Bienvenido al servidor. Identificate...!!!"})

    socket.on("id", nombre=>{
        console.log(`El cliente con id ${socket.id} se ha identificado como ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

})

let temperatura=0
setInterval(() => {
    temperatura=Math.floor(Math.random()*(7)+27)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    serverSocket.emit("temperatura", temperatura)
}, 1000);