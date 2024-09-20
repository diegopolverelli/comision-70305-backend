const plantilla=[
    {legajo:9901, nombre: "Juan", apellido: "Ramirez", categoria: "B"},
    {legajo:9933, nombre: "Lucia", apellido: "Gaitan", categoria: "A"},
    {legajo:9941, nombre: "Martina", apellido: "Quiroga", categoria: "A"},
    {legajo:9942, nombre: "Carlos", apellido: "Estevez", categoria: "B"},
    {legajo:9952, nombre: "Juan Manuel", apellido: "Lopez", categoria: "C"},
]

const categorias=[
    {codigo:"A", descrip:"categoría A", actividades:[1, 3]},
    {codigo:"B", descrip:"categoría B", actividades:[2, 3, 4]},
    {codigo:"C", descrip:"categoría C", actividades:[3, 4]},
    {codigo:"D", descrip:"categoría D", actividades:[4]},
]

const remuneracionPorActividad=[
    {actividad:1, remuneracion:620000, descrip:"ventas"},
    {actividad:2, remuneracion:220000, descrip:"desarrollo"},
    {actividad:3, remuneracion:190000, descrip:"marketing"},
    {actividad:4, remuneracion:190000, descrip:"seguridad"},
]

let sueldos=[]
plantilla.forEach(empleado=>{
    let sueldo=0
    console.log(`Procesando empleado ${empleado.apellido}`)
    // let cate=categorias.find(categoria=>categoria.codigo==empleado)
    categorias.find(categoria=>{
        if(categoria.codigo===empleado.categoria){
            console.log(`   procesando categoria ${categoria.descrip}`)
            categoria.actividades.forEach(actividad=>{
                remuneracionPorActividad.find(paga=>{
                    if(paga.actividad===actividad){
                        console.log(`       procesando actividad ${paga.descrip}`)
                        sueldo+=paga.remuneracion
                        return true
                    }
                })
            })
            return true
        }
    })
    sueldos.push({apellido: empleado.apellido, sueldo})

})

console.log(sueldos)

fetch()
