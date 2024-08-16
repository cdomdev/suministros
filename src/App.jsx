import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DashboardUser } from "../src/routes/DashboardUser";
import { getTitleFronPath } from "./utils/getTitleFronPath";
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
            <Route path="/*" element={<DashboardUser />} />
          </Routes>
        </AppContextProvider>
      </div>
    </>
  );
};
