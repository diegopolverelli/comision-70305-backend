import fs from "fs"

export class CursosManager{
    static path=""

    static async getCursos(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            console.log("salio acá...!!!")
            return []
        }
    }

    static async createCurso(curso={}){
        let cursos=await this.getCursos()
        let id=1
        if(cursos.length>0){
            id=cursos[cursos.length-1].id + 1
        }
        let nuevoCurso={
            id, 
            ...curso,
        }

        cursos.push(nuevoCurso)

        await fs.promises.writeFile(this.path, JSON.stringify(cursos, null, 5))

        return nuevoCurso
    }
}