// import { usuariosModelo } from "../../9901-crea-bigUsers.js";
import { usuariosModelo } from "./models/usuarios.model.js";

export class UsuariosDAO{
    static async getUsers(page=1, limit=10){
        // return await usuariosModelo.find().lean()
        return await usuariosModelo.paginate({}, {limit, page, lean:true})
    }
}