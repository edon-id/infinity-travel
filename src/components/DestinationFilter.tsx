import React from "react";
import sidebar from "src/styles/Sidebar.module.css";

const DestinationFilter = () => {
  return (
    <>
      <div className={sidebar.filter1}>
        <input type="checkbox" id="greece" name="greece" />
        <label>Грција</label>
      </div>
      <div className={sidebar.filter1}>
        <input type="checkbox" id="greece" name="greece" />
        <label>Хрватска</label>
      </div>
      <div className={sidebar.filter1}>
        <input type="checkbox" id="greece" name="greece" />
        <label>Албанија</label>
      </div>
      <div className={sidebar.filter1}>
        <input type="checkbox" id="greece" name="greece" />
        <label>Турција</label>
      </div>
      <div className={sidebar.filter1}>
        <input type="checkbox" id="greece" name="greece" />
        <label>Египет</label>
      </div>
      <div className={sidebar.filter1}>
        <input type="checkbox" id="greece" name="greece" />
        <label>Италија</label>
      </div>
    </>
  );
};

export default DestinationFilter;
