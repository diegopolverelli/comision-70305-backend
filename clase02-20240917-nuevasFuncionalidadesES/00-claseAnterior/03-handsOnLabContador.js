
class Contador{
    static cuentaGlobal=0

    constructor(responsable){
        this.responsable=responsable
        this.contador=0
    }

    contar(){
        this.contador++
        Contador.cuentaGlobal++
    }

    getResponsable(){
        return this.responsable
    }

    getCuentaIndividual(){
        return this.contador
    }

    static getCuentaGlobal(){
        return this.cuentaGlobal
    }

}


const c1=new Contador("Raúl")
const c2=new Contador("Julieta")

console.log(c1, c2)

c1.contar()
c1.contar()
c1.contar()
c1.contar()
c1.contar()
c1.contar()
c2.contar()
c2.contar()
c2.contar()
c2.contar()
console.log(`El contador c1, a cargo de ${c1.getResponsable()}, suma ${c1.getCuentaIndividual()}`)
console.log(`El contador c2, a cargo de ${c2.getResponsable()}, suma ${c2.getCuentaIndividual()}`)

console.log(`La suma de todos los contadores es ${Contador.getCuentaGlobal()}`)