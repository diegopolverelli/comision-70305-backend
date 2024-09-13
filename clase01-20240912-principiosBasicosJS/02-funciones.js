function suma(a, b){
    // codigo...
    console.log("El resultado es ", a+b)
}

suma(10, 5)
suma(120, 5)
suma(4, 5)

// suma="es la adición de 2 valores"


// suma(14, 5)
// suma(24, 5)

const suma2=function(a, b){
    console.log(a+b)
}
// suma2="otra suma..."
suma2(10,10)


// const sumaFlecha=(a, b)=>{
//     // console.log(a+b)
//     return a+b
// }
const sumaFlecha=(a, b)=>a+b

// let resultado=sumaFlecha(8,8)
// console.log(resultado)
console.log(sumaFlecha(8,8))

// const cuadrado=(a)=>a*a
const cuadrado=a=>a*a
console.log(cuadrado(9))

const saludo=()=>{
    // return "hola...!!!"
}

console.log(saludo())



