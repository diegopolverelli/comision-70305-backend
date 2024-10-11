import { heroes } from "../data/heores.js";

export class HeroesManager{
    static async getHeroes(){
        return heroes
    }
}