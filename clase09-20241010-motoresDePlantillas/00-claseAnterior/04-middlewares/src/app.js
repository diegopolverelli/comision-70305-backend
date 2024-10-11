import express from 'express';
import cors from "cors"
import { logger } from './middlewares/logger.js';
import { formatName } from './middlewares/formatName.js';
import { auth } from './middlewares/auth.js';

import { router as usuariosRouter } from './routes/usuariosRouter.js';
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(logger)

app.use("/api/usuarios", usuariosRouter)

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})
app.get('/datos', auth, (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('datos confidenciales');
})
app.get(
    '/contacto',
    auth,
    formatName,
    (req, res, next) => {
        console.log(`Otro middleware "on line" a nivel ruta`)

        next()
    },
    (req, res) => {
        let { nombre } = req.query
        if (!nombre) {
            nombre = ""
        }
        let respuesta = `Contacto ${nombre}`
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(respuesta);
    }
)

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
