

class Persona{

    static especie="humano"
    static cantidadPersonasDefinidas=0

    // nombre=""
    // email=""
    // edad=0
    #password=""
    constructor(nombre, email, edad, password=""){
        this.nombre=nombre
        this.email=email
        this.edad=edad
        this.#password=password
        Persona.cantidadPersonasDefinidas++
    }

    static mostrarCantidadPersonas(){
        return this.cantidadPersonasDefinidas
    }

    static modificarEspecie(especie){
        this.especie=especie
        // Persona.especie=especie
    }

    retornaPassword(){
        return this.#password
    }

    #prueba(){
        console.log(`Este método es privado`)
    }


    saludar(){
        this.#prueba()
        let prueba=this.verNombre()
        console.log(prueba)
        console.log(`Hola...!!!, soy ${this.nombre}`)
    }
    verNombre(){
        return this.nombre.toUpperCase()
    }
    cambiarNombre(nuevoNombre){
        this.nombre=nuevoNombre
    }
    login(email, password){
        if(email!==this.email || password!==this.#password){
            console.log(`Credenciales inválidas`)
            return 
        }

        console.log(`Login exitoso...!!!`)
    }

}

let persona01=new Persona("Mariana", "marina@test.com", 27)
let persona02=new Persona("Julian", "julian@test.com", 31, "123456")
let persona03=new Persona("Pedro", "pedrito@test.com", 54, "abcdfg")

console.log(persona01)
console.log(persona02)
console.log(persona03)
// console.log(`El nombre de la persona01 es ${persona01.nombre}`)
console.log(`El nombre de la persona01 es ${persona01.verNombre()}`)
persona01.cambiarNombre("Mariana Jimena")
console.log(`El nombre de la persona01 es ${persona01.verNombre()}`)
let persona04=new Persona("Juan", "juan@test.com", 18, "abcdfg")

persona02.login("julian@test.com", "123")
persona02.login("julian@test.com", "123456")
persona03.saludar()
console.log(`la contraseña de ${persona02.verNombre()} es: ${persona02.retornaPassword()}`)

// persona01.modificarEspecie("ser humano")
Persona.modificarEspecie("ser humano")
console.log(Persona.especie)

console.log(`La cantidad de personas definidas es de ${Persona.mostrarCantidadPersonas()}`)


// console.log(persona02.#password)







// let alumnoRegularNota=7