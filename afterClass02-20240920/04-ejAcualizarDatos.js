// Definir una función actualizaPersonaje, que modifique las propiedades
// de un personaje, tomando como argumentos el id, y objeto con 
// propiedades a modificar
// Realizar algunas pruebas para verificar el correcto funcionamiento
// de la función.
// Aclaración: Solo se pueden modificar propiedades actuales definidas 
// en los personajes del siguiente arreglo:

const personajes = [
    {
        id: 1,
        name: "Tanjiro Kamado",
        powers: ["Breathing Techniques", "Water Breathing"],
        role: "Main Protagonist",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 2,
        name: "Nezuko Kamado",
        powers: ["Demon Abilities", "Blood Demon Art"],
        role: "Main Protagonist",
        team: "None",
        demonSlayer: false
    },
    {
        id: 3,
        name: "Zenitsu Agatsuma",
        powers: ["Breathing Techniques", "Thunder Breathing"],
        role: "Main Character",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 4,
        name: "Inosuke Hashibira",
        powers: ["Beast Breathing", "Boar Mask"],
        role: "Main Character",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 5,
        name: "Kyojuro Rengoku",
        powers: ["Flame Breathing", "Fire Sword"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 6,
        name: "Enmu",
        powers: ["Morphing", "Blood Demon Art"],
        role: "Lower Moon One",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 7,
        name: "Rui",
        powers: ["Spider Threads", "Blood Demon Art"],
        role: "Lower Moon Five",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 8,
        name: "Shinobu Kocho",
        powers: ["Insect Breathing", "Venomous Wasp"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 9,
        name: "Muzan Kibutsuji",
        powers: ["Demon Abilities", "Blood Manipulation"],
        role: "Main Antagonist",
        team: "None",
        demonSlayer: false
    },
    {
        id: 10,
        name: "Giyu Tomioka",
        powers: ["Water Breathing", "Water Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 11,
        name: "Muichiro Tokito",
        powers: ["Mist Breathing", "Mist Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 12,
        name: "Tengen Uzui",
        powers: ["Sound Breathing", "Sound Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 13,
        name: "Akaza",
        powers: ["Upper Moon Three", "Demon Abilities"],
        role: "Twelve Kizuki",
        team: "None",
        demonSlayer: false
    },
    {
        id: 14,
        name: "Kanao Tsuyuri",
        powers: ["Flower Breathing", "Kaleidoscope Sword"],
        role: "Demon Slayer",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 15,
        name: "Kyogai",
        powers: ["Temari Ball", "Demon Abilities"],
        role: "Demon",
        team: "Twelve Kizuki",
        demonSlayer: false
    },
    {
        id: 16,
        name: "Genya Shinazugawa",
        powers: ["Mouth Demon Slayer", "Demon Abilities"],
        role: "Demon Slayer",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 17,
        name: "Sanemi Shinazugawa",
        powers: ["Wind Breathing", "Wind Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 18,
        name: "Kokushibo",
        powers: ["Upper Moon One", "Demon Abilities"],
        role: "Twelve Kizuki",
        team: "None",
        demonSlayer: false
    },
    {
        id: 19,
        name: "Mitsuri Kanroji",
        powers: ["Love Breathing", "Love Hashira"],
        role: "Hashira",
        team: "Demon Slayer Corps",
        demonSlayer: true
    },
    {
        id: 20,
        name: "Yushiro",
        powers: ["Demon Abilities", "Blood Manipulation"],
        role: "Demon",
        team: "None",
        demonSlayer: false
    }
];