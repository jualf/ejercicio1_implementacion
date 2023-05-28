export class plataformas {
    constructor() {
        this.listaPlataforma = [];
    }
    mostrarPlataformas() {
        console.log("Listado de plataformas:");
        this.listaPlataforma.forEach((listaPlataforma) => {
            console.log(listaPlataforma);
        });
    }
    agregarPlataforma(plataforma) {
        this.listaPlataforma.push(plataforma);
    }
    mostrarDetallePlataforma(nombrePlataforma) {
        const plataforma = this.listaPlataforma.find((plataforma) => plataforma.nombre === nombrePlataforma);
        if (plataforma) {
            console.log(`Los detalles de la plataforma "${nombrePlataforma}" son:`);
            console.log(plataforma);
        }
        else {
            console.log(`La serie "${nombrePlataforma}" no se encuentra.`);
        }
    }
}
export class Plataforma {
    constructor(nombre, sitioWeb) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = [];
    }
    agregarPlan(plan) {
        this.planes.push(plan);
    }
}
