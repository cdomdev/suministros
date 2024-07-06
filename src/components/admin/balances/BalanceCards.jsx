import React from "react";
import {
  PiUsersFill,
  BsBox2Fill,
  BsGraphUpArrow,
  MdOutlinePendingActions,
  BsSendCheck,
} from "../../../assets/icons/reactIcons";
import { useState, useEffect } from "react";
import { api } from "../../../config/axios.conf";
import { API_HOST } from "../../../config/config";
import { formateValue } from "../../../utils/funtionsProducts";

export const BalanceCards = () => {
  const [balances, setbalances] = useState([]);

  useEffect(() => {
    api
      .get(`${API_HOST}/api/see-balance-sheets`)
      .then((response) => {
        if (response.status === 200) {
          setbalances(response.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="balans-cards-header">
      <div className="card">
        <p className="title">Total usuarios</p>
        <div className="body">
          <span>{balances.users}</span>
          <div className="icon-content f-ci1 ">
            <PiUsersFill className="icon f-i1" />
          </div>
        </div>
        <p className="text-footer-card">Se incluyen usuarios e invitados</p>
      </div>
      <div className="card">
        <p className="title">Total ordenes</p>
        <div className="body">
          <span>{balances.totalOrders}</span>
          <div className="icon-content f-ci2">
            <BsBox2Fill className="icon f-i2" />
          </div>
        </div>
        <p className="text-footer-card">Ordenes de usuarios e invitados</p>
      </div>
      <div className="card">
        <p className="title">Total vendido</p>
        <div className="body">
          <span>$ {formateValue(parseInt(balances.totalSales))}</span>
          <div className="icon-content f-ci3">
            <BsGraphUpArrow className="icon f-i3" />
          </div>
        </div>
        <p className="text-footer-card">Balance total de ventas</p>
      </div>
      <div className="card">
        <p className="title">Pendientes por envio</p>
        <div className="body">
          <span>{balances.totalPending}</span>
          <div className="icon-content f-ci4">
            <MdOutlinePendingActions className="icon f-i4" />
          </div>
        </div>
        <p className="text-footer-card">
          Pedidos con estado deiferentes a entregado
        </p>
      </div>
      <div className="card">
        <p className="title">Total despachados</p>
        <div className="body">
          <span>{balances.totalShipped}</span>
          <div className="icon-content f-ci5">
            <BsSendCheck className="icon f-i5" />
          </div>
        </div>
        <p className="text-footer-card">Pedidos con estado de entregado</p>
      </div>
    </div>
  );
};
