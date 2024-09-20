// let i=1
// console.log(`operacion ${i}`)
// i++
// console.log(`operacion ${i}`)
// i++
// let fechaFin=Date.now()+1000*3
// while(Date.now()<fechaFin){
//     // espere
// }
// console.log(`operacion ${i}`)
// i++
// console.log(`operacion ${i}`)
// i++
// console.log(`operacion ${i}`)
// i++

setTimeout(() => {
    console.log(`op 1`)
}, 3000);
setTimeout(() => {
    console.log(`op 2`)
}, 1000);
setTimeout(() => {
    console.log(`op 3`)
}, 300);

let contador=3
function imprimeOp(){
    contador++
    console.log(`op ${contador}`)
    if(contador==10){
        clearInterval(intervalo01)
    }
}

let intervalo01=setInterval(imprimeOp, 200);




