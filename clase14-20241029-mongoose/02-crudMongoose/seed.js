import fs from "fs";
import { config } from "./src/config/config.js";
import readline from 'readline';


let villanos = [
    {
        id: 1,
        name: "Joker",
        alias: "Unknown",
        powers: ["Criminal mastermind", "Insanity", "Trickery"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 2,
        name: "Magneto",
        alias: "Erik Lehnsherr",
        powers: ["Magnetism manipulation", "Control over metal", "Leadership"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 3,
        name: "Lex Luthor",
        alias: "Alexander Luthor",
        powers: ["Genius-level intellect", "Wealth", "Power suit"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 4,
        name: "Loki",
        alias: "Loki Laufeyson",
        powers: ["Shape-shifting", "Illusions", "Sorcery"],
        team: "Asgardian rogues",
        publisher: "Marvel"
    },
    {
        id: 5,
        name: "Two-Face",
        alias: "Harvey Dent",
        powers: ["Duality obsession", "Coin flipping", "Expert marksman"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 6,
        name: "Green Goblin",
        alias: "Norman Osborn",
        powers: ["Superhuman strength", "Glider flight", "Goblin gadgets"],
        team: "Sinister Six",
        publisher: "Marvel"
    },
    {
        id: 7,
        name: "Darkseid",
        alias: "Uxas",
        powers: ["Omega Beams", "Superhuman strength", "Immortality"],
        team: "New Gods",
        publisher: "DC"
    },
    {
        id: 8,
        name: "Thanos",
        alias: "Thanos",
        powers: ["Superhuman strength", "Reality manipulation", "Infinity Gauntlet"],
        team: "Black Order",
        publisher: "Marvel"
    },
    {
        id: 9,
        name: "Catwoman",
        alias: "Selina Kyle",
        powers: ["Acrobatics", "Thievery skills", "Whip mastery"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 10,
        name: "Doctor Doom",
        alias: "Victor von Doom",
        powers: ["Genius-level intellect", "Armor suit", "Sorcery"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 11,
        name: "Harley Quinn",
        alias: "Harleen Quinzel",
        powers: ["Acrobatics", "Deadly weapons", "Unpredictability"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 12,
        name: "Sabretooth",
        alias: "Victor Creed",
        powers: ["Superhuman strength", "Enhanced senses", "Regenerative healing"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 13,
        name: "Ra's al Ghul",
        alias: "Unknown",
        powers: ["Longevity", "Martial arts mastery", "Strategic genius"],
        team: "League of Assassins",
        publisher: "DC"
    },
    {
        id: 14,
        name: "Venom",
        alias: "Eddie Brock",
        powers: ["Symbiote bonding", "Superhuman strength", "Shape-shifting"],
        team: "None",
        publisher: "Marvel"
    },
    {
        id: 15,
        name: "Deathstroke",
        alias: "Slade Wilson",
        powers: ["Enhanced strength", "Master tactician", "Regenerative healing"],
        team: "Injustice League",
        publisher: "DC"
    },
    {
        id: 16,
        name: "Mystique",
        alias: "Raven Darkholme",
        powers: ["Shape-shifting", "Agility", "Combat expertise"],
        team: "Brotherhood of Mutants",
        publisher: "Marvel"
    },
    {
        id: 17,
        name: "Penguin",
        alias: "Oswald Cobblepot",
        powers: ["Cunning mind", "Wealth", "Umbrella gadgets"],
        team: "None",
        publisher: "DC"
    },
    {
        id: 18,
        name: "Red Skull",
        alias: "Johann Schmidt",
        powers: ["Strategic genius", "Superhuman durability", "Hatred for Captain America"],
        team: "Hydra",
        publisher: "Marvel"
    },
    {
        id: 19,
        name: "Enchantress",
        alias: "June Moone",
        powers: ["Magic spells", "Sorcery", "Reality manipulation"],
        team: "Suicide Squad",
        publisher: "DC"
    },
    {
        id: 20,
        name: "Kingpin",
        alias: "Wilson Fisk",
        powers: ["Superhuman strength", "Master tactician", "Criminal empire"],
        team: "None",
        publisher: "Marvel"
    }
];

let heroes = [
    {
        id: 1,
        name: 'Spider-Man',
        alias: 'Peter Parker',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 2,
        name: 'Superman',
        alias: 'Clark Kent',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 3,
        name: 'Iron Man',
        alias: 'Tony Stark',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 4,
        name: 'Wonder Woman',
        alias: 'Diana Prince',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 5,
        name: 'Black Widow',
        alias: 'Natasha Romanoff',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 6,
        name: 'Batman',
        alias: 'Bruce Wayne',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 7,
        name: 'Aquaman',
        alias: 'Arthur Curry',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 8,
        name: 'Captain America',
        alias: 'Steve Rogers',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 9,
        name: 'Flash',
        alias: 'Barry Allen',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 10,
        name: 'Black Panther',
        alias: 'TChalla',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 11,
        name: 'Green Lantern',
        alias: 'Hal Jordan',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 12,
        name: 'Thor',
        alias: 'Thor Odinson',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 13,
        name: 'Batwoman',
        alias: 'Kate Kane',
        team: 'Bat Family',
        publisher: 'DC',
    },
    {
        id: 14,
        name: 'Hulk',
        alias: 'Bruce Banner',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 15,
        name: 'Zatanna',
        alias: 'Zatanna Zatara',
        team: 'Justice League Dark',
        publisher: 'DC',
    },
    {
        id: 16,
        name: 'Doctor Strange',
        alias: 'Stephen Strange',
        team: 'Defenders',
        publisher: 'Marvel',
    },
    {
        id: 17,
        name: 'Green Arrow',
        alias: 'Oliver Queen',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 18,
        name: 'Scarlet Witch',
        alias: 'Wanda Maximoff',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 19,
        name: 'Martian Manhunter',
        alias: 'Jonn Jonzz',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 20,
        name: 'Deadpool',
        alias: 'Wade Wilson',
        team: 'None',
        publisher: 'Marvel',
    },
]


const creaData = async () => {
    if (!config.HEROES_PATH || !config.VILLANOS_PATH) {
        console.log(`Complete ruta de archivo heroes | villanos, en config.js`)
        return
    }

    let heroesPath = config.HEROES_PATH
    let villanosPath = config.VILLANOS_PATH

    await fs.promises.writeFile(heroesPath, JSON.stringify(heroes, null, 5))
    await fs.promises.writeFile(villanosPath, JSON.stringify(villanos, null, 5))
    console.log(`Data generada...!!!`)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:true
});

rl.question('Por favor, introduce tu clave: ', (clave) => {
    if(clave==="CoderCoder123"){
        creaData()
    }else{
        console.log(`Contraseña seed incorrecta...!!!`)
    }

    rl.close();
});

