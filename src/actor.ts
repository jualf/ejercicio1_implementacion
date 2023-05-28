import {Persona} from "./persona.js"
import { Serie } from "serie"

export class Actores {
    listaActores: Actor[]

    constructor(){
        this.listaActores = []
    }

    crearActor(nombre:string, fotografia: string, descripcion: string, serie: Serie){ //10. Crear un nuevo actor
        const nuevaActor = new Actor(nombre, fotografia, descripcion, serie)
        this.listaActores.push(nuevaActor);
        console.log(`Se ha creado el actor ${nombre}.`)

    }
}


export class Actor extends Persona{
    serie: Serie[]
    
    

    constructor(nombre: string, fotografia: string, descripcion:string, serie: Serie){
        super(nombre, fotografia, descripcion)
        this.serie  = [serie]
        
        
    } 

    

    
}