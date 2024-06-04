import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../../../helpers/isAuthenticated";

export const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? element : <Navigate to="/suministros/home" />;
};
