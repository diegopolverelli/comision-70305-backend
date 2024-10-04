import fs from "fs"
export class DemonManager{
    #path=""
    constructor(rutaArchivo=""){
        this.#path=rutaArchivo
    }

    async getPersonajes(){
        if(fs.existsSync(this.#path)){
            return JSON.parse(await fs.promises.readFile(this.#path, {encoding:"utf-8"})) 
        }else{
            return []
        }
    }
}