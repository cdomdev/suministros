import { useEffect, useState } from "react";
import { api } from "../../../config/axios.conf";
import { API_HOST } from "../../../config/config";
import GraficProducts from "./GraficProducts";

export const MostSalled = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get(`${API_HOST}/api/see-best-sallers`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log("Error al lista los productos mas vendidos", error);
      });
  }, []);

  return (
    <div className="balans-table">
      <div className="contenedor-card">
        <GraficProducts data={products} />
      </div>
    </div>
  );
};
