
// Test ordenar por título A-Z

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



