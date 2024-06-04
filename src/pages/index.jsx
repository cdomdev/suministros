import { lazy } from "react";

export { HomeUser } from "./userServices/HomeUser";
export const Nosotros = lazy(() => import("./subcategorias/Nosotros"));
export const Ofertas = lazy(() => import("./subcategorias/Ofertas"));
export const Pinturas = lazy(() => import("./subcategorias/Pinturas"));
export const CarShopPage = lazy(() => import("./userServices/CarShopPage"));
export const Entrega = lazy(() => import("./userServices/Entrega"));
export const Espejos = lazy(() => import("./subcategorias/Espejos"));
export const Griferias = lazy(() => import("./subcategorias/Griferias"));
export const Lavaderos = lazy(() => import("./subcategorias/Lavaderos"));
export const Lavaplatos = lazy(() => import("./subcategorias/Lavaplatos"));
export const Limpiadores = lazy(() => import("./subcategorias/Limpiadores"));
export const Paredes = lazy(() => import("./subcategorias/Paredes"));
export const Pegantes = lazy(() => import("./subcategorias/Pegantes"));
export const Pisos = lazy(() => import("./subcategorias/Pisos"));
export const ResetPassword = lazy(() => import("./userServices/ResetPassword"));
export const Sanitarios = lazy(() => import("./subcategorias/Sanitarios"));
export const BuscadorPage = lazy(() => import("./userServices/BuscadorPage"));
export const Pago = lazy(() => import("./userServices/Pago"));
export const PedidosPage = lazy(() => import("./subcategorias/PedidosPage"));
export const Ticket = lazy(() => import("./userServices/Ticket"));
export const BañosCategoria = lazy(() => import("./categorias/BañosCategoria"));

export const DetallesProducto = lazy(() =>
  import("./userServices/DetallesProducto")
);
export const DetalleProductsOfertas = lazy(() =>
  import("./userServices/DetallesProducsOfertas")
);
export const ConstruccionCategoria = lazy(() =>
  import("./categorias/ConstruccionCategoria")
);
export const PisosParedesCategoria = lazy(() =>
  import("./categorias/PisosParedesCategoria")
);
export const CocinasCategoria = lazy(() =>
  import("./categorias/CocinasCategoria")
);
export const CambiosDevoluciones = lazy(() =>
  import("./footer/CambiosDevoluciones")
);
export const PoliticaDatos = lazy(() => import("./footer/PoliticaDatos"));
export const MediosPago = lazy(() => import("./footer/MediosPago"));
export const Envios = lazy(() => import("./footer/Envios"));
