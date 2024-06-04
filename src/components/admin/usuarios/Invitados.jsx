import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { fechtData } from "../../../utils/fechtData";
import  Pedidos  from "./pedidos/Pedidos";
import { API_HOST } from "../../../config/config";

export const Invitados = () => {
  const [invitados, setInvitados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fechtData(
          `${API_HOST}/api/listar/invitados`
        );
        setInvitados(response.data.invitados);
      } catch (error) {
        // Manejar otros errores
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="table-user">
      <h2 className="text-center">Invitados</h2>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th className="thead-table-users">Id</th>
            <th className="thead-table-users">Nombre</th>
            <th className="thead-table-users">E-mail</th>
            <th className="thead-table-users">Pedidos</th>
          </tr>
        </thead>
        <tbody>
          {invitados
            .filter((invitado) => invitado.tienePedidos)
            .map((invitado) => (
              <tr key={invitado.id}>
                <td>{invitado.id}</td>
                <td>{invitado.nombre}</td>
                <td>{invitado.email}</td>
                <td>
                  <Pedidos
                    user={invitado}
                    url={`pedidos-invitado`}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
