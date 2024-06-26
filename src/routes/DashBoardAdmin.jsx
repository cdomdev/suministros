// DashboardAdmin.jsx
import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useUser } from "../hook";
import { LoaderPage } from "../utils";
import {
  GestionUsuarios,
  Admin,
  Categorias,
  Ofertas,
  Subcategorias,
  HomeAdmin,
  NotExisting,
  Detalles,
} from "../components/admin";
import GestionInventary from "../components/admin/inventario/GestionInventary";
import { SidebarAdmin } from "../components/admin/Sidebar/SidebarAdmin";

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
              <Route path="/crear/ofertas" element={<Ofertas />} />
              <Route path="/gestionar/categorias" element={<Categorias />} />
              <Route
                path="/gestionar/subcategorias"
                element={<Subcategorias />}
              />
            </>
          )}
          {!isAdmin && <Route path="/*" element={<NotExisting />} />}
        </Routes>
      </Suspense>
    </>
  );
};

export default DashboardAdmin;
