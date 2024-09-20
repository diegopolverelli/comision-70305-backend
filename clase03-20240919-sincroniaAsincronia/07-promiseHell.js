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

// 5 x 4
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(resFinal=>{
                        console.log(resFinal, "Promise Hell")
                    })
            })
    })