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

// Función ordenar por año, ascendente

export function peliculasAscendente(peliculas) {
  return peliculas.sort((a, b) => {
    const fechaA = new Date(a.release_date);
    const fechaB = new Date(b.release_date);

    if (fechaA < fechaB) {
      return -1;
    } else if (fechaA > fechaB) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Función ordenar por año, descendente

function peliculasDescendente(peliculas) {
  return peliculas.sort((a, b) => {
    const fechaA = new Date(a.release_date);
    const fechaB = new Date(b.release_date);

    if (fechaA < fechaB) {
      return 1;
    }
    if (fechaA > fechaB) {
      return -1;
    }
    return 0;
  });
}

// Función filtrar películas por director
function filtrarDirectores(peliculas, selectedDirector) {
  return peliculas.filter((pelicula) => {
    return pelicula.director === selectedDirector;
  });
}

// Función filtrar películas por productor
const filtrarProductor = (peliculas, productor) => {
  const result = peliculas.filter(
    (pelicula) => pelicula.producer === productor
  );
  return result;
};

//se pasa abajo por ser una funcion flecha, asi se llaman las funciones y estas ya se encuentran inicializadas. (investigar hoisting)
const botonesPelis = {
  peliculasPorTituloAZ,
  peliculasPorTituloZA,
  peliculasAscendente,
  peliculasDescendente,
  filtrarDirectores,
  filtrarProductor,
};

export default botonesPelis;
