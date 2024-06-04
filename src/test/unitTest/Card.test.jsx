import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import axiosMock from "../mocks/axiosMock";
import CardTest from "../Labs/CardTest";
import { API_HOST } from "../../config/config";

// Simulamos los datos que esperamos de la API
const mockData = [
  {
    id: 88,
    title: "CORONA",
    nombre: "Pegacor Corona Flex Exteriores Gris 25 kg",
    valor: "140000.00",
    description:
      "Pegacor de mayor flexibilidad, alta resistencia a los cambios térmicos, alta calidad y duración.",
    image:
      "http://localhost:3000/src/modules/uploads/products/1706480092263-38060393.webp",
    referencia: "901191501",
    Categorium: { id: 52, nombre: "Pegantes" },
    cantidad: 1,
  },
];

// Configuramos el mock de axios para devolver los datos simulados
axiosMock
  .onGet(`${API_HOST}/categoria-padre/construccionyremodelacion`)
  .reply(200, {
    productos: mockData,
  });

describe("CardTest component", () => {
  it("Renderizar tarejeta de productos en la UI e interactividas del usuario", async () => {
    render(<CardTest />);

    // Esperamos a que los productos se carguen
    await waitFor(() => {
      expect(
        screen.getByText("Pegacor Corona Flex Exteriores Gris 25 kg")
      ).toBeInTheDocument();
    });

    // Verificamos que los productos se muestren correctamente
    const productTitle = screen.getByText("CORONA");
    const productName = screen.getByText(
      "Pegacor Corona Flex Exteriores Gris 25 kg"
    );

    // Utilizamos una función de coincidencia para buscar el texto del precio
    const productValue = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === "li" && content.startsWith("$");
    });

    expect(productTitle).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productValue).toBeInTheDocument();

    // Simulamos hacer clic en un botón "Ver producto"
    const viewButton = screen.getByText("Ver producto");
    userEvent.click(viewButton);
  });
});
