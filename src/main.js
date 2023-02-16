import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from  './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(data.films);

const peliculas = data.films;
let tituloPeliculas = document.getElementById("title")
for(let i = 0; i < peliculas.length; i++){
    tituloPeliculas.innerText = peliculas[i].poster
    console.log(tituloPeliculas)
    //"<div>{pelicula[i].title}</div>"
}
