import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { IoIosMedical } from "../../../../../assets/icons/reactIcons";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import { useCarShop } from "../../../../../hook";

export const InvitadoDate = ({ handleClose }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { activeStep, setStep } = useCarShop();

  const updateStep = () => {
    setStep(activeStep + 1);
  };

  const handleSubmit = async (values) => {
    sessionStorage.setItem("DtUerForEnComp", JSON.stringify(values));
    handleClose();
    updateStep();
    navigate("/suministros/pago");
  };

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellidos: "",
          email: "",
          direccion: "",
          telefono: "",
          destino: "",
          detalles: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.nombre) {
            errors.nombre = "*El nombre es requerido*";
          }
          if (!values.direccion) {
            errors.direccion = "*La dirección es requerida*";
          }
          if (!values.destino) {
            errors.destino = "*El destino es requerido*";
          }
          if (!values.email) {
            errors.email = "*El correo es requerido*";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = "*Ingrese un correo electrónico válido*";
          }
          if (!values.telefono) {
            errors.telefono = "*El teléfono es requerido*";
          }
          if (!values.detalles) {
            errors.detalles = "*Por favor ingrese los detalles adicionales*";
          }
          return errors;
        }}
        onSubmit={handleSubmit}>
        {(formik) => <FormFormik formik={formik} message={message} />}
      </Formik>
    </>
  );
};

const FormFormik = ({ formik }) => {
  return (
    <>
      <div className="modal-envio">
        <p>
          Complete el siguiente formulario con sus datos para el envio de su
          compra. Los campos marcados con (*) son obligatorios
        </p>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>
              Nombres <IoIosMedical className="icon" />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese nombre completo"
              name="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="error">{formik.errors.nombre}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese apellidos (opcional)"
              name="apellidos"
              value={formik.values.apellidos}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Correo electronico
              <IoIosMedical className="icon" />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su correo electronico"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Destino del pedido
              <IoIosMedical className="icon" />
            </Form.Label>
            <Form.Select
              name="destino"
              value={formik.values.destino}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}>
              <option value="">Selccione un destino</option>
              <option value="1">Bogota - Municipios aledaños</option>
              <option value="2">Otros destinos nacionales</option>
            </Form.Select>
            {formik.touched.destino && formik.errors.destino ? (
              <div className="error">{formik.errors.destino}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Dirección <IoIosMedical className="icon" />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese direccion de entrega"
              name="direccion"
              value={formik.values.direccion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.direccion && formik.errors.direccion ? (
              <div className="error">{formik.errors.direccion}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>
              Número de teléfono <IoIosMedical className="icon" />
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese un numero de telefono"
              name="telefono"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="error">{formik.errors.telefono}</div>
            ) : null}
          </Form.Group>

          <Form.Label>
            Detalles <IoIosMedical className="icon" />
          </Form.Label>
          <div className="add">
            <p className="details-text">
              Ingrese detalles adicionales, si veve en cunjunto (nombre , apto ,
              torre ). Barrio (Nombre del barrio). O localidad (Nombre de la
              localidad), de talles nos ayuden a localizar
            </p>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                className="mt-3"
                rows={3}
                placeholder="Detalles adicionales para su entrega"
                name="detalles"
                value={formik.values.detalles}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.detalles && formik.errors.detalles ? (
                <div className="error">{formik.errors.detalles}</div>
              ) : null}
            </Form.Group>
          </div>
          <Button
            variant="primary"
            type="submit"
            disabled={formik.isSubmitting}>
            Continuar
          </Button>
        </Form>
      </div>
    </>
  );
};
