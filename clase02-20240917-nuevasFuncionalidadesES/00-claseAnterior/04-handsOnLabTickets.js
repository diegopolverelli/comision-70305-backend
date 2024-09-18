class TicketManager{

    static #precioBaseDeGanancia=0.15

    constructor(){
        this.eventos=[]   //[{id:1},{id:2},{id:3},{id:4}]
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha=new Date()){

        let existe=this.eventos.find(evento=>evento.nombre===nombre && evento.lugar===lugar)
        if(existe){
            console.log(`Evento repetido; con id ${existe.id}`)
            return
        }

        let id=this.generaId()
        // let id=1
        // if(this.eventos.length>0){
        //     id=this.eventos[this.eventos.length-1].id + 1
        // }

        let nuevoEvento={
            id, 
            nombre, 
            lugar, 
            precio:precio+precio*TicketManager.#precioBaseDeGanancia, 
            capacidad, 
            fecha,
            participantes:[]
        }

        this.eventos.push(nuevoEvento)
    }

    agregarUsuario(idEvento, idUsuario){
        let indiceEvento=this.eventos.findIndex(evento=>evento.id===idEvento)
        if(indiceEvento===-1){
            console.log(`Evento inexistente ${idEvento}`)
            return
        }

        let existe=this.eventos[indiceEvento].participantes.find(p=>p===idUsuario)
        if(existe){
            console.log(`Ya se encuentra registrado el usuario ${idUsuario} en el evento ${idEvento}`)
            return 
        }

        this.eventos[indiceEvento].participantes.push(idUsuario)

    }


    generaId(){
        let id=1
        if(this.eventos.length>0){
            id=this.eventos[this.eventos.length-1].id + 1
        }
        return id
    }


    ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha){
        let evento=this.eventos.find(evento=>evento.id===idEvento)
        if(!evento){
            console.log(`Evento inexistente ${idEvento}`)
            return
        }

        let id=this.generaId()

        let nuevoEvento={
            // precio:evento.precio,
            // nombre:evento.nombre
            ...evento,
            lugar:nuevoLugar,
            fecha:nuevaFecha,
            participantes:[],
            id
        }

        this.eventos.push(nuevoEvento)
    }
}

const ticketManager=new TicketManager()
ticketManager.agregarEvento("afterClass02", "zoom", 100, 120, new Date(2024, 8, 20))
ticketManager.agregarEvento("afterClass02", "zoom", 100, 120, new Date(2024, 8, 20))
ticketManager.agregarEvento("afterClass02", "zoom", 100, 120, new Date(2024, 8, 20))
ticketManager.agregarEvento("afterClass03", "zoom", 100, 120, new Date(2024, 8, 20))

ticketManager.agregarUsuario(10, 3)
ticketManager.agregarUsuario(1, "003")
ticketManager.agregarUsuario(1, "002")
ticketManager.agregarUsuario(1, "003")

ticketManager.ponerEventoEnGira(12, "meet", new Date(2024, 9, 4))
ticketManager.ponerEventoEnGira(1, "meet", new Date(2024, 9, 4))
ticketManager.ponerEventoEnGira(2, "Mar del Plata", new Date(2024, 10, 14))

// ticketManager.eventos[1].participantes.push("098")

console.log(ticketManager.getEventos())