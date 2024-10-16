const nombre=prompt("Ingrese su nombre")
const socket=io()

const divTemperatura=document.getElementById("temperatura")
const divNombre=document.querySelector("#nombre")
const ulHeroes=document.getElementById("heroes")
if(nombre){
    divNombre.textContent=nombre
}

socket.on("saludo", datos=>{
    console.log(datos)

    socket.emit("id", nombre)
})

socket.on("nuevoUsuario", nombre=>{
    console.log(`${nombre} se ha conectado al sistema...!!!`)
})

socket.on("temperatura", temperatura=>{
    divTemperatura.textContent=`Temperatura del reactor: ${temperatura}°`
})

socket.on("nuevoHeroe", heroe=>{
    let li=document.createElement("li")
    li.textContent=heroe.name
    ulHeroes.append(li)
})

socket.on("oferta", datos=>{
    alert(datos)
})


const cargaData=async()=>{

    let respuesta=await fetch("/api/heroes")
    let {heroes}=await respuesta.json()

    heroes.forEach(heroe=>{
        let li=document.createElement("li")
        li.textContent=heroe.name
        ulHeroes.append(li)
    })
}
cargaData()