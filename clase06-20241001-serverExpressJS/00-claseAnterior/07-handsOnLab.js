const fs=require("fs")
let rutaArchivo="./archivos/Usuarios.json"

class UsuariosManager{

    #path=""
    constructor(rutaArchivo){
        this.#path=rutaArchivo
    }

    async getUsuarios(){
        if(fs.existsSync(this.#path)){
            let usuarios=await fs.promises.readFile(this.#path, {encoding:"utf-8"})
            return JSON.parse(usuarios)
        }else{
            return []
        }
    }

    async addUsuario(nombre, email, apellido){
        if(!nombre || !email){
            console.log(`nombre | email son requeridos`)
            return 
        }

        let usuarios=await this.getUsuarios()
        let existe=usuarios.find(u=>u.email===email)
        if(existe){
            throw new Error(`El usuarios con email ${email} ya existe en BD`)
        }

        let id=1
        if(usuarios.length>0){
            id=Math.max(...usuarios.map(d=>d.id))+1
        }
        
        let nuevoUsuario={
            id, nombre, email, apellido
        }

        usuarios.push(nuevoUsuario)

        await fs.promises.writeFile(this.#path, JSON.stringify(usuarios, null, 5))

        return nuevoUsuario

    }



}

const archivos=async()=>{
    
    let usuariosManager=new UsuariosManager(rutaArchivo)
    try {
        console.log(await usuariosManager.getUsuarios())
        // await usuariosManager.addUsuario("Carlos", "carlos@test.com", "Rodriguez")
        // await usuariosManager.addUsuario("Carlos", "carlos@test.com", "Rodriguez")
        let usuarios=await usuariosManager.getUsuarios()
        let existe=usuarios.find(u=>u.email==="sabrina@test.com")
        if(!existe){
            await usuariosManager.addUsuario("Sabrina", "sabrina@test.com", "Rojas")
        }
        console.log(await usuariosManager.getUsuarios())
        
    } catch (error) {
        console.log("Ocurrió un error...!!!")
    }
    
}

archivos()
