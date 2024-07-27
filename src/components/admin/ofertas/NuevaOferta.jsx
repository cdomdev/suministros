import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { PopoverProductos } from "./PopoverProductos";
import { useNotification } from "../../../hook";
import { NotificationToast } from "../../common";
import { API_HOST } from "../../../config/config";
import { api } from "../../../config/axios.conf";

export const NuevaOferta = ({ setOfertaListado }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  // inicar el estado de la oferta
  const [oferta, setOferta] = useState({
    nombre: "",
    descuento: "",
    fechaIni: "",
    fechaFin: "",
  });

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  // solcuiar la lista de productos para ofertas
  useEffect(() => {
    axios
      .get(`${API_HOST}/api/productos`)
      .then((response) => {
        if (response.status === 200) {
          setListaProductos(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // tomar valores de los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOferta({
      ...oferta,
      [name]: value,
    });
  };

  // sleccion del id del la lista de productos
  const handleProductSelection = (e, product) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      const updatedSelections = selectedProducts.filter(
        (selectedProduct) => selectedProduct.id !== product.id
      );
      setSelectedProducts(updatedSelections);
    }
  };

  // hacer la solcitud con validaciones antes de enviar los datos
  const handleNuevaOferta = async (e) => {
    e.preventDefault();

    const { nombre, descuento, fechaIni, fechaFin } = oferta;

    if (!nombre || !descuento || !fechaIni || !fechaFin) {
      setBgToast("danger");
      setShowToast(true);
      setToastMessage("Por favor complete todos los campos de la oferta");
      return;
    }
    try {
      const newOferta = {
        nombre: nombre,
        descuento: parseInt(descuento),
        fechaIni: moment(fechaIni).format("DD-MM-YYYY"),
        fechaFin: moment(fechaFin).format("DD-MM-YYYY"),
        productos: selectedProducts,
      };

      const response = await api.post(
        `${API_HOST}/api/crear/ofertas`,
        newOferta
      );

      const { ofertas } = response.data;

      if (response.status === 201) {
        setSelectedProducts("");
        setOfertaListado(ofertas);
        setBgToast("success");
        setShowToast(true);
        setToastMessage("Nueva oferta agregada con exito");
      } else {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("Hubo un error al crear la oferta, intentalo de nuevo");
      }

      // reestablecer el estado
      setOferta({
        nombre: "",
        descuento: "",
        fechaIni: "",
        fechaFin: "",
      });
    } catch (error) {
      if (error.response.status === 403) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("No tienes permisos para esta operacion");
      } else {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("Hubo un error al crear la oferta, intentalo de nuevo");
      }
      console.log("Error en la creacion de la oferta:", error);
    }
  };

  return (
    <div className="add-ofertas">
      <h3 className="title-add-ofertas">Crear una nueva oferta</h3>
      <p className="text">
        Aqui podra agragar ofertas a los productos existentes,
        <strong> (Marca - producto - cantidad).</strong>
      </p>
      <Form className="mt-4" onSubmit={handleNuevaOferta}>
        <NotificationToast text={"Nuevas ofertas"} />
        <Form.Label className="label-fm">Nombre de la oferta</Form.Label>
        <Form.Control
          type="text"
          placeholder="Black Friday"
          value={oferta.nombre}
          onChange={handleInputChange}
          name="nombre"
        />
        <Form.Label className="label-fm mt-1">
          Porcentaje de descuento
        </Form.Label>
        <Form.Control
          type="number"
          min={1}
          max={100}
          placeholder="5"
          value={oferta.descuento}
          onChange={(e) => setOferta({ ...oferta, descuento: e.target.value })}
        />
        <Row className="mt-2">
          <Col>
            <Form.Label className="label-date">
              Fecha inicial de la oferta
            </Form.Label>
            <Form.Control
              type="date"
              value={oferta.fechaIni}
              name="fechaIni"
              onChange={handleInputChange}
            />
          </Col>
          <Form.Label className="label-date mt-1">
            Fecha final de la oferta
          </Form.Label>
          <Col>
            <Form.Control
              type="date"
              value={oferta.fechaFin}
              name="fechaFin"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <div className="container-popover mt-3">
          <PopoverProductos
            listaProductos={listaProductos}
            handleProductSelection={handleProductSelection}
            selectedProducts={selectedProducts}
          />
        </div>
        <div className="container-btn-ofertas">
          <Button className="mt-4" type="submit">
            Crear nueva oferta
          </Button>
        </div>
      </Form>
    </div>
  );
};
