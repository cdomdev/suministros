import Layout from "../layout/Layout";
import { BalanceCards } from "./BalanceCards";
import GraficProducts from "./GraficProducts";
import { MostSalled } from "./MostSalled";

const Balances = () => {
  return (
    <>
      <Layout
        title={"Balances generales"}
        component={
          <div className="conatanier-balans-dahsboard">
            <BalanceCards />
            <div className="balans-body-table">
              <h2>Productos mas vendidos</h2>
              <MostSalled />
            </div>
          </div>
        }
      />
    </>
  );
};

export default Balances;
