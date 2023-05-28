import { Actor, Actores } from "./actor.js";
import { Director, Directores } from "./director.js";
import { Episodio } from "./episodio.js";
import { Persona } from "./persona.js";
import { Plan } from "./plan.js";
import { Plataforma, plataformas } from "./plataforma.js";
import { Serie, Series } from "./serie.js";
const ListaSeries = new Series();
const serie1 = new Serie("www.sdkgndkv.com", "Los vengadores", "accion");
const episodio1 = new Episodio("La caida del vemgador", "El vengador Cae", "30 minutos", serie1);
serie1.agregarEpisodio(episodio1);
const serie2 = new Serie("www.sdkgndkv.com", "Los fantasticos", "Drama");
const acto1 = new Actor("Pepito", "www.asdasdasdad.com", "actor principal", serie1);
const acto2 = new Actor("Pedro", "www.asdasdasdad.com", "actor secundario", serie1);
const director1 = new Director("Pepita", "www.asdasdasdad.com", "Directora principal", serie1);
serie1.agregarActor(acto1); //13. Agregar un actor a una serie
serie1.agregarActor(acto2); //13. Agregar un actor a una serie
serie1.agregarDirecto(director1); //14. Agregar un director a una serie
ListaSeries.agregarSerie(serie1);
ListaSeries.agregarSerie(serie2);
ListaSeries.mostrarSeries(); //Metodo 1 Mostrar listado e todas las series
ListaSeries.mostrarDetalleSerie("Los fantasticos"); //Metodo 2 Mostrar detalle de una serie en particular
ListaSeries.mostrarCategorias(); //Metodo 3 Mostrar lsitado de Categorias
ListaSeries.mostrarActoresDirectores("Los vengadores"); //4. Mostrar el listado de directores y actores de una serie
serie1.mostrarDetalleActoresDirectores("Pepito", "Pepita"); //5. Mostrar el detalle de un director y de un actor
////
const plataforma1 = new Plataforma("Netflix", "www.netflix.com");
const plan1 = new Plan(35000, plataforma1);
const plan2 = new Plan(140000, plataforma1);
plataforma1.agregarPlan(plan1);
plataforma1.agregarPlan(plan2);
const plataforma2 = new Plataforma("HBO", "www.hbo.com");
const plan3 = new Plan(45000, plataforma2);
const plan4 = new Plan(160000, plataforma2);
plataforma2.agregarPlan(plan3);
plataforma2.agregarPlan(plan4);
const plataformas1 = new plataformas();
plataformas1.agregarPlataforma(plataforma1);
plataformas1.agregarPlataforma(plataforma2);
plataformas1.mostrarPlataformas(); //6. Mostrar el listado de las plataformas
plataformas1.mostrarDetallePlataforma("Netflix"); //7. Mostrar detalle de una plataforma
//////////////////////
ListaSeries.crearSerie("www.imagen.com", "Merlina", "Drama"); //8. Crear una nueva serie
const Actores1 = new Actores();
Actores1.crearActor("Juanito", "www.fotoJuanito,com", "actor de reparto", serie1); //10. Crear un nuevo actor
const Directores1 = new Directores();
Directores1.crearDirector("Juanita", "www.fotojuanita.com", "Directora principal", serie2); //11. Crear un nuevo actor
const persona1 = new Persona("Juan", "www.adfgdfg.com", "persona encargada del maquillaje de los actores"); //Prueba adicional
