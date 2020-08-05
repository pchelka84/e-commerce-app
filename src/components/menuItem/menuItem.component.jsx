import React from "react";

import "./menuItem.styles.scss";
const MenuItem = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="titile">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
