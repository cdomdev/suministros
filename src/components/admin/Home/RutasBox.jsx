import { Link } from "react-router-dom";
import { IoBagAddSharp } from "react-icons/io5";
import { MdOutlineInventory, MdAssignmentAdd } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { GiHistogram } from "../../../../public/icons/reactIcons";

export const RutasBox = () => {
  return (
    <>
      <div className="box-rutas-admin">
        <Link className="link-box box1 " to="/admin/gestion/usuarios">
          <div className="icon-box-content icb-1">
            <BsBoxSeam className="icon-box icon-1" />
          </div>
          <div className="body-rutas">
            <h2>Ordenes de compra</h2>
            <span>Ver ordernes de compra</span>
          </div>
        </Link>
        <Link className="link-box box2" to="/admin/añadir/productos">
          <div className="icon-box-content icb-2">
            <IoBagAddSharp className="icon-box icon-2" />
          </div>
          <div className="body-rutas ">
            <h2>Productos</h2>
            <span>Agregar nuevos productos</span>
          </div>
        </Link>
        <Link className="link-box box3" to="/admin/gestion/inventario">
          <div className="icon-box-content icb-3">
            <MdOutlineInventory className="icon-box icon-3" />
          </div>
          <div className="body-rutas">
            <h2>Inventario</h2>
            <span>Ver / actualizar inventario</span>
          </div>
        </Link>
        <Link className="link-box box4" to="/admin/crear/ofertas">
          <div className="icon-box-content icb-4">
            <BiSolidOffer className="icon-box icon-4" />
          </div>
          <div className="body-rutas">
            <h2>Ofertas</h2>
            <span>Añadir / eliminar ofertas</span>
          </div>
        </Link>
        <Link className="link-box box5" to="/admin/gestionar/categorias">
          <div className="icon-box-content icb-5">
            <MdAssignmentAdd className="icon-box icon-5" />
          </div>
          <div className="body-rutas">
            <h2>Categorias</h2>
            <span>Ver/ añadir / eliminar categorias</span>
          </div>
        </Link>
        <Link className="link-box box6" to="/admin/gestionar/subcategorias">
          <div className="icon-box-content icb-6">
            <MdAssignmentAdd className="icon-box icon-6" />
          </div>
          <div className="body-rutas">
            <h2>Subcategorias</h2>
            <span>Ver/ añadir / eliminar Subcategorias</span>
          </div>
        </Link>
        <Link className="link-box box7" to="/admin/balances">
          <div className="icon-box-content icb-7">
            <GiHistogram className="icon-box icon-7" />
          </div>
          <div className="body-rutas">
            <h2>Balances</h2>
            <span>Analisis</span>
          </div>
        </Link>
      </div>
    </>
  );
};
