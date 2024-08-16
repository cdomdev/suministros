import { Outlet } from "react-router";
import { Sidebar } from "../../components/pedidos/sidebar/Sidebar";
import { BtnWhatsapp } from "../../common";

const PedidosPage = () => {
  return (
    <div>
      <section>
        <div className="main-pedidos">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="body">
            <Outlet />
          </div>
        </div>
      </section>
      <BtnWhatsapp />
    </div>
  );
};

export default PedidosPage;
