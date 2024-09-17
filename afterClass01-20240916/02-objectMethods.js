let alumno01={
    nombre:'Jimena',
    apellido:'Martinez',
    fechaNacimiento:new Date(1990,2,4),
    email: 'jmartinez@test.com',
    domicilio:'Las Bases 1974, Haedo'
}

console.log(alumno01)
// Number()
// String()
let resultado=Object.keys(alumno01)
console.log(resultado)
resultado=Object.values(alumno01)
console.log(resultado)
resultado=Object.entries(alumno01)
console.log(resultado)






let factura={
    numero:107998,
    codigoCliente:'A005',
    fecha: new Date(2023,0,10),
    idTributario:'30333333331',
    subtotal:10000,
    impuestos:{
        tasasGenerales:1.2,
        iibb:2.4,
        iva:21,
        otros:0.5
    }
}

// calcular el total de la factura
// subtotal + impuestos = total
let tasasImpuestos=Object.values(factura.impuestos)
console.log(tasasImpuestos)

let impuestos=0
tasasImpuestos.forEach((impuesto, i)=>{
    console.log(`recorriendo impuesto pos ${i}, valor: ${impuesto}`)
    impuestos=impuestos+factura.subtotal*impuesto/100
})
console.log(impuestos)
let total=factura.subtotal+impuestos
console.log(total)

total=tasasImpuestos.reduce((acum, impuesto)=>{
    return acum+=factura.subtotal*impuesto/100
}, factura.subtotal)

console.log(total)

total=tasasImpuestos.reduce((acum, impuesto)=>acum+=factura.subtotal*impuesto/100, factura.subtotal)
console.log(total)




