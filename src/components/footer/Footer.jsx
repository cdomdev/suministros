import { Link } from "react-router-dom";
import {
  IoLogoWhatsapp,
  MdOutlinePhone,
  IoPhonePortraitOutline,
  CiMail,
  SiMercadopago,
  TbTruckDelivery,
} from "../../assets/icons/reactIcons";

export const Footer = () => {
  return (
    <div className="f-footer-container">
      <hr />
      <div className="svg">
        <div className="svg-content">
          <SiMercadopago className="icon" />
          <h4>Metodos de pago</h4>
          <p className="text-svg">
            Paga con tarjetas, credito, debito <br />a través de mercado pago
          </p>
        </div>
        <hr />
        <div className="svg-content">
          <TbTruckDelivery className="animated-truck" />
          <h4 className="text-svg-truck">Envio a domicilio</h4>
          <p>Recibe tu compras donde estes</p>
        </div>
      </div>
      <hr />
      <footer>
        <div className="footer-container mt-1">
          <div>
            <h5>Servicio al cliente</h5>
            <ul>
              <li>
                <Link to={"/suministros/nosotros"}>Sobre nosotros</Link>
              </li>
              <li>
                <Link to={"/suministros/cambios-y-devoluciones"}>
                  Cambios y devoluciones
                </Link>
              </li>
              <li>
                <Link to={"/suministros/politica-de-proteccion-de-datos"}>
                  Politicas de proteccion de datos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Precesos de compra</h5>
            <ul>
              <li>
                {" "}
                <Link to={"/suministros/medios-de-pago"}>Medios de pago</Link>
              </li>
              <li>
                <Link to={"/suministros/costos-y-tiempos-de-envios"}>
                  Costos y tiempos de envio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Lineas de atencion</h5>
            <ul>
              <li>
                <MdOutlinePhone />
                <Link>+57 601 560 5000</Link>
              </li>
              <li>
                <IoPhonePortraitOutline />
                <Link to={"https://wa.me/573208132304"} target="_blank">
                  {" "}
                  <IoLogoWhatsapp className="what" /> +57 3208132305
                </Link>
              </li>
              <li>
                <CiMail />
                <Link> atencioncli@Sumi.co</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Mi cuenta</h5>
            <ul>
              <li>
                <Link to={"/suministros/recover-password"}>
                  Olvide mi contraseña
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
