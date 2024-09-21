let texto=`     

No renuncio a nada, simplemente hago lo que puedo para que las cosas me renuncien a mi.    
          Rayuela, Julio Cortazar                      
          
          `




let arrayAnidado=[1,2,3,[4,5,6],7,8,[9],10,11,12]



arrayAnidado=[1,2,3,[4,5,6],7,8,[9,[10,11,12],13,14,[15,[16,17,18]]],19,20]





// Nullish
let datos=[100, 200, 0, "Juan", {name:"Robin", alias:"Dick Grayson"}, [1,2,3], {}, [], true, false, null, undefined]
// datos.forEach(d=>{
//     if(typeof d=="object"){
//         console.log(`Valor de verdad de ${String(JSON.stringify(d))}:`, Boolean(d))
//     }else{
//         console.log(`Valor de verdad de ${String(d)}:`, Boolean(d))
//     }
// })