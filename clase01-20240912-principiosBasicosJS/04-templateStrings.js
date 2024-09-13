let texto="hola"
let texto1='hola  asdfsadf'
console.log(texto, texto1)


let nombre="Pedro"

console.log(texto+" "+nombre)

let texto3=`hola...!!!

como están???
me llamo ${nombre}, y soy de Perú

`

console.log(texto3)

const factura=(nombre, total)=>{
    return `<h2>Hola ${nombre}.</h2>
    <p>Se genero tu factura por un total de $${total}</p>
    
    `
}

console.log(factura("José", 32000))