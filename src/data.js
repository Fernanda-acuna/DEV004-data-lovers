// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filtrarProductor = (peliculas, productor) => {
console.log(peliculas, productor);
const result = peliculas.filter(pelicula => pelicula.producer ===productor);
return result
}
  
  