import {Persona} from "./persona.js"
import { Serie } from "serie"

export class Directores {
    listaDirectores: Director[]

    constructor(){
        this.listaDirectores = []
    }

    crearDirector(nombre:string, fotografia: string, descripcion: string, serie: Serie){ //11. Crear un nuevo actor
        const nuevaDirector = new Director(nombre, fotografia, descripcion, serie)
        this.listaDirectores.push(nuevaDirector);
        console.log(`Se ha creado la directora ${nombre}.`)

    }
}

export class Director extends Persona{
    serie:Serie[]

    constructor(nombre: string, fotografia: string, descripcion:string, serie:Serie){
        super(nombre, fotografia, descripcion)
        this.serie = [serie]

    } 
}