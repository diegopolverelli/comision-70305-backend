const moment=require("moment")

let fechaActual=moment()
console.log(fechaActual)
let fechaEspecial=moment("20221218T183000")
console.log(fechaEspecial.fromNow())