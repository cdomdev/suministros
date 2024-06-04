import { render, screen, waitFor } from "@testing-library/react";
import CarShopTests from "../Labs/Carshop/CarShopTests";
import "@testing-library/jest-dom";

describe("CarritoTest component", () => {
  test('El componente "Produtos en el carrito" está presente', () => {
    // Renderiza el componente
    const { getByText } = render(<CarShopTests />);

    // Busca el texto "Produtos en el carrito"
    const textoProdutos = getByText(/Produtos en el carrito/i);

    // Verifica que el texto esté presente en el documento
    expect(textoProdutos).toBeInTheDocument();
  });

  test('El componente "Resumen de tu compra" está presente', () => {
    // Renderiza el componente
    const { getByText } = render(<CarShopTests />);

    // Busca el texto "Resumen de tu compra"
    const textoResumen = getByText(/Resumen de tu compra/i);

    // Verifica que el texto esté presente en el documento
    expect(textoResumen).toBeInTheDocument();
  });
});
