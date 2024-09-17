// operador ** (potencia):

let numeros=[1,2,3,4,5]
console.log(numeros[0])
console.log(numeros[2])
console.log(Array.isArray(numeros))
let color="rojo"
console.log(Array.isArray(color))

function duplica(a){
    return a*2
}

console.log(duplica(1000))

// map
// let resultado=numeros.map(n=>n*2)
let resultado=numeros.map(duplica)
console.log(resultado)

resultado=numeros.map((valor, indice, arrayOriginal)=>{
    console.log(`Recorriendo elemento posicion ${indice}, tiene un valor de ${valor}; el array original es ${arrayOriginal}`)
    return valor*2
})

console.log(resultado)


// every
resultado=numeros.every(n=>n>0)
console.log("todo numero del array numeros es >0", resultado)

resultado=numeros.every((valor, indice, arrayOriginal)=>{
    console.log(`Recorriendo elemento posicion ${indice}, tiene un valor de ${valor}; el array original es ${arrayOriginal}`)
    return valor<4
})

console.log("todos <4", resultado)

// some
resultado=numeros.some(n=>n>3)
console.log("algn numero del array numeros es >3", resultado)
resultado=numeros.some(n=>n>30)
console.log("algn numero del array numeros es >30", resultado)


// filter
resultado=numeros.filter(n=>n>3)
console.log("filtro mayores a 3:", resultado)
resultado=numeros.filter((n, i, arrayOrinal)=>n!=3)
console.log("filtro diferente a 3:", resultado)

// find / findIndex
let nombres1=['Martina', 'Mariela', 'Sandra', 'Ana', 'Jimena', 'Marcelo', 'Julian', 'Ernesto']
resultado=nombres1.find(nombre=>nombre==="Sandra")
console.log(resultado)
resultado=nombres1.findIndex(elemento=>elemento.toLowerCase()==="sandra")
console.log(resultado)
resultado=nombres1.find(nombre=>nombre==="Cacho")
console.log(resultado)
resultado=nombres1.findIndex(elemento=>elemento.toLowerCase()==="cacho")
console.log(resultado)
if(resultado===-1){
    console.log("No encontro a Cacho...!!!")
}

const PORT=8080
class AdministradorDeArchivos{}
const administradorDeArchivos=new AdministradorDeArchivos()

let heroes=[
    {
        id:1,
        name:'Spider-Man',
        alias:'Peter Parker',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:2,
        name:'Superman',
        alias:'Clark Kent',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:3,
        name:'Iron Man',
        alias:'Tony Stark',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:4,
        name:'Wonder Woman',
        alias:'Diana Prince',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:5,
        name:'Black Widow',
        alias:'Natasha Romanoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:6,
        name:'Batman',
        alias:'Bruce Wayne',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:7,
        name:'Aquaman',
        alias:'Arthur Curry',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:8,
        name:'Captain America',
        alias:'Steve Rogers',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:9,
        name:'Flash',
        alias:'Barry Allen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:10,
        name:'Black Panther',
        alias:'TChalla',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:11,
        name:'Green Lantern',
        alias:'Hal Jordan',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:12,
        name:'Thor',
        alias:'Thor Odinson',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:13,
        name:'Batwoman',
        alias:'Kate Kane',
        team:'Bat Family',
        publisher:'DC',
    },
    {
        id:14,
        name:'Hulk',
        alias:'Bruce Banner',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:15,
        name:'Zatanna',
        alias:'Zatanna Zatara',
        team:'Justice League Dark',
        publisher:'DC',
    },
    {
        id:16,
        name:'Doctor Strange',
        alias:'Stephen Strange',
        team:'Defenders',
        publisher:'Marvel',
    },
    {
        id:17,
        name:'Green Arrow',
        alias:'Oliver Queen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:18,
        name:'Scarlet Witch',
        alias:'Wanda Maximoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:19,
        name:'Martian Manhunter',
        alias:'Jonn Jonzz',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:20,
        name:'Deadpool',
        alias:'Wade Wilson',
        team:'None',
        publisher:'Marvel',
    },
]
let heroe=heroes.find(heroe=>heroe.id===7)
console.log(heroe)
heroe=heroes.find(heroe=>heroe.id===7 || heroe.name=="Superman")
console.log(heroe)
heroe=heroes.find(heroe=>heroe.id===70)
console.log(heroe)


// reduce
resultado=numeros.reduce((acum, valor, indice, arrayCompleto)=>acum+=valor, 0 )
console.log(resultado)
resultado=numeros.reduce((acum, valor, indice, arrayCompleto)=>acum+=valor, 1000 )
console.log(resultado)
resultado=numeros.reduce((acum, valor, indice, arrayCompleto)=>{
    console.log(`recorre pos ${indice}, con valor ${valor}, acum=${acum}, array Orig.${arrayCompleto}`)
    return acum+=valor
}, 0 )
console.log(resultado)

resultado=numeros.reduce((acum, valor)=>acum+=valor )
console.log(resultado)
resultado=numeros.reduce((acum, valor, indice, arrayCompleto)=>{
    console.log(`recorre pos ${indice}, con valor ${valor}, acum=${acum}, array Orig.${arrayCompleto}`)
    return acum+=valor
})
console.log(resultado)

resultado=numeros.reduce((acum, valor, indice, arrayCompleto)=>{
    console.log(`recorre pos ${indice}, con valor ${valor}, acum=${acum}, array Orig.${arrayCompleto}`)
    return acum+=valor*10
},0)
console.log(resultado)
resultado=numeros.reduce((acum, valor, indice, arrayCompleto)=>{
    console.log(`recorre pos ${indice}, con valor ${valor}, acum=${acum}, array Orig.${arrayCompleto}`)
    return acum+=valor*10
})
console.log(resultado)
