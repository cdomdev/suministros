import {
  TiShoppingCart,
  BiHomeAlt2,
  FaWhatsapp,
} from "../assets/icons/reactIcons";
import { Link } from "react-router-dom";
import { useCarShop } from "../hook";
import { useState, useEffect } from "react";
import { useNotification } from "../hook";
import { Spinner, Toast } from "react-bootstrap";
import imgLogo from "../assets/images/logo.webp";
