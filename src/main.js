import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

const peliculas = data.films;

const contenedorPeliculas = document.querySelector("#contenedor-peliculas");


for (let i = 0; i < peliculas.length; i++) {
  const nombreDePeli = peliculas[i].title;
  const posterPelicula = peliculas[i].poster;
  const nombreDirector = peliculas[i].director;
  const yearMovie = peliculas[i].release_date;

  const html = `<section class="grid-item">
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
  contenedorPeliculas.innerHTML = contenedorPeliculas.innerHTML + html;


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



// codigo de botones
//obtener los dropdowns del documento
const dropdowns = document.querySelectorAll(".dropdown");

//loop a traves de los elenmtos del dropdown
dropdowns.forEach(dropdown => {
  //obtener elementos para cada dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu")
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  //agregar el click event to the select element
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  //loop a traves de las pociones
  options.forEach(option => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach(option => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    })
  })
})
