
const operacion=(a, b, callback)=>{
    if(typeof a!="number" || typeof b!="number"){
        return callback(new Error("argumentos inválidos..."))
    }
    return callback(null, a, b)
}

const sumar=(error, op1, op2)=>{
    if(error){
        // console.log(error.message)
        return error.message
    }
    return op1+op2
}
const restar=(error, op1, op2)=>{
    if(error){
        // console.log(error.message)
        return error.message 
    }
    return op1-op2  
}

let resultado=operacion(5, 4, sumar)
console.log(resultado)
resultado=operacion(5, 4, restar)
console.log(resultado)
// try {
//     resultado=operacion("5", 4, restar)
//     console.log(resultado)
    
// } catch (error) {
//     console.log(error.message)
// }

resultado=operacion("5", 4, restar)
console.log(resultado)

console.log("fin...!!!")