import { heroes } from "../data/heroes.js";

export class HeroesManager{

    static async getHeroes(){
        return heroes
    }
}