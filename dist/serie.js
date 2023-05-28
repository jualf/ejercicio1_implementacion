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
            console.log(`Los detalles de la serie "${nombreSerie}" son:`);
            console.log(series);
        }
        else {
            console.log(`La serie "${nombreSerie}" no se encuentra.`);
        }
    }
    mostrarCategorias() {
        console.log("las categorias de las series son:");
        this.listaSeries.forEach((listaSeries) => {
            console.log(listaSeries.categoria);
        });
    }
    mostrarActoresDirectores(nombreSerie) {
        const series = this.listaSeries.find((series) => series.nombre === nombreSerie);
        if (series) {
            console.log(`Los actores de la serie "${nombreSerie}" son:`);
            console.log(series.actor);
            console.log(`Y sus director (es) son:`);
            console.log(series.director);
        }
        else {
            console.log(`La serie "${nombreSerie}" no se encuentra.`);
        }
    }
    crearSerie(imagen, nombre, categoria) {
        const nuevaSerie = new Serie(imagen, nombre, categoria);
        this.listaSeries.push(nuevaSerie);
        console.log(`Se ha creado la serie ${nombre}.`);
    }
}
export class Serie {
    constructor(imagen, nombre, categoria) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categoria = categoria;
        this.actor = [];
        this.director = [];
        this.series = [];
        this.episodios = [];
    }
    agregarActor(actor) {
        this.actor.push(actor);
    }
    agregarDirecto(director) {
        this.director.push(director);
    }
    mostrarDetalleActoresDirectores(nombreActor, nombreDirector) {
        const actor = this.actor.find((actor) => actor.nombre === nombreActor);
        const director = this.director.find((director) => director.nombre === nombreDirector);
        if (actor) {
            console.log(`Los detalles del actor "${nombreActor}" son:`);
            console.log(actor);
        }
        else {
            console.log(`Actor llamado "${nombreActor}" no se encuentra.`);
        }
        if (director) {
            console.log(`Los detalles del director "${nombreDirector}" son:`);
            console.log(director);
        }
        else {
            console.log(`Actor llamado "${nombreDirector}" no se encuentra.`);
        }
    }
    agregarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
}
