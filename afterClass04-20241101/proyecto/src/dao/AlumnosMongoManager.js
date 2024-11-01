// import fs from "fs"

import { alumnosModelo } from "./models/alumnosModel.js"

export class AlumnosMongoManager{
    // static path=""

    static async getAlumnos(){
        // if(fs.existsSync(this.path)){
        //     return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        // }else{
        //     console.log("salio acá...!!!")
        //     return []
        // }
        return await alumnosModelo.find().lean()
    }

    static async createAlumno(alumno={}){   // {nombre:"Juan", email:"juan@test.com"}
        // let alumnos=await this.getAlumnos()
        // let id=1
        // if(alumnos.length>0){
        //     id=alumnos[alumnos.length-1].id + 1
        // }
        // let nuevoAlumno={
        //     id, 
        //     ...alumno,
        //     cursando:[]
        // }

        // alumnos.push(nuevoAlumno)

        // await fs.promises.writeFile(this.path, JSON.stringify(alumnos, null, 5))
        let nuevoAlumno=await alumnosModelo.create(alumno)
        return nuevoAlumno.toJSON()
    }

    static async modificaAlumno(id, alumno){
        // let alumnos=await this.getAlumnos()

        // let indiceAlumno=alumnos.findIndex(a=>a.id===id)
        // if(indiceAlumno===-1){
        //     throw new Error(`No existe alumno con id ${id}`)
        // }
        // alumnos[indiceAlumno]=alumno

        // await fs.promises.writeFile(this.path, JSON.stringify(alumnos, null, 5))

        // return alumno      
        return await alumnosModelo.findByIdAndUpdate(id, alumno, {new:true}).lean()

    }

}  // fin class