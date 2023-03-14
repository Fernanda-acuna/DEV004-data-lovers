import { example } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const peliculas = data.films;

const contenedorPeliculas = document.querySelector("#contenedor-peliculas");

function renderPeliculas(peliculas) {
  contenedorPeliculas.innerHTML = peliculas
    .map((pelicula) => {
      const { title, poster, director, release_date } = pelicula;
      return `<section class="grid-item">
        <p class="titulosPelis">${title}</p>
        <img src="${poster}" class="cortinita"/>
        <div class="overlay">
          <div class="directorPeli">
            <p class="directores">${director}</p>
            <p class="anio">${release_date}</p>
          </div>
        </div>
      </section>`;
    })
    .join("");
}

console.log(contenedorPeliculas.innerHTML);

renderPeliculas(peliculas);

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  const img = item.querySelector("img");
  item.addEventListener("mouseover", () => {
    img.classList.add(`img-overlay`);
  });
  item.addEventListener("mouseout", () => {
    img.classList.remove(`img-overlay`);
  });
});

// codigo de botones
//obtener los dropdowns del documento
const dropdowns = document.querySelectorAll(".dropdown");

//loop a través de los elementos del dropdown
dropdowns.forEach((dropdown) => {
  //obtener elementos para cada dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  //agregar el click event al elemento seleccionado
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  //loop a traves de las posiciones
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

// Función A-Z

// Define la función "peliculasPorTituloAZ" que recibe el arreglo de objetos "peliculas" como parámetro.
function peliculasPorTituloAZ(peliculas) {
  // Utiliza el método "sort" del objeto "peliculas" para ordenar los elementos del arreglo según una función de comparación.
  return peliculas.sort((a, b) => {
    // Compara las propiedades "title" de los objetos "a" y "b" para determinar si "a.title" es menor que "b.title".
    if (a.title < b.title) {
      // Si "a.title" es menor que "b.title", retorna -1 para que "a" se ordene antes que "b".
      return -1;
    }
    // Compara las propiedades "title" de los objetos "a" y "b" para determinar si "a.title" es mayor que "b.title".
    if (a.title > b.title) {
      // Si "a.title" es mayor que "b.title", retorna 1 para que "a" se ordene después que "b".
      return 1;
    }
    // Si "a.title" es igual a "b.title", retorna 0 para mantener el orden actual.
    return 0;
  });
}

// Botón A-Z

// Obtener el elemento de la lista del botón "A-Z" en el HTML
const botonAZ = document.querySelector("li:nth-child(3)");

// Agregar un evento "click" al botón "A-Z"
botonAZ.addEventListener("click", () => {
  // Llamar a la función "peliculasPorTituloAZ" para ordenar las películas por orden alfabético (de A a Z)
  const peliculasAZ = peliculasPorTituloAZ(peliculas);
  // Renderizar las películas ordenadas por título
  renderPeliculas(peliculasAZ);
});

// Función Z-A

// Definir la función "peliculasPorTituloZA" para ordenar las películas por orden alfabético inverso (de Z a A)
function peliculasPorTituloZA(peliculas) {
  // Usar el método "sort" para ordenar las películas por título
  return peliculas.sort((a, b) => {
    if (a.title < b.title) {
      return 1; // Si el título de la película "a" es menor que el título de la película "b", devuelve 1
    }
    if (a.title > b.title) {
      return -1; // Si el título de la película "a" es mayor que el título de la película "b", devuelve -1
    }
    return 0; // Si los títulos son iguales, devuelve 0
  });
}

// Botón Z-A

// Obtener el elemento de la lista del botón "Z-A" en el HTML
const botonZA = document.querySelector("li:nth-child(4)");

// Agregar un evento "click" al botón "Z-A"
botonZA.addEventListener("click", () => {
  // Llamar a la función "peliculasPorTituloZA" para ordenar las películas por orden alfabético inverso (de Z a A)
  const peliculasZA = peliculasPorTituloZA(peliculas);

  // Renderizar las películas ordenadas por título
  renderPeliculas(peliculasZA);
});

// Filtro directores

// Usar el método "reduce" para crear un objeto con cada director de las películas
const directores = peliculas.reduce((obj, pelicula) => {
  obj[pelicula.director] = true;
  return obj;
}, {});

// Obtener la lista de directores del objeto creado anteriormente
const listaDirectores = Object.keys(directores);

// Obtener el elemento del botón desplegable por id
const directorDropdown = document.querySelector("#directorDropdown");

// Añadir un evento "click" a cada opción del menú desplegable
const directorOptions = directorDropdown.querySelectorAll(".menu li");
directorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Obtener el nombre del director seleccionado
    const selectedDirector = option.innerText;

    // Filtrar las películas por director
    const peliculasFiltradas = peliculas.filter((pelicula) => {
      return pelicula.director === selectedDirector;
    });

    // Renderizar las películas filtradas
    renderPeliculas(peliculasFiltradas);
  });
});



// Función ordenar por año, orden Ascendente >

function peliculasAscendente(peliculas) {
  
  return peliculas.sort((a, b) => {

    const fechaA = new Date(a.release_date)
    const fechaB = new Date(b.release_date)

    if (fechaA < fechaB) {
      return -1;
    } else if (fechaA > fechaB) {
      return 1;
    } else {
      return 0; 
    }
  });
}


// Botón año ascendente
const fechaOrdenarA = document.querySelector("li:nth-child(1)");

fechaOrdenarA.addEventListener("click", () => {
  const peliculasAño = peliculasAscendente(peliculas);
  renderPeliculas(peliculasAño);

});




// Función ordenar por año, orden descendente >

function peliculasDescendente(peliculas) {
  
  return peliculas.sort((a, b) => {

    const fechaA = new Date(a.release_date)
    const fechaB = new Date(b.release_date)

    if (fechaA < fechaB) {
      return 1;
    } if (fechaA > fechaB) {
      return -1;
    } 
      return 0; 
  });
}


// Botón año descendente
const fechaOrdenarD = document.querySelector("li:nth-child(2)");

fechaOrdenarD.addEventListener("click", () => {
  const peliculasAñoD = peliculasDescendente(peliculas);
  renderPeliculas(peliculasAñoD);

});





