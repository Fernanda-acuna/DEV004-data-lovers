import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

const peliculas = data.films;

const contenedorPeliculas = document.querySelector("#contenedor-peliculas");
console.log(contenedorPeliculas);


for (let i = 0; i < peliculas.length; i++) {
  const nombreDePeli = peliculas[i].title;
  const posterPelicula = peliculas[i].poster;
  const nombreDirector = peliculas[i].director;
  const yearMovie = peliculas[i].release_date;

  const html=`<section class="grid-item">
  <p class="titulosPelis">${nombreDePeli}</p> 
  <img src="${posterPelicula}" class="cortinita"/>
  <div class="overlay">
  <div class="directorPeli">
    <p class="directores">${nombreDirector}</p>
    <p class="anio">${yearMovie}</p>
  </div>
</div>
  </section>`;
   
  // debugger
  contenedorPeliculas.innerHTML= contenedorPeliculas.innerHTML + html;
   

}


const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  const img = item.querySelector('img');
  item.addEventListener('mouseover', () => {
    img.classList.add(`img-overlay`);
  });
  item.addEventListener('mouseout', () => {
    img.classList.remove(`img-overlay`);
  });
});