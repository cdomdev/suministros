import React, { lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DashboardUser } from "./routes";
const DashboardAdmin = lazy(() => import("./routes/DashBoardAdmin"));
import getTitleFronPath from "./utils/getTitleFronPath";
import { AppContextProvider } from "./hook";

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = getTitleFronPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="App">
        <AppContextProvider>
          <Routes>
            {/* Ruta para el dashboard del usuario normal */}
            <Route path="/*" element={<DashboardUser />} />

            {/* Ruta para el dashboard del administrador */}

            <Route path="/admin/*" element={<DashboardAdmin />} />
          </Routes>
        </AppContextProvider>
      </div>
    </>
  );
};
