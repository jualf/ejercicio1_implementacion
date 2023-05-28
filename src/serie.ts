import { Actor } from "actor";
import { Director } from "director";
import { Episodio } from "episodio";


export class Series {
    listaSeries: Serie[]
    

    constructor(){
        this.listaSeries = []
        
    }

    agregarSerie(series: Serie){
        this.listaSeries.push(series)
    }

    

    mostrarSeries(){ //Metodo 1 Mostrar listado e todas las series
        console.log("Listado de series:")
        this.listaSeries.forEach((listaSeries)=>{
            console.log(listaSeries)

        })
        
    }

    mostrarDetalleSerie(nombreSerie: String){ //Metodo 2 Mostrar detalle de una serie en particular
        const series = this.listaSeries.find((series) => series.nombre === nombreSerie)

        if(series){
            console.log(`Los detalles de la serie "${nombreSerie}" son:`)
            console.log(series)
            

        } else {
            console.log(`La serie "${nombreSerie}" no se encuentra.`)
        }

    }

    mostrarCategorias(){ //Metodo 3 Mostrar lsitado de Categorias
        console.log("las categorias de las series son:")
        this.listaSeries.forEach((listaSeries)=>{
            console.log(listaSeries.categoria)

        })
        
    }

    mostrarActoresDirectores(nombreSerie: String){ //4. Mostrar el listado de directores y actores de una serie
        const series = this.listaSeries.find((series) => series.nombre === nombreSerie)

        if(series){
            console.log(`Los actores de la serie "${nombreSerie}" son:`) 
            console.log(series.actor)
            
            console.log(`Y sus director (es) son:`) 
            console.log(series.director)
            
            

        } else {
            console.log(`La serie "${nombreSerie}" no se encuentra.`)
        }

    }

    crearSerie(imagen: string, nombre: string, categoria: string){ //8. Crear una nueva serie
        const nuevaSerie = new Serie(imagen, nombre, categoria)
        this.listaSeries.push(nuevaSerie);
        console.log(`Se ha creado la serie ${nombre}.`)

    }

    


    
}

export class Serie {
    imagen: string
    nombre: string
    categoria: string
    actor: Actor[]
    director: Director[]
    series: Series[]
    episodios: Episodio[]

    

    constructor(imagen:string, nombre:string, categoria:string){
        this.imagen = imagen
        this.nombre = nombre
        this.categoria = categoria
        this.actor = []
        this.director = []
        this.series = []
        this.episodios = []

    }

    
    agregarActor(actor:Actor){ //13. Agregar un actor a una serie
        this.actor.push(actor)
    }

    agregarDirecto(director:Director){ //14. Agregar un director a una serie
        this.director.push(director)
    }

    mostrarDetalleActoresDirectores(nombreActor: string, nombreDirector:string){ //5. Mostrar el detalle de un director y de un actor
        const actor = this.actor.find((actor) => actor.nombre === nombreActor)

        const director = this.director.find((director) => director.nombre === nombreDirector)

        if(actor){
            console.log(`Los detalles del actor "${nombreActor}" son:`) 
            console.log(actor)
        } else {
            console.log(`Actor llamado "${nombreActor}" no se encuentra.`)
        }

        if(director){
            console.log(`Los detalles del director "${nombreDirector}" son:`) 
            console.log(director)
        } else {
            console.log(`Actor llamado "${nombreDirector}" no se encuentra.`)
        }



    }

    agregarEpisodio(episodio:Episodio){ 
        this.episodios.push(episodio)
    
    }
    


}