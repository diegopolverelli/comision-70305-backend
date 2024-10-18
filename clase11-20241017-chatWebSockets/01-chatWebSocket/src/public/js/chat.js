Swal.fire({
    title:"Identifiquese",
    input:"text",
    text:"Ingrese su nickname",
    inputValidator: (value)=>{
        return !value && "Debe ingresar un nombre...!!!"
    },
    allowOutsideClick:false
})
.then(resultado=>{
    // console.log(resultado)
    let {value:nombre}=resultado
    const socket=io()
    document.title=nombre
    const inputMensaje=document.getElementById("mensaje")
    inputMensaje.focus()
    const divMensajes=document.getElementById("mensajes")
    
    socket.on("saludo", (saludo, mensajes)=>{
        mensajes.forEach(m=>{
            let parrafo=document.createElement("p")
            parrafo.classList.add("mensaje")
            parrafo.innerHTML=`<strong>${m.nombre}</strong> dice <i>${m.mensaje}</i>`
            divMensajes.append(parrafo)    
            divMensajes.scrollTop=divMensajes.scrollHeight; 
        })
        if(nombre){
            socket.emit("id", nombre)
        }
    })

    socket.on("nuevoUsuario", nombre=>{
        Swal.fire({
            text:`${nombre} se ha conectado...!!!`,
            toast:true,
            position:"top-right"
        })
    })

    socket.on("nuevoMensaje", (nombre, mensaje)=>{
        let parrafo=document.createElement("p")
        parrafo.classList.add("mensaje")
        parrafo.innerHTML=`<strong>${nombre}</strong> dice <i>${mensaje}</i>`
        divMensajes.append(parrafo)
        divMensajes.scrollTop=divMensajes.scrollHeight;
    })

    socket.on("saleUsuario", nombre=>{
        let parrafo=document.createElement("p")
        parrafo.classList.add("mensaje")
        parrafo.innerHTML=`<strong>${nombre}</strong> ha abandonado la sala de chat`
        divMensajes.append(parrafo) 
        divMensajes.scrollTop=divMensajes.scrollHeight;
    })

    inputMensaje.addEventListener("keyup", e=>{
        e.preventDefault()
        // console.log(e, e.target.value)
        if(e.code==="Enter"){
            if(e.target.value.trim().length>0){
                socket.emit("mensaje", nombre, e.target.value.trim())
                e.target.value=""
                e.target.focus()
            }
        }
    })

    
})  // fin then sw

