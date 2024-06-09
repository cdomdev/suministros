import { FaWhatsapp } from "../assets/icons/reactIcons";
import { Link } from "react-router-dom";

export const BtnWhatsapp = () => {
  return (
    <>
      <div className="cotainer-btn-whatsapp">
        <div className="content-num">
          <span>1</span>
        </div>
        <div className="content">
          <Link
            to={"https://wa.me/573208132304"}
            target="_blank"
            rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </Link>
        </div>
      </div>
    </>
  );
};
