import React, { useEffect, useState } from "react";
import { RutasBox } from "./RutasBox";
import Layout from "../layout/Layout";
import { getDataStorage } from "../../../utils";
import Avatar from "@mui/material/Avatar";

const HomeAdmin = () => {
  const [data, setData] = useState({});
  let nombre = "carlos";
  useEffect(() => {
    setData(getDataStorage("userOnValidateScesOnline"));
  }, []);

  return (
    <>
      <Layout
        title={"Dashboard"}
        component={
          <div className="container-cards-home-admin">
            <div className="dahsboard">
              <Avatar
                src={data.picture}
                sx={{ cursor: "pointer" }}
                className="profile"
              />
              <h2>
                {" "}
                Hola <strong>{data.name}, </strong> Bienvenido al panel de
                administrador
              </h2>
            </div>
            <RutasBox />
          </div>
        }
      />
    </>
  );
};

export default HomeAdmin;
