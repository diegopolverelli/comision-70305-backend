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


console.log(suma(5, 6))
console.log(suma(5, 6) + 10)
console.log(suma(5, 6) * 10)

suma(5, 6)
    .then(res1=>{
        let dato=res1+10
        console.log(dato)
    })
    .catch(error=>console.log(error))
    .finally(()=>{
        console.log(`esto se ejecuta siempre, bien si la promesa sale por res, bien si sale por rej`)
    })

suma(5, "Juan")
    .then(res1=>{
        let dato=res1+10
        console.log(dato)
    })
    .catch(error=>console.log(error))
    .finally(()=>{
        console.log(`esto se ejecuta siempre, bien si la promesa sale por res, bien si sale por rej`)
    })


fetch("https://reqres.in/api/users?page=2")
    .then(res=>{
        res.json()
            .then(datos=>console.log(datos))
            .catch(e=>console.log(e.message))
        })
    .catch(e=>console.log(e.message))