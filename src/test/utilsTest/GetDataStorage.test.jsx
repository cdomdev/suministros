// importamos modulos de la libreria vitest
import { describe, beforeEach, it, expect } from "vitest";
// Importamos las funciones a testear
import { getDataStorage, getDataSesionStorega } from "../../utils";

// Funcion para extraer datos de localStorega
describe("getDataStorage", () => {
  beforeEach(() => {
    // Limpia el localStorage antes de cada prueba
    localStorage.clear();
  });

  it("devuelve los datos almacenados en localStorage cuando la clave existe", () => {
    const testData = { name: "Carlos", email: "carlos@example.com" };
    localStorage.setItem("testKey", JSON.stringify(testData));

    expect(getDataStorage("testKey")).toEqual(testData);
  });

  it("devuelve null cuando la clave no existe en localStorage", () => {
    expect(getDataStorage("nonexistentKey")).toBeNull();
  });
});

// Funcion para extraer datos de sesionStorega
describe("getDataSesionStorega", () => {
  beforeEach(() => {
    // Limpia el sessionStorage antes de cada prueba
    sessionStorage.clear();
  });

  it("devuelve los datos almacenados en sessionStorage cuando la clave existe", () => {
    const testData = { name: "Carlos", email: "carlos@example.com" };
    sessionStorage.setItem("testKey", JSON.stringify(testData));

    expect(getDataSesionStorega("testKey")).toEqual(testData);
  });

  it("devuelve null cuando la clave no existe en sessionStorage", () => {
    expect(getDataSesionStorega("nonexistentKey")).toBeNull();
  });
});
