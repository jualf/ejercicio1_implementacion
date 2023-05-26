import {Actor} from "./actor.js";
import {Director} from "./director.js";
import {Episodio} from "./episodio.js";
import {Persona} from "./persona.js";
import {Plan} from "./plan.js";
import {Plataforma} from "./plataforma.js";
import {Serie} from "./serie.js";
import { Series } from "./serie.js";

const acto1 = new Actor("Pepito", "www.asdasdasdad.com", "actor principal")

console.log(acto1)

const director1 = new Director("Pepita", "www.asdasdasdad.com", "Directora principal")

console.log(director1)

const episodio1 = new Episodio("La caida de la cama", "En este espisodio clarita se cae de la cama", "20 minutos")

console.log(episodio1)

const persona1 = new Persona("Juan", "www.adfgdfg.com", "persona encargada del maquillaje de los actores")

console.log(persona1)

const plan1 = new Plan(350000)

console.log(plan1)

const plataforma1 = new Plataforma("Netflix", "www.netflix.com")
console.log(plataforma1)

const ListaSeries = new Series()

const serie1 = new Serie ("www.sdkgndkv.com", "Los vengadores", "accion")

const serie2 = new Serie ("www.sdkgndkv.com", "Los fantasticos", "accion")

ListaSeries.agregarSerie(serie1)
ListaSeries.agregarSerie(serie2)

ListaSeries.mostrarSeries()

ListaSeries.mostrarDetalleSerie("Los vengadores")
ListaSeries.mostrarDetalleSerie("Los fantasticos")


