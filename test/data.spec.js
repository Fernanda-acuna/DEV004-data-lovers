import functions from "../src/data.js";

// Test ordenar por título A-Z

describe("peliculasPorTituloAZ", () => {
  it("debe ordenar las películas de A a Z", () => {
    const peliculas = [
      { title: "Castle in the Sky" },
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },
      { title: "Grave of the Fireflies" },
    ];
    const ordenarAZ = functions.peliculasPorTituloAZ(peliculas);
    expect(ordenarAZ).toEqual([
      { title: "Castle in the Sky" },
      { title: "Grave of the Fireflies" },
      { title: "Kiki's Delivery Service" },
      { title: "My Neighbor Totoro" },
    ]);
  });
});

// Test ordenar por título Z-A

describe("peliculasPorTituloZA", () => {
  it("debe ordenar las películas de Z a A", () => {
    const peliculas = [
      { title: "Castle in the Sky" },
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },
      { title: "Grave of the Fireflies" },
    ];
    const ordenarZA = functions.peliculasPorTituloZA(peliculas);
    expect(ordenarZA).toEqual([
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },
      { title: "Grave of the Fireflies" },
      { title: "Castle in the Sky" },
    ]);
  });
});

/* Test filtrar por nombre de director

describe("filtrarDirectores", () => {
  it("debe devolver las películas del director seleccionado", () => {
    const peliculas = [
      { director: "Hayao Miyazaki" },
      { director: "Isao Takahata" },
      { director: "Yoshifumi Kondō" },
      { director: "Hiroyuki Morita" },
      { director: "Gorō Miyazaki" },
      { director: "Hiromasa Yonebayashi" },
    ];
    const peliculasPorDirector = functions.filtrarDirectores(peliculas);
    expect(peliculasPorDirector).toContain([
      { title: "Castle in the Sky" },
      { title: "Grave of the Fireflies" },
      { title: "Whisper of the Heart" },
      { title: "The Cat Returns" },
      { title: "Tales from Earthsea" },
      { title: "The Secret World of Arrietty" },
    ]);
  });
});
*/

// Test filtrar por nombre de director


describe("filtrarDirectores", () => {
  it("debe devolver las películas del director seleccionado", () => {
    const peliculas = [
      { title: "Castle in the Sky", director: "Hayao Miyazaki" },
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
      { title: "Kiki's Delivery Service", director: "Hayao Miyazaki" },
      { title: "Grave of the Fireflies", director: "Isao Takahata" },
    ];
    const directorSeleccionado = "Hayao Miyazaki";
    const peliculasFiltradas = functions.filtrarDirectores(
      peliculas,
      directorSeleccionado
    );
    expect(peliculasFiltradas).toEqual([
      { title: "Castle in the Sky", director: "Hayao Miyazaki" },
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
      { title: "Kiki's Delivery Service", director: "Hayao Miyazaki" },
    ]);
  });
});


// TEST ORDENAR PELÍCULAS POR AÑO ASCENDENTE

describe("Ordenar pelîculas de manera Ascendente", () => {
  const datos = [
    { release_date: "1992" },
    { release_date: "1991" },
    { release_date: "1986" },
    { release_date: "1988" },
  ];

  it("los años desde el mas antiguo al mas actual", () => {
    const ordenarDeAntiguaANueva = functions.peliculasAscendente(datos);

    expect(ordenarDeAntiguaANueva).toEqual([
      { release_date: "1986" },
      { release_date: "1988" },
      { release_date: "1991" },
      { release_date: "1992" },
    ]);
  });
});
