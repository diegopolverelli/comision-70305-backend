export const usuarios=[
    {
        id:1,
        nombre:'Raul'
    },
    {
        id:2,
        nombre:'Vanesa'
    },
    {
        id:3,
        nombre:'Carlos'
    },
]

export const f1=(a,b)=>{
    return a+b;
}

const f2=(a,b)=>{
    return a-b;
}

class Heroe{
    constructor(nombre, alias){
        this.nombre=nombre
        this.alias=alias
    }

    verIdentidad(){
        return `La identidad de ${this.nombre} es: ${this.alias}`
    }
}

export default class Villano{
    constructor(nombre, alias){
        this.nombre=nombre
        this.alias=alias
    }

    verIdentidad(){
        return `La identidad de ${this.nombre} es: ${this.alias}`
    }
}

const saludos={
    saludo:()=>console.log("hola...!!!"),
    saludoFormal:()=>console.log("Buen día"),
    despedida:()=>console.log("Buenas noches")
}

export {
    saludos, 
    f2, 
    Heroe
}


