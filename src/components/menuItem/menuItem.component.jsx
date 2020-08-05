import React from "react";

import "./menuItem.styles.scss";
const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="titile">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
