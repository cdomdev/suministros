import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "../../assets/icons/reactIcons";

export const SubMenu = ({ label, items, className, link }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div
      className="menu-container"
      onMouseEnter={handleSubMenuToggle}
      onMouseLeave={handleSubMenuToggle}>
      <div className="menu-item">
        <NavLink to={link}>
          {label} <FaAngleDown />
        </NavLink>
        {isSubMenuOpen && (
          <div className={className}>
            <div>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.to} className="nav-link-item">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
