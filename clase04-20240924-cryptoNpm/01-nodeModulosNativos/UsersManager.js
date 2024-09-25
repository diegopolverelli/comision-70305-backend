const crypto=require("crypto")
const SECRET="CoderCoder123"


class UsersManager{
    static #Usuarios=[]
    // constructor(){
    //     this.Usuarios=[]
    // }

    static mostrarUsuarios(){
        return this.#Usuarios
    }

    static addUser(nombre, apellido, username, password){

        // validaciones...
        let existe=this.#Usuarios.find(u=>u.username===username)
        if(existe){
            console.log(`Ya existe un usuarios ${username}`)
            return 
        }

        let id=1
        if(this.#Usuarios.length>0){
            id=Math.max(...this.#Usuarios.map(d=>d.id))+1   // [{id:1, nombre:...}, {id:2, nombre:...}]
        }

        password=crypto.createHmac("sha256", SECRET).update(password).digest("hex")
        
        let nuevoUsuario={
            id, 
            nombre, 
            apellido, 
            username, 
            password
        }
        
        this.#Usuarios.push(nuevoUsuario)
        return nuevoUsuario
    }
    
    static login(username, password){
        password=crypto.createHmac("sha256", SECRET).update(password).digest("hex")
        let usuario=this.#Usuarios.find(u=>u.username===username && u.password===password)
        if(!usuario){
            console.log(`Credenciales invalidas`)
            return 
        }

        console.log(`Login exitoso para el usuario ${usuario.nombre}...!!!`)
    }
}

// UsersManager.
UsersManager.addUser("Juan", "Lopez", "jlopez", "123")
UsersManager.addUser("Natalia", "Rodriguez", "nati2024", "123")
UsersManager.addUser("Jimena", "Lopez", "jimelopez", "123")
UsersManager.addUser("Juan", "Lopez", "jlopez", "123")
console.log(UsersManager.mostrarUsuarios())
UsersManager.login("nati2024", "abc")
UsersManager.login("nati2024", "123")
