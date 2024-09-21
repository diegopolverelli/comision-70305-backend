export default class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre,
        this.apellido=apellido
    }

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    saludo(){
        return `${this.nombre} ${this.apellido} dice: Hola. ¿cómo están?`
    }
}