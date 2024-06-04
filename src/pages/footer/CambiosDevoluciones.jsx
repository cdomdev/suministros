import React from "react";
import { BtnWhatsapp } from "../../utils/ComponentsUtils";

const CambiosDevoluciones = () => {
  return (
    <div className="container d-flex">
      <div className="page-info col-12">
        <section className="col-12 mb-5">
          <h1 >Cambios y Devoluciones</h1>
          <h2>Condiciones Generales</h2>
          <h3>Estado del Producto</h3>
          <ul>
            <li>
              El producto debe estar en condiciones aptas para su venta, es
              decir, sin uso, sin armar, en el empaque original, con todos los
              catálogos, manuales y piezas.
            </li>
            <li>Debe presentar la tirilla de pago (factura) de compra.</li>
            <li>
              En caso de no contar con ella, puede solicitar una constancia y/o
              certificado de compra.
            </li>
          </ul>

          <h3>Plazo para Cambios</h3>
          <ul>
            <li>
              El plazo máximo para solicitar el cambio de productos es de 30
              días calendario a partir de la fecha de compra.
            </li>
            <li>Para materiales de obra sobrante, el plazo es de 90 días.</li>
          </ul>

          <h3>Productos Comprados por Teléfono o Internet</h3>
          <ul>
            <li>
              Si los productos no han sido recibidos, comuníquese a la línea de
              atención en Bogotá al  601 560 5000 o a nivel nacional al 3208132305.
            </li>
          </ul>
        </section>

        <section className="col-12  ">
          <h2>Excepciones</h2>
          <ul>
            <li>
              No se aceptarán cambios o devoluciones de celulares, productos
              diseñados, cortados o elaborados a medida, bajo especificaciones
              particulares o adquiridos a través de redención de puntos.
            </li>
            <li>
              La devolución se realizará a través de una nota de devolución
              equivalente al valor real pagado por el producto.
            </li>
          </ul>
        </section>

        <section className="col-12 mt-2">
          <h2>Devolución Antes de la Entrega</h2>
          <p>
            Para hacer efectiva la devolución de dinero de una compra antes de
            la entrega, siga estos pasos:
          </p>
          <ol>
            <li>
              Comuníquese a la línea de atención al cliente 3208132305. o en
              Bogotá al  601 560 5000.
            </li>
            <li>Revisaremos el estado de la entrega.</li>
            <li>
              Tomaremos su solicitud y daremos trámite a la devolución del valor
              pagado.
            </li>
          </ol>
        </section>
      </div>
      <BtnWhatsapp/>
    </div>
  );
};

export default CambiosDevoluciones;
