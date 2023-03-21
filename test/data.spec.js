import  peliculasAscendente  from '../src/data.js';

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


describe('Ordenar pelîculas de manera Ascendente', () => {
  it('funcion que ordena de la mas antigua a la mas nueva', () => {
    const datos = [
      {release_date: "1986"},
      {release_date: "1988"},
      {release_date: "1991"},
      {release_date: "1992"}
    ]

    const ordenarDeAntiguaANueva = peliculasAscendente(datos)
    expect(typeof ordenarDeAntiguaANueva[0]).release_date.toBe("1986");
    expect(typeof ordenarDeAntiguaANueva[1]).release_date.toBe("1988");
    expect(typeof ordenarDeAntiguaANueva[2]).release_date.toBe("1991");
    expect(typeof ordenarDeAntiguaANueva[3]).release_date.toBe("1992");
    
  });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
});
