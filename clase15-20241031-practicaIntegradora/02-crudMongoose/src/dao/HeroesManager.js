import fs from "fs"
import { config } from "../config/config.js"

export class HeroesManager{
    static path=config.HEROES_PATH
    static async get(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else throw new Error("Archivo de heroes inexistente, o mal definido en config.js")
    } // fin get

    static async create(heroe={}){
        if(!heroe.name){
            throw new Error("Propiedad name es requerida")
        }
        let heroes=await this.get()
        let existe=heroes.find(h=>h.name===heroe.name)
        if(existe){
            throw new Error(`Heroe existe en DB: ${heroe.name}`)
        }
        let id=1
        if(heroes.length>0){
            id=Math.max(...heroes.map(d=>d.id))+1
        }

        let nuevoHeroe={id, ...heroe}
        heroes.push(nuevoHeroe)
        await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5))
        return nuevoHeroe
    } // fin create

    static async update(id, aModificar={}){
        if(isNaN(id)) throw new Error(`Formato inválido id`)
        let heroes=await this.get()
        if(aModificar.name){
            let existe=heroes.find(h=>h.name.trim().toLowerCase()===aModificar.name.trim().toLowerCase() && h.id!==id)
            if(existe){
                throw new Error(`Heroe existe en DB: ${aModificar.name.trim().toLowerCase()}`)
            }
        }
        let indiceHeroe=heroes.findIndex(h=>h.id===id)
        if(indiceHeroe===-1) throw new Error(`Heroe no encontrado`)

        heroes[indiceHeroe]={
            ...heroes[indiceHeroe], ...aModificar, id
        }
        await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5))
        return heroes[indiceHeroe]
    } // fin update

    static async delete(id){
        if(isNaN(id)) throw new Error(`Formato inválido id`)
        let heroes=await this.get()
        let heroeEliminado=heroes.find(h=>h.id===id)
        if(!heroeEliminado){
            throw new Error(`Heroe inexistente con id ${id}`)
        }
        
        heroes=heroes.filter(h=>h.id!==id)
        await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5))
        return heroeEliminado
    }

} // fin HeroesDAO