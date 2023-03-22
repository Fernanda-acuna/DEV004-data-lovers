import functions from '../src/data.js';



describe('Ordenar pelîculas de manera Ascendente', () => {

  const datos = [
    { release_date: "1992" },
    { release_date: "1991" },
    { release_date: "1986" },
    { release_date: "1988" }
  ]
  //aqui va el nombre de la funcion
  it("los años desde el mas antiguo al mas actual", () => {


    const ordenarDeAntiguaANueva = functions.peliculasAscendente(datos)

    expect(ordenarDeAntiguaANueva).toEqual([{ release_date: "1986" }, { release_date: "1988" }, { release_date: "1991" }, { release_date: "1992" }]);
    // expect(ordenarDeAntiguaANueva[0].release_date).toMatch("1986");
    // expect(ordenarDeAntiguaANueva[1].release_date).toMatch("1988");
    // expect(ordenarDeAntiguaANueva[2].release_date).toMatch("1991");
    // expect(ordenarDeAntiguaANueva[3].release_date).toMatch("1992");

  });

  const ordenar
  it("los años desde el mas nuevo al mas antiguo", () => {
    expect(ordenarDeNuevaAAntigua).toEqual([{ release_date: "1992" }, { release_date: "1991" }, { release_date: "1988" }, { release_date: "1986" }]);
  });



  // describe('example', () => {
  //   it('is a function', () => {
  //     expect(typeof example).toBe('function');
  //   });

  //   it('returns `example`', () => {
  //     expect(example()).toBe('example');
  //   });
  // });
  //   it('returns `anotherExample`', () => {
  //     expect(anotherExample()).toBe('OMG');
});