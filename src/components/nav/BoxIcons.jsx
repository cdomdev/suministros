import Pedidos from "../pedidos/Pedidos";
import Perfil from "./Perfil";
import { IconCar } from "../CarShoping/dataCar/IconCar";

const BoxIcons = () => {
  return (
    <div className="content-icons-nav">
      <div className="pedidos">
        <Pedidos />
      </div>
      <div className="perfil">
        <Perfil />
      </div>
      <div className="car">
        <IconCar />
      </div>
    </div>
  );
};

export default BoxIcons;
