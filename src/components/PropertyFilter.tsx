import React from "react";
import sidebar from "src/styles/Sidebar.module.css";

const PropertyFilter = () => {
  return (
    <>
      <div className={sidebar.filter3}>
        <input type="checkbox" id="apartment" name="apartment" />
        <label>Апартмани</label>
      </div>
      <div className={sidebar.filter3}>
        <input type="checkbox" id="hotel" name="hotel" />
        <label>Хотели</label>
      </div>
    </>
  );
};

export default PropertyFilter;
