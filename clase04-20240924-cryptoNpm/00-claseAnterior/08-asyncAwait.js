const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / reject

        // codigo... 
        if(typeof a!="number" || typeof b!="number"){
            rej("Argumentos inválidos")
        }

        res(a+b)
        // res("Juan")
    })
}

const multiplica=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve / reject

        // codigo... 
        if(typeof a!="number" || typeof b!="number"){
            rej("Argumentos inválidos")
        }

        res(a*b)
        // res("Juan")
    })
}

// try {
//     console.log("hola")
// } catch (error) {
//     console.log("algo fallo con el console.log...")
// }

// 5x4 + 3x3

const calculo=async()=>{
    try {
        let res1=await multiplica(5, 4)
        let res2=await multiplica(3, 3)
        let resFinal=await suma(res1, res2)
        // console.log(resFinal, "operacion")
        return resFinal
    } catch (error) {
        console.log(`Ocurrió un error... :(`)
    }
}

// calculo()
//     .then(res=>console.log(res))

const app=async()=>{
    let resultado=await calculo()
    console.log(resultado)
}

app()

// fetch()

const consultarAPI=async(url)=>{
    let resultado=await fetch(url)
    let datos=await resultado.json()
    return datos
}

const buscarUsuarios=async()=>{
    let usuarios=await consultarAPI("https://reqres.in/api/users?page=2")
    return usuarios
}

const imprimeUsuarios=async()=>{
    try {
        console.log(await buscarUsuarios())
    } catch (error) {
        console.log("ocurrió un error...!!!")
    }
}

imprimeUsuarios()


