import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

const peliculas = data.films;
const contenedorPeliculas = document.querySelector("#container-movies");

for (let i = 0; i < peliculas.length; i++) {
  const posterPelicula = peliculas[i].poster;
  const divPelis = document.createElement("div");
  divPelis.classList.add("flex-item");
  const imgPelis = document.createElement("img");
  imgPelis.src = posterPelicula;
  divPelis.append(imgPelis);
  contenedorPeliculas.append(divPelis);
}


const tituloPelicula = data.films
const contenedorNombrePelicula = document.querySelector("#container-title")
console.log(tituloPelicula)

for (let i = 0; i < tituloPelicula.length; i++) {
  const nombreDePeli = tituloPelicula[i].title;
  console.log(nombreDePeli)

  const divTitulo = document.createElement("div");

  divTitulo.classList.add("flex-item");

  const textoPelis = document.createElement("p");
  console.log(textoPelis)

  textoPelis.textContent = peliculas[i].title;
  divTitulo.append(textoPelis);

  contenedorNombrePelicula.append(divTitulo);
  console.log(divTitulo)
}





