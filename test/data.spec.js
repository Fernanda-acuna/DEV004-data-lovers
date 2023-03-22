import functions from '../src/data.js';


// Test ordenar por título A-Z

describe('Ordenar pelîculas de manera Ascendente', () => {
describe("peliculasPorTituloAZ", () => {
  it("debe ordenar las películas de A a Z", () => {
    const peliculas = [
      { title: "Castle in the Sky" },
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },
      { title: "Grave of the Fireflies" },
    ];
    const peliculasOrdenadas = peliculasPorTituloAZ(peliculas);
    expect(peliculasOrdenadas[0].title).toBe("Castle in the Sky");
    expect(peliculasOrdenadas[1].title).toBe("Grave of the Fireflies");
    expect(peliculasOrdenadas[2].title).toBe("Kiki's Delivery Service");
    expect(peliculasOrdenadas[3].title).toBe("My Neighbor Totoro");
  });
});

// Test ordenar por título Z-A

  const datos = [
    { release_date: "1992" },
    { release_date: "1991" },
    { release_date: "1986" },
    { release_date: "1988" }
  ]
  //aqui va el nombre de la funcion
  it("los años desde el mas antiguo al mas actual", () => {
describe("peliculasPorTituloZA", () => {
  it("debe ordenar las películas de Z a A", () => {
    const peliculas = [
      { title: "Castle in the Sky" },
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },
      { title: "Grave of the Fireflies" },
    ];
    const peliculasOrdenadas = peliculasPorTituloZA(peliculas);
    expect(peliculasOrdenadas[0].title).toBe("My Neighbor Totoro");
    expect(peliculasOrdenadas[1].title).toBe("Kiki's Delivery Service");
    expect(peliculasOrdenadas[2].title).toBe("Grave of the Fireflies");
    expect(peliculasOrdenadas[3].title).toBe("Castle in the Sky");
  });
});

// Test filtrar por nombre de director // PENDIENTE

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
/*
describe("filtrarDirectores", () => {
  it("debe filtrar por nombre de director", () => {
    const peliculas = [
      { director: "Hayao Miyazaki" },
      { director: "Isao Takahata" },
      { director: "Yoshifumi Kondō" },
      { director: "Hiroyuki Morita" },
      { director: "Gorō Miyazaki" },
      { director: "Hiromasa Yonebayashi" },
    ];
    const peliculasOrdenadas = filtrarDirectores(peliculas);
    expect(peliculasOrdenadas[0].title).toBe("Castle in the Sky");
    expect(peliculasOrdenadas[1].title).toBe("Grave of the Fireflies");
    expect(peliculasOrdenadas[2].title).toBe("Kiki's Delivery Service");
    expect(peliculasOrdenadas[3].title).toBe("My Neighbor Totoro");
    expect(peliculasOrdenadas[2].title).toBe("Kiki's Delivery Service");
    expect(peliculasOrdenadas[3].title).toBe("My Neighbor Totoro");
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
*/

import {
  peliculasPorTituloAZ,
  peliculasPorTituloZA,
  /* peliculasAscendente,
  peliculasDescendente,
  filtrarDirectores,
  filtrarProductor, */
} from "../src/data.js";

