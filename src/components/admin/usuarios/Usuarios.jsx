import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Pedidos from "./pedidos/Pedidos";
import { API_HOST } from "../../../config/config";
import { api } from "../../../config/axios.conf";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api
      .get(`${API_HOST}/api/listar/usuarios`)
      .then((response) => {
        if (response.status === 200) {
          setUsuarios(response.data.listaPedidos);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="table-user">
      <h2 className="text-center">Listado de pedidos</h2>
      {!usuarios.length ? (
        <p className="text-center mt-3">cargando...</p>
      ) : (
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th className="thead-table-users">Indice</th>
              <th className="thead-table-users">Nombre</th>
              <th className="thead-table-users">E-mail</th>
              <th className="thead-table-users">Rol del usuario</th>
              <th className="thead-table-users">Pedidos</th>
            </tr>
          </thead>
          <tbody>
            {usuarios
              .filter((usuario) => usuario.tienePedidos)
              .map((usuario, index) => (
                <tr key={usuario.id || index}>
                  <td>{index + 1}</td>
                  <td>{usuario.name || usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.roles?.rol_name || usuario.role}</td>
                  <td>
                    {usuario.roles?.rol_name === "user" ? (
                      <Pedidos
                        id={usuario.id}
                        user={usuario}
                        url={`pedidos-usuario`}
                      />
                    ) : (
                      <Pedidos
                        url={`pedidos-invitado`}
                        user={usuario}
                        id={usuario.id}
                      />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Usuarios;
