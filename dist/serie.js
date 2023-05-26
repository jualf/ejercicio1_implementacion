export class Series {
    constructor() {
        this.listaSeries = [];
    }
    agregarSerie(series) {
        this.listaSeries.push(series);
    }
    mostrarSeries() {
        console.log("Listado de series:");
        this.listaSeries.forEach((listaSeries) => {
            console.log(listaSeries);
        });
    }
    mostrarDetalleSerie(nombreSerie) {
        const series = this.listaSeries.find((series) => series.nombre === nombreSerie);
        if (series) {
            console.log(`la categoria de la serie buscada es: ${series.categoria}`);
        }
        else {
            console.log(`La serie "${nombreSerie}" no se encuentra.`);
        }
    }
}
export class Serie {
    constructor(imagen, nombre, categoria) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categoria = categoria;
    }
}
