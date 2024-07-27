import { BtnWhatsapp } from "../../components/common/BtnWhatsapp";
const MediosPago = () => {
  return (
    <div className="container">
      <div className="page-info mt-1">
        <section className="col-12 mb-3">
          <h1>Medios de Pago</h1>
          <h2>Pago con Mercado Pago</h2>
          <p>
            Mercado Pago es una plataforma segura y confiable que te permite
            realizar pagos en línea de manera fácil y rápida. A través de
            Mercado Pago, puedes pagar con las siguientes opciones:
          </p>
          <ul>
            <li>
              <strong>Tarjetas de Crédito:</strong> Visa, MasterCard, American
              Express, Diners Club, y otras.
            </li>
            <li>
              <strong>Tarjetas de Débito:</strong> Visa Débito, Maestro, y
              otras.
            </li>
            <li>
              <strong>Otros Medios:</strong> Transferencias bancarias, pagos en
              efectivo a través de puntos de pago autorizados.
            </li>
          </ul>
          <h3>¿Como realuizar un compra con mercado pago?</h3>
          <p>
            Para realizar un pago con Mercado Pago, simplemente selecciona esta
            opción al finalizar tu compra y sigue los pasos indicados por la
            plataforma. Una vez completado el pago, recibirás una confirmación
            por correo electrónico.
          </p>
        </section>

        <section className="col-12 ">
          <h2>Pago Contra Entrega</h2>
          <p>
            Si prefieres pagar al momento de recibir tu producto, puedes optar
            por la opción de Pago Contra Entrega. Esta modalidad está disponible
            en los siguientes casos:
          </p>
          <ul>
            <li>
              <strong>Retiro en Tienda:</strong> Puedes recoger tu pedido en
              cualquiera de nuestras tiendas y pagar directamente en el
              mostrador.
            </li>
            <li>
              <strong>Entrega a Domicilio:</strong> Paga en efectivo al recibir
              tu pedido en la dirección que nos indiques. Asegúrate de tener el
              monto exacto ya que nuestros repartidores pueden no contar con
              cambio suficiente.
            </li>
          </ul>
          <p>
            Para seleccionar la opción de Pago Contra Entrega, elige esta
            modalidad al momento de finalizar tu compra y asegúrate de verificar
            los detalles de tu pedido y la dirección de entrega.
          </p>
          <h3>¿Qué debes tener en cuenta al elegir Pago Contra Entrega?</h3>
          <ul>
            <li>Tener el valor total en efectivo.</li>
            <li>
              Recuerda que debes tener el dinero de la compra exacto, pues la
              persona encargada de entregarte el producto no maneja efectivo
              para dar cambio.
            </li>
          </ul>
        </section>
      </div>
      <BtnWhatsapp />
    </div>
  );
};

export default MediosPago;
