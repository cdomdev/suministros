import Layout from "../layout/Layout";
import { MostSalled } from "./MostSalled";
import { BalanceCards } from "./BalanceCards";

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
