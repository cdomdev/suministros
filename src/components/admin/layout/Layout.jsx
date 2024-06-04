import React from "react";

const Layout = ({ component, title }) => {
  return (
    <div className="layout-body-admin">
      <div className="header-admin">
        <header>
          <h1>{title}</h1>
        </header>
      </div>
      <div className="body-content">
        <div>{component}</div>
      </div>
    </div>
  );
};

export default Layout;
