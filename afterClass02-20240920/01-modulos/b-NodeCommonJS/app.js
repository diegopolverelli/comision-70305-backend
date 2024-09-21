
// require
const Persona = require("./Persona.js")
// const Persona=require("./Persona.js").Persona
const utilidades = require("./varios.js")
const suma = require("./varios.js").f1
const Heroe = require("./varios.js").Heroe

const { f2, Heroe: ClaseHeroe } = require("./varios")

const fs = require("fs")
const escribeArchivo = require("fs").writeFileSync
const { writeFileSync } = require("fs")

fs.writeFileSync("./miArchivo.txt", "Prueba de archivos")
escribeArchivo("./miArchivo2.txt", "Prueba de archivos")
writeFileSync("./miArchivo3.txt", "Prueba de archivos")





let persona01 = new Persona("Micaela", "Perez")
console.log(persona01.saludo())

let persona02 = new Persona("Diego", "Ramos")
console.log(persona02.nombreCompleto())


console.log(utilidades.f1(5, 6))

let heroe01 = new utilidades.Heroe("Hulk", "Bruce Banner")
console.log(heroe01.verIdentidad())

utilidades.saludos.saludo()

console.log(suma(6, 2))

let heroe02 = new Heroe("Ironman", "Tony Stark")
console.log(heroe02.verIdentidad())

let usuario = {
    nombre: "Juan",
    apellido: "Lopez",
    edad: 38,
    email: "jlopez@test.com",
    domicilio: "Alvear 2024"
}

// let nombre=usuario.nombre
// let edad=usuario.edad

let { email, nombre, edad = 18, domicilio = "no indicado" } = usuario

console.log(nombre, edad, domicilio)

let { email: correoElectronico, nombre: nombre01 } = usuario

console.log(correoElectronico, nombre01)

const buscarAlumno = () => {
    // busca en DB

    return {
        name: "Peter",
        lastName: "Smith"
    }
}

let { name, lastName: apellidos } = buscarAlumno()
console.log(name, apellidos)

// const buscaDatos=async()=>{
//     let consulta=await fetch("https://reqres.in/api/users?page=2")
//     let datos=await consulta.json()
//     console.log(datos)

// }
// buscaDatos()

// fetch("https://reqres.in/api/users?page=2")
//     .then(res=>{
//         res.json()
//             // .then(res2=>console.log(res2))
//             .then(({data, page})=>{
//                 console.log(data)
//                 console.log(page)
//             })
//     })


console.log("este es mi domicilio:", usuario.domicilio)

let heroe3 = new ClaseHeroe("Batman", "Bruce Wayne")
console.log(heroe3.alias)
console.log(__dirname)
console.log(__filename)

// "./carpeta01"
// "c:\"