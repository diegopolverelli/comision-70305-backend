// operador Spread:
let defensa={
    primerCentral:'Romero',
    lateralIzquierdo:'Montiel',
    lateralDerecho:'Tagliafico',
    segundoCentral:'Otamendi'
}

let medio={
    nro5:'Paredes',
    nro8:'DePaul',
    nro7:'DiMaria',
    nro14:'Enzo'
}

let ataque={
    el10:'Lio',
    el9:'Julian',
}

const equipo={
    arquero:"Martinez",
    // lateralDerecho:defensa.lateralDerecho, 
    // lateralIzquierdo:defensa.lateralIzquierdo
    ...defensa,
    ...medio,
    ...ataque,
    lateralDerecho: "Acuña",
    lateralDerecho: "Soñora",
    lateralDerecho: "Ibarra",
    lateralDerecho: "Hernan Diaz",
}

let persona={
    nombre:"Rafael", 
    apellido:"Lopez",
    email:"rlopez@test.com"
}

let aModificar={edad:24, nombre:"Rafael Marcelo"}

persona={
    ...persona,
    ...aModificar
}

console.log(persona)

let equipo2=[1, 2, "boca", "river"]
// let equipo3=[1, 2, "boca", "river", ...ataque] // error

console.log(equipo)



let numeros=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros, ...numeros2]
console.log(todosLosNumeros)


const suma=(a, b, c, d)=>{
    return a+b+c+d
}

console.log(suma(10,10,10,10))
console.log(suma(...numeros))





// operador Rest: ...
console.log(suma(10,10,10,10,10))
console.log(suma(10,10))

const suma2=(a, b, ...resto)=>{
    console.log(a, b, resto)
}

suma2(100)
suma2(100, 200)
suma2(100, 200, 300)
suma2(100, 200, 300, true, "Juan", {nombre:"Raul"})

const sumaVarios=(...sumandos)=>{
    return sumandos.reduce((acum, valor)=>{
        return acum+=valor
    }, 0)
}


console.log(sumaVarios())
console.log(sumaVarios(100))
console.log(sumaVarios(100, 200))
console.log(sumaVarios(100, 200, 300))


// desestructuracion:
// desestructuracion de Objetos:




const utilidades=()=>{
    let pi=3.14
    let numerosPrimos=[2,3,5,7,11,13,17,19,23]
    function suma(a,b){
        console.log(a+b)
    }
    return {
        pi,
        numerosPrimos,
        suma,
        abc:90000
    }
}




// desestructuracion de Arrays:
let heroes=["Superman", "Hulk", "Black-Widow", "Mujer Maravilla", "Batman"]



const useContador=()=>{
    let contador={valor:0}
    const setContador=(valor)=>{
        contador.valor=valor
    }
    return [contador, setContador]
}

