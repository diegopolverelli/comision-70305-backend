// console.log("hola")
const moment = require("moment")

let fechaActual=moment()
console.log(fechaActual)

let fechaCumple=moment("19780323")

if(!fechaCumple.isValid()){
    console.log(`Fecha incorrecta`)
    return 
}

console.log(`Usted ha nacido hace ${fechaActual.diff(fechaCumple, "year")} años`)
