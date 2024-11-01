import fs from "fs"
import { config } from "../config/config.js"

export class VillanosManager{
    static path=config.VILLANOS_PATH
    static async get(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else throw new Error("Archivo de villanos inexistente, o mal definido en config.js")
    } // fin get

    static async create(villano={}){
        if(!villano.name){
            throw new Error("Propiedad name es requerida")
        }
        let villanos=await this.get()
        let existe=villanos.find(h=>h.name===villano.name)
        if(existe){
            throw new Error(`Villano existe en DB: ${villano.name}`)
        }
        let id=1
        if(villanos.length>0){
            id=Math.max(...villanos.map(d=>d.id))+1
        }

        let nuevoVillano={id, ...villano}
        villanos.push(nuevoVillano)
        await fs.promises.writeFile(this.path, JSON.stringify(villanos, null, 5))
        return nuevoVillano
    } // fin create

    static async update(id, aModificar={}){
        if(isNaN(id)) throw new Error(`Formato inválido id`)
        let villanos=await this.get()
        if(aModificar.name){
            let existe=villanos.find(h=>h.name.trim().toLowerCase()===aModificar.name.trim().toLowerCase() && h.id!==id)
            if(existe){
                throw new Error(`Villano existe en DB: ${aModificar.name.trim().toLowerCase()}`)
            }
        }
        let indiceVillano=villanos.findIndex(h=>h.id===id)
        if(indiceVillano===-1) throw new Error(`Villano no encontrado`)

        villanos[indiceVillano]={
            ...villanos[indiceVillano], ...aModificar, id
        }
        await fs.promises.writeFile(this.path, JSON.stringify(villanos, null, 5))
        return villanos[indiceVillano]
    } // fin update

    static async delete(id){
        if(isNaN(id)) throw new Error(`Formato inválido id`)
        let villanos=await this.get()
        let villanoEliminado=villanos.find(h=>h.id===id)
        if(!villanoEliminado){
            throw new Error(`Villano inexistente con id ${id}`)
        }
        
        villanos=villanos.filter(h=>h.id!==id)
        await fs.promises.writeFile(this.path, JSON.stringify(villanos, null, 5))
        return villanoEliminado
    }

} // fin VillanosDAO