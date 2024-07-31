import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { IoIosMedical } from "../../../../../assets/icons/reactIcons";
import { Formik } from "formik";
import { useCarShop } from "../../../../../hook";
import { useNavigate } from "react-router";

export const UserDates = ({ handleClose }) => {
  const [message, setMessage] = useState("");
  const { activeStep, setStep } = useCarShop();
  const navigate = useNavigate();

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
          direccion: "",
          telefono: "",
          detalles: "",
          destino: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.destino) {
            errors.destino = "*El destino es requerido*";
          }
          if (!values.direccion) {
            errors.direccion = "*La dirección es requerida*";
          }
          if (!values.telefono) {
            errors.telefono = "*El teléfono es requerido*";
          }
          if (!values.detalles) {
            errors.detalles = "*Por favor ingrese detalles adicionales*";
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
          <Form.Group className="mb-3">
            <Form.Label>
              Dirección <IoIosMedical className="icon" />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su dirección"
              name="direccion"
              value={formik.values.direccion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.direccion &&
            formik.errors.direccion &&
            formik.errors.detalles ? (
              <div className="error">{formik.errors.direccion}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Número de teléfono <IoIosMedical className="icon" />
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese su número"
              name="telefono"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="error">{formik.errors.telefono}</div>
            ) : null}
          </Form.Group>
          <div className="add">
            <p className="details-text">
              Ingrese detalles adicionales, si veve en cunjunto (nombre , apto ,
              torre ). Barrio (Nombre del barrio). O localidad (Nombre de la
              localidad), de talles nos ayuden a localizar
            </p>
            <Form.Label className="mt-2">
              Detalles <IoIosMedical className="icon" />
            </Form.Label>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Detalles"
                name="detalles"
                value={formik.values.detalles}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.detalles ? (
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
