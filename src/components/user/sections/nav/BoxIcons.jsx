import { IconCar } from "../CarShoping";
import { Pedidos } from "../../sections/pedidos/Pedidos";
import { Perfil } from "./Perfil";

export const BoxIcons = () => {
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
