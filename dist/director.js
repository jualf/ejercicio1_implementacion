import { Persona } from "./persona.js";
export class Directores {
    constructor() {
        this.listaDirectores = [];
    }
    crearDirector(nombre, fotografia, descripcion, serie) {
        const nuevaDirector = new Director(nombre, fotografia, descripcion, serie);
        this.listaDirectores.push(nuevaDirector);
        console.log(`Se ha creado la directora ${nombre}.`);
    }
}
export class Director extends Persona {
    constructor(nombre, fotografia, descripcion, serie) {
        super(nombre, fotografia, descripcion);
        this.serie = [serie];
    }
}
