const spanIdAlumno=document.getElementById("idAlumno")

const agregaCurso=async(idCurso)=>{
    // let idAlumno=Number(spanIdAlumno.textContent)
    let idAlumno=spanIdAlumno.textContent

    console.log(idAlumno, idCurso)

    let respuesta=await fetch(`/api/alumnos/${idAlumno}/curso/${idCurso}`,{
        method:"post"
    })
    if(respuesta.status>=400){
        let {error}=await respuesta.json()
        alert(error)
        return 
    }
    window.location.reload()
}