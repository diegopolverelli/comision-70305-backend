
const mostrarLista=(array=[])=>{
    if(!Array.isArray(array)){
        console.log(`El argumento ingresado no es de tipo array`)
        return 
    }

    if(array.length===0){
        console.log(`Has ingresado una lista vacía`)
        return 
    }

    array.forEach(elemento=>{
        console.log(elemento)
    })

    console.log(`La longitud del array es ${array.length}`)

}

mostrarLista()
mostrarLista([1,2,3,4,5])
let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

mostrarLista(usuarios)
mostrarLista(100)
mostrarLista(usuarios)