import { useEffect, useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNotification } from "../../../hook";
import { NotificationToast } from "../../../utils";
import axios from "axios";
import { API_HOST } from "../../../config/config";

// crear

export const Crear = ({ setCategorias, url }) => {
  const [categoryName, setCategoryName] = useState("");

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const handleCategory = async () => {
    try {
      if (!categoryName) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("No hay datos para agregar una categoria");
        return;
      }

      const data = { nombre: categoryName };
      const response = await axios.post(`${API_HOST}/api/${url}`, data);

      if (response.status === 200 || response.status === 201) {
        setCategorias(response.data.categorias);
        setCategoryName("");
        setBgToast("success");
        setShowToast(true);
        setToastMessage("Se agrego una nueva categoria");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("No se pudo crear la categoria, intentalo de nuevo");
      }
    }
  };
  return (
    <div className="body-category">
      <NotificationToast text={"Categorias"} />
      <h2 className="title-add-category">Agregar nueva categoria</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre de la categoría"
        className="mb-3">
        <Form.Control
          type="text"
          placeholder="Agregar categoría"
          className="input-category"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </FloatingLabel>

      <div>
        <Button variant="primary" onClick={handleCategory}>
          Agregar categoría
        </Button>
      </div>
    </div>
  );
};

// Listar
export const Listar = ({ setCategorias, url, categorias }) => {
  try {
    useEffect(() => {
      const fechtData = async () => {
        await axios
          .get(`${API_HOST}/api/obtener/${url}`)
          .then((response) => {
            const { categorias } = response.data;
            if (response.status === 200) {
              setCategorias(categorias);
            }
          })
          .catch((error) => {
            console.error("Error al realizar la solicitud:", error);
          });
      };
      fechtData();
    }, []);
  } catch (e) {
    console.log(e);
  }
  return (
    <>
      <div className="lista-categrtorias">
        <h2 className="title-table-category">Lista de categorias:</h2>
        <Table
          striped
          bordered
          hover
          size="sm"
          responsive
          className="table-category">
          <thead>
            <tr>
              <th className="thead-table">Categorias:</th>
            </tr>
          </thead>
          <tbody className="tbody-table-category">
            {categorias &&
              categorias.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.nombre}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
// Eliminar

export const Eliminar = ({ setCategorias, categorias, url }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const handleCategoryChange = (e) => {
    const id = e.target.value;
    setSelectedCategoryId(id);
  };
  const handleCategoryDelete = async () => {
    try {
      if (!selectedCategoryId) {
        setToastMessage("Seleccione la categoria a eliminar");
        setBgToast("danger");
        setShowToast(true);
        return;
      }
      const id = parseInt(selectedCategoryId);

      const response = await axios.delete(
        `${API_HOST}/api/delete/${id}/${url}`,
        {
          data: { id },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setCategorias(response.data.categorias);
        setToastMessage("Se elimino una categoria");
        setShowToast(true);
        setBgToast("success");
      } else {
        setShowToast(true);
        setBgToast("danger");
        setToastMessage("No se puedo eliminar la oferta la categoria");
      }
    } catch (error) {
      console.error("Error al intentar eliminar la categoría", error);
      if (error.response && error.response.data && error.response.data.error) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("No se pudo eliminar la categoria, intentalo de nuevo");
      }
    }
  };

  return (
    <>
      <div className="contenedor-category-delete">
        <h4 className="title-delete-category">Eliminar categoria:</h4>
        <NotificationToast text={"Categorias"} />
        <p className="text">
          Antes de eliminar una categoria, asegurece que no tenga productos
          asociados.
          <br />
          <br />
        </p>
        <p className="text">Selecione la categoria a eliminar:</p>
        <Form.Select className="mt-3" onChange={(e) => handleCategoryChange(e)}>
          <option>Seleccionar categoría</option>
          {categorias &&
            categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
        </Form.Select>

        <div className="mt-5">
          <Button
            variant="danger "
            style={{ float: "right" }}
            onClick={handleCategoryDelete}>
            Eliminar categoría
          </Button>
        </div>
      </div>
    </>
  );
};
