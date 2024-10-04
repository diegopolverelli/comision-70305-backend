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
}