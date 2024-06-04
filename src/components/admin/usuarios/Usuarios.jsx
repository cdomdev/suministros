import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import  Pedidos  from "./pedidos/Pedidos";
import { fechtData } from "../../../utils/fechtData";
import { API_HOST } from "../../../config/config";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fechtData(
          `${API_HOST}/api/listar/usuarios`
        );
        setUsuarios(response.data.usuarios);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-user">
      <h2 className="text-center">Usuarios</h2>
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
          {usuarios
            .filter((usuario) => usuario.tienePedidos)
            .map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>
                  <Pedidos
                    id={usuario.id}
                    user={usuario}
                    url={`pedidos-usuario`}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Usuarios;