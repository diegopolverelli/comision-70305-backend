let numeros=[1,2,3,4,5]

const miMap=(datoArray=[], callback)=>{
    if(!Array.isArray(datoArray)){
        return `Argumeto debe ser un array`
    }
    
    let resultado=[]
    
    for(let i=0; i<datoArray.length; i++){
        let resultadoCallback=callback(datoArray[i])
        resultado.push(resultadoCallback)
    }
    
    return resultado
}


console.log(numeros.map(n=>n**2))
console.log(miMap(numeros, n=>n**2))