import { BtnWhatsapp } from "../../common/BtnWhatsapp";

const Envio = () => {
  return (
    <div className="container">
      <div className="page-info">
        <h1>Costos y Tiempos de Envío</h1>
        <p>
          <strong>Suministros</strong> se compromete a realizar la entrega a
          domicilio de los productos comprados en el sitio web dentro del
          territorio colombiano, siempre que esté dentro de la cobertura de{" "}
          <strong>Transportadoras Nacionales</strong>, estas seran contratadas
          por <strong>Suministros</strong> para el envio de su pedido, y que las
          condiciones de seguridad y acceso así lo permitan.
        </p>
        <h2>Modalidades y Tiempos de Entrega</h2>
        <ul>
          <li>
            <strong>Domicilio estándar:</strong> Hasta 2 días hábiles.
            Disponible únicamente para el perímetro urbano y metropolitano en
            los departamentos con cobertura. El pedido llegará en varios envíos
            en el horario de 8:00 a.m. a 6:00 p.m.
          </li>
          <li>
            <strong>Domicilio programado:</strong> Hasta 5 días hábiles.
            Disponible únicamente para el perímetro urbano y metropolitano en
            los departamentos con cobertura. El pedido llegará en un solo envío
            en el horario de 8:00 a.m. a 6:00 p.m. Para este modo de envio debe
            comunicarse a las lineas de atencion.
          </li>
          <li>
            <strong>Domicilio nacional:</strong> Hasta 15 días hábiles.
            Disponible para entrega en los departamentos con cobertura en el
            horario de 8:00 a.m. a 6:00 p.m.
          </li>
        </ul>
        <p>
          Estos tiempos se cuentan desde el momento en que{" "}
          <strong>Suministros</strong> realice la confirmación de la compra. Los
          tiempos de entrega pueden variar debido a eventos de fuerza mayor o
          caso fortuito. Las entregas se realizarán dentro de la fecha límite,
          pero sin una hora exacta de entrega. Las compras realizadas en días no
          hábiles (sábado, domingo o festivo) u horarios no hábiles (después de
          las 5:59 p.m. y hasta las 6:59 a.m.) comenzarán a contar desde el
          siguiente día hábil.
        </p>

        <h2>Responsabilidades y Consideraciones</h2>
        <ul>
          <li>
            <strong>Suministros</strong> es responsable de enviar el pedido a la
            dirección suministrada por el usuario. Los productos serán
            entregados al comprador según la factura y/o a la persona designada
            para recibir el despacho.
          </li>
          <li>
            La persona que recibe el producto deberá revisarlo antes de firmar
            el documento de entrega proporcionado por la{" "}
            <strong>Transportadora Nacional </strong>.
          </li>
          <li>
            Si la entrega no se puede realizar por razones no imputables a{" "}
            <strong>Suministros</strong> y sus filiales, se comunicará al
            usuario el procedimiento a seguir para su entrega y los costos
            correspondientes al reproceso, si aplican.
          </li>
        </ul>
{/*  */}
        <h2>Costos de Envío</h2>
        <ul>
          <li>
            <strong>Bogotá y alrededores:</strong> $15.000 COP para productos
            por unidad
          </li>
          <li>
            <strong>Resto del país:</strong> $25.000 COP para productos por
            unidad
          </li>
          <li>
            <strong>ENvio al por mayor: </strong>
            Si su pedido es al por mayor uno de nuestro asesores se comunicara
            con usted para validad el tema del envio
          </li>
        </ul>
        <p>
          El valor del envío se conocerá durante el proceso de checkout y antes
          de realizar el pago.
        </p>

        <h2>Envío Gratis</h2>
        <p>
          Los usuarios podrán adquirir sus productos sin costo de envío si el
          total del pedido supera los $400.000. Esta promoción es exclusiva para
          compras realizadas a través del sitio web y aplica únicamente para
          destinos urbanos en las ciudades de Bogotá, Medellín, Cali,
          Barranquilla, Cartagena, Santa Marta, Valledupar, Cúcuta, Apartadó,
          Pereira, Armenia y Tunja.
        </p>

        <h2>Cambios de Dirección de Entrega</h2>
        <p>
          Si el usuario decide cambiar la dirección de entrega, debe reportarlo
          lo antes posible y por escrito a <strong>Suministros</strong> el mismo
          día de la compra mediante los canales de atención indicados en estos
          Términos y Condiciones. Este cambio puede generar un costo adicional,
          que será informado al usuario para su autorización. Si el usuario no
          autoriza el costo adicional y el producto ya fue despachado, deberá
          cubrir el costo logístico correspondiente. Si el cambio reduce el
          costo del despacho, se hará una devolución al usuario de la diferencia
          entre el costo inicial y el final.
        </p>
      </div>
      <BtnWhatsapp />
    </div>
  );
};

export default Envio;
