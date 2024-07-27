import { useState } from "react";
import { NuevaOferta } from "./NuevaOferta";
import { Listado } from "./Listado";
import Layout from "../layout/Layout";

const Ofertas = () => {
  const [ofertaListado, setOfertaListado] = useState([]);
  return (
    <>
      <Layout
        title={"Ofertas"}
        component={
          <div className="container-ofertas">
            <section className="section-add-ofertas">
              <NuevaOferta
                setOfertaListado={setOfertaListado}
                ofertaListado={ofertaListado}
              />
            </section>
            <aside>
              <Listado
                setOfertaListado={setOfertaListado}
                ofertaListado={ofertaListado}
              />
            </aside>
          </div>
        }
      />
    </>
  );
};

export default Ofertas;
