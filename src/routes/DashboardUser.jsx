import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import {
  BañosCategoria,
  BuscadorPage,
  CarShopPage,
  CocinasCategoria,
  ConstruccionCategoria,
  DetallesProducto,
  Entrega,
  Espejos,
  Ticket,
  Griferias,
  HomeUser,
  Lavaderos,
  Lavaplatos,
  Limpiadores,
  Nosotros,
  Ofertas,
  Pago,
  Paredes,
  PedidosPage,
  Pegantes,
  Pinturas,
  Pisos,
  PisosParedesCategoria,
  ResetPassword,
  Sanitarios,
  CambiosDevoluciones,
  PoliticaDatos,
  MediosPago,
  Envios,
  DetalleProductsOfertas,
} from "../pages";

const NotExisting = lazy(() => import("../components/admin/404-page/404"));
import LoginModal from "../components/user/services/autenticacion/LoginModal";
import { NavCustome } from "../components/user/sections/nav/NavCustome";
import {
  DataUserUpdate,
  PedidosUser,
  Profile,
} from "../components/user/sections/pedidos/RutasPedido";
import { LoaderPage } from "../utils";

import { RecoverForm } from "../components/user/services/autenticacion";
import { Footer } from "../components/user/sections/footer/Footer";

export const DashboardUser = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <LoaderPage />
          </div>
        }>
        <NavCustome />
        <Routes>
          <Route path="/suministros/baños/" element={<BañosCategoria />} />
          <Route path="/suministros/cocinas" element={<CocinasCategoria />} />
          <Route
            path="/suministros/construccionyremodelacion"
            element={<ConstruccionCategoria />}
          />
          <Route
            path="/suministros/pisosyparedes"
            element={<PisosParedesCategoria />}
          />
          <Route path="/suministros/ofertas" element={<Ofertas />} />
          <Route path="/suministros/nosotros" element={<Nosotros />} />
          <Route path="/suministros/sanitarios" element={<Sanitarios />} />
          <Route path="/suministros/griferias" element={<Griferias />} />
          <Route path="/suministros/espejos" element={<Espejos />} />
          <Route path="/suministros/pinturas" element={<Pinturas />} />
          <Route path="/suministros/pegantes" element={<Pegantes />} />
          <Route path="/suministros/limpiadores" element={<Limpiadores />} />
          <Route path="/suministros/lavaplatos" element={<Lavaplatos />} />
          <Route path="/suministros/lavaderos" element={<Lavaderos />} />
          <Route path="/suministros/pisos" element={<Pisos />} />
          <Route path="/suministros/paredes" element={<Paredes />} />

          <Route
            path="/suministros/categoria/pinturas"
            element={<Pinturas />}
          />
          <Route
            path="/suministros/categoria/pegantes"
            element={<Pegantes />}
          />

          {/* pages de productos*/}
          <Route index element={<HomeUser />} />
          <Route path="/suministros/home" element={<HomeUser />} />
          <Route
            path="/suministros/resultados-busqueda/:nombre"
            element={<BuscadorPage />}
          />
          <Route
            path="/suministros/categoria/limpiadores"
            element={<Limpiadores />}
          />

          {/* validacion */}
          <Route path="/suministros/login" element={<LoginModal />} />
          {/* recuperar contraseña */}
          <Route
            path="/suministros/recover-password"
            element={<RecoverForm />}
          />

          <Route
            path="/suministros/reset-password/:token"
            element={<ResetPassword />}
          />

          {/* paginas de informacion  */}
          <Route
            path="/suministros/cambios-y-devoluciones"
            element={<CambiosDevoluciones />}
          />

          <Route
            path="/suministros/politica-de-proteccion-de-datos"
            element={<PoliticaDatos />}
          />
          <Route path="/suministros/medios-de-pago" element={<MediosPago />} />

          <Route
            path="/suministros/costos-y-tiempos-de-envios"
            element={<Envios />}
          />

          {/* pages de servicio  */}
          <Route
            path="/suministros/carrito-de-compras"
            element={<CarShopPage />}
          />
          <Route path="/suministros/entrega" element={<Entrega />} />
          <Route path="/suministros/pago" element={<Pago />} />

          <Route
            path="/suministros/details/:descripcion"
            element={<DetallesProducto />}
          />
          <Route
            path="/suministros/details-ofertas/:descripcion"
            element={<DetalleProductsOfertas />}
          />
          <Route
            path="/purchaseProcessCompleted/:detalles"
            element={<Ticket />}
          />

          {/* rutas anidadas */}
          <Route path="/suministros/user/" element={<PedidosPage />}>
            <Route index element={<Profile />} />
            <Route path="details" element={<PedidosUser />} />
            <Route path="data" element={<DataUserUpdate />} />
          </Route>
          <Route path="*" element={<NotExisting />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};
