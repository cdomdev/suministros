import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { Eliminar } from "./Eliminar";
import { Actualizar } from "./Actualizar";
import { API_HOST } from "../../../config/config";
import { api } from "../../../config/axios.conf";

export const Listado = ({ ofertaListado, setOfertaListado }) => {
  useEffect(() => {
    const fecthData = async () => {
      await api
        .get(`${API_HOST}/api/listar/ofertas`)
        .then((response) => {
          const { ofertas } = response.data;
          if (response.status === 200) {
            setOfertaListado(ofertas || []);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fecthData();
  }, []);

  const formatedValueDate = (dateString) => {
    // Asegurarse de que el valor de fecha sea válido
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Fecha inválida";
    }

    const formatedDate = new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(date);

    return formatedDate;
  };

  return (
    <div className="section-listado-ofertas">
      <h4>Ofertas vigentes</h4>
      <Accordion defaultActiveKey="0">
        {ofertaListado.length === 0 ||
        ofertaListado === "No hay ofertas disponibles" ? (
          <p className="ofertas-no-disponibles">
            No hay ofertas disponibles...
          </p>
        ) : (
          ofertaListado.map((oferta) => (
            <Accordion.Item key={oferta.id} eventKey="0">
              <Accordion.Header>
                <strong>{oferta.nombre}</strong>
              </Accordion.Header>
              <Accordion.Body>
                <div className="body-ofertas-acordeon">
                  <div className="oferta-informacion">
                    <strong>Descuento: </strong>
                    <strong className="sale">{oferta.descuento}%</strong>
                    <p className="text-oferta">Fecha de inicio:</p>
                    <span>{formatedValueDate(oferta.fecha_inicio)}</span>
                    <p className="text-oferta">Fecha de fin:</p>
                    <span>{formatedValueDate(oferta.fecha_fin)}</span>
                  </div>
                  <div className="productos-de-la-oferta">
                    <h5 className="text-producto-oferta">
                      Productos en la oferta:
                    </h5>
                    <ul>
                      {oferta.Productos && oferta.Productos.length > 0 ? (
                        oferta.Productos.map((producto) => (
                          <li key={producto.id}>{producto.nombre}</li>
                        ))
                      ) : (
                        <li>No hay productos disponibles</li>
                      )}
                    </ul>
                  </div>
                  <div className="content-buttons-section">
                    <Eliminar
                      oferta={oferta}
                      setOfertaListado={setOfertaListado}
                      ofertaListado={ofertaListado}
                    />
                    <Actualizar
                      ofertaData={oferta}
                      setOfertaListado={setOfertaListado}
                      ofertaListado={ofertaListado}
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))
        )}
      </Accordion>
    </div>
  );
};
