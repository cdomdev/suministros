import { lazy } from "react";

export const NotExisting = lazy(() => import("./404-page/404"));
export const HomeAdmin = lazy(() => import("./Home/HomeAdmin"));
export const NavAdmin = lazy(() => import("./Nav/NavAdmin"));
export const GestionInventary = lazy(() =>
  import("./inventario/GestionInventary")
);
export const GestionUsuarios = lazy(() => import("./usuarios/GestionUsuarios"));
export const Admin = lazy(() => import("./productos/Admin"));
export const Ofertas = lazy(() => import("./ofertas/Ofertas"));
export const Categorias = lazy(() => import("./categoria/Categoria"));
export const Subcategorias = lazy(() => import("./subCategorias/SubCategoria"));
export const Pedidos = lazy(() => import("./usuarios/pedidos/Pedidos"));
export const Detalles = lazy(() => import("./usuarios/pedidos/Detalles"));
export const Layout = lazy(() => import("./layout/Layout"));
export const Balances = lazy(() => import("./balances/Balances"));
