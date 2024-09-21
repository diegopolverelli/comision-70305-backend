import Persona from "./Persona.js"
import {usuarios, f1 as suma, Heroe} from "./varios.js"
import * as utilidades from "./varios.js"
import Villano, {usuarios as users, f2 as resta, saludos} from "./varios.js"

import fs from "fs"
import {writeFileSync as crearArchivo} from "fs"

fs.writeFileSync("./archivo01.txt", "Prueba...!!!")
let ruta=import.meta.dirname+"/datos22.txt"
console.log(ruta)
fs.writeFileSync(ruta, "Prueba datos...!!!")
crearArchivo("./archivo02.txt", "Prueba 2...!!!")



let persona01=new Persona("Marina", "Romero")
console.log(persona01.saludo())

console.log(suma(4, 3))

console.log(utilidades.usuarios)

let heroe01=new Heroe("Robin", "Dick Grayson")
console.log(heroe01.verIdentidad())

utilidades.saludos.saludoFormal()

let villano01=new Villano("Thanos", "sin alias conocido")
console.log(villano01.verIdentidad())

console.log(import.meta.dirname)
console.log(import.meta.filename)