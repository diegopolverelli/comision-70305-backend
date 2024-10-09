import fs from "fs"
export class DemonManager{
    static #path=""

    static setPath(rutaArchivo=""){
        this.#path=rutaArchivo
    }

    static async getPersonajes(){
        if(fs.existsSync(this.#path)){
            return JSON.parse(await fs.promises.readFile(this.#path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static async #grabaArchivo(datos=""){
        if(typeof datos!="string"){
            throw new Error(`error método grabaArchivo - argumento con formato inválido`)
        }
        await fs.promises.writeFile(this.#path, datos)
    }

    static async addPersonaje(personaje={}){
        let personajes=await this.getPersonajes()
        let id=1
        if(personajes.length>0){
            id=Math.max(...personajes.map(d=>d.id))+1
        }
        
        let nuevoPersonaje={
            id, 
            ...personaje  // ... operador spread
        }

        personajes.push(nuevoPersonaje)
        await this.#grabaArchivo(JSON.stringify(personajes, null, 5))
        return nuevoPersonaje
    }
}