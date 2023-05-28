import { Plan } from "plan"

export class plataformas{
    listaPlataforma: Plataforma[]

    constructor(){
        this.listaPlataforma = []
    }

    mostrarPlataformas(){ //6. Mostrar el listado de las plataformas
        console.log("Listado de plataformas:")
        this.listaPlataforma.forEach((listaPlataforma)=>{
            console.log(listaPlataforma)

        })
        
    }

    agregarPlataforma(plataforma:Plataforma){
        this.listaPlataforma.push(plataforma)

    }

    mostrarDetallePlataforma(nombrePlataforma: String){ //7. Mostrar detalle de una plataforma
        const plataforma = this.listaPlataforma.find((plataforma) => plataforma.nombre === nombrePlataforma)

        if(plataforma){
            console.log(`Los detalles de la plataforma "${nombrePlataforma}" son:`)
            console.log(plataforma)
            

        } else {
            console.log(`La serie "${nombrePlataforma}" no se encuentra.`)
        }

    }

}

export class Plataforma {
    nombre: string
    sitioWeb: string
    planes: Plan[]
    


    constructor(nombre:string, sitioWeb:string){
        this.nombre = nombre
        this.sitioWeb = sitioWeb
        this.planes = []
        
    }

    agregarPlan(plan:Plan){
        this.planes.push(plan)

    }

    

        

}