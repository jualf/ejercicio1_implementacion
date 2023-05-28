import { Persona } from "./persona.js";
export class Actores {
    constructor() {
        this.listaActores = [];
    }
    crearActor(nombre, fotografia, descripcion, serie) {
        const nuevaActor = new Actor(nombre, fotografia, descripcion, serie);
        this.listaActores.push(nuevaActor);
        console.log(`Se ha creado el actor ${nombre}.`);
    }
}
export class Actor extends Persona {
    constructor(nombre, fotografia, descripcion, serie) {
        super(nombre, fotografia, descripcion);
        this.serie = [serie];
    }
}
