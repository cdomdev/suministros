import { vi } from "vitest";
import { createContext } from "react";

// Definir createContext antes de usarlo en el contexto
export const carshopContext = createContext();

// Mook carItems
const mockCarShopContext = {
  cartItems: [
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
  ],
  addToCart: vi.fn(),
  deleFromCar: vi.fn(),
};

// Contexto del hook provider carrito de compras
export const CarShopContextProviderMock = ({ children }) => {
 
  return (
    <carshopContext.Provider value={mockCarShopContext}>
      {children}
    </carshopContext.Provider>
  );
};

