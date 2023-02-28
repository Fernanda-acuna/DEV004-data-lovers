import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

const peliculas = data.films;
// const contenedorPeliculas = document.querySelector("#container-movies");

const tituloPelicula = data.films;
const contenedorNombrePelicula = document.querySelector("#container-title");
// const directorPelicula = data.director;

for (let i = 0; i < tituloPelicula.length; i++) {
  const nombreDePeli = tituloPelicula[i].title;
  const posterPelicula = peliculas[i].poster;
    //  const nombreDirector= directorPelicula[i].director;
    //  console.log(nombreDirector)
  const html=`<section class="grid-item"><p class="letraRoja">${nombreDePeli}</p> <img src="${posterPelicula}" class="cortinita"/></section>`;
    // const VerPelis= `<section <h1 class="main-title">Producciones Ghibli</h1> </section>`;
    //const html = "<p>"+nombreDePeli+"</p><img src=""+postPelicula+"/>";
console.log(html); 
    // debugger
contenedorNombrePelicula.innerHTML= contenedorNombrePelicula.innerHTML + html;
    // const directorHtml= `<section class="grid-item"><p>${nombreDirector}</p></section>`;

}









