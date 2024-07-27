// DashboardAdmin.jsx
import { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useUser } from "../hook";
import { LoaderPage } from "../components/common";
import {
  GestionUsuarios,
  Admin,
  Categorias,
  Ofertas,
  Subcategorias,
  HomeAdmin,
  NotExisting,
  Detalles,
  Balances,
  PageProfile,
} from "../components/admin";
import GestionInventary from "../components/admin/inventario/GestionInventary";
import { SidebarAdmin } from "../components/admin/Nav/SidebarAdmin";
import { Data } from "../components/admin/perfil/rutas/Data";
import { UpdateProfile } from "../components/admin/perfil/rutas/UpdateProfile";
import { NotificacionesList } from "../components/admin/perfil/rutas/NotificacionesList";

const DashboardAdmin = () => {
  const { isAdmin, setIsAdmin } = useUser();

  useEffect(() => {
    const adminOnly = localStorage.getItem("HttpOnlyAdmin");
    if (adminOnly) {
      setIsAdmin(true);
    }
  }, [isAdmin]);

  return (
    <>
      <Suspense
        fallback={
          <div>
            <LoaderPage />
          </div>
        }>
        {isAdmin && <SidebarAdmin />}
        <Routes>
          {isAdmin && (
            <>
              <Route index element={<HomeAdmin />} />
              <Route path="/gestion/usuarios" element={<GestionUsuarios />} />
              <Route
                path="/gestion/usuarios/pedidos-datails"
                element={<Detalles />}
              />
              <Route path="/añadir/productos" element={<Admin />} />
              <Route
                path="/gestion/inventario"
                element={<GestionInventary />}
              />
              <Route path="/balances" element={<Balances />} />

              <Route path="/crear/ofertas" element={<Ofertas />} />
              <Route path="/gestionar/categorias" element={<Categorias />} />
              <Route
                path="/gestionar/subcategorias"
                element={<Subcategorias />}
              />
              <Route
                path="/gestionar/subcategorias"
                element={<Subcategorias />}
              />
              <Route path="/profile/" element={<PageProfile />}>
                <Route index element={<Data />} />
                <Route path="profile-update" element={<UpdateProfile />} />
                <Route path="notifications" element={<NotificacionesList />} />
              </Route>
            </>
          )}
          {!isAdmin && <Route path="/*" element={<NotExisting />} />}
        </Routes>
      </Suspense>
    </>
  );
};

export default DashboardAdmin;
