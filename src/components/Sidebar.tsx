import React, { useState } from "react";
import sidebar from "src/styles/Sidebar.module.css";
import DestinationFilter from "./DestinationFilter";
import PropertyFilter from "./PropertyFilter";
import PriceRangeSlider from "./PriceRangeFilter";

type Props = {};

const Sidebar: React.FC<Props> = (props: Props) => {
  const [showDestinations, setShowDestinations] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showTypeOfProperty, setShowTypeOfProperty] = useState<boolean>(false);

  const handleDestinationsClick = () => {
    setShowDestinations(!showDestinations);
  };

  const handlePriceClick = () => {
    setShowPrice(!showPrice);
  };

  const handleTypeOfPropertyClick = () => {
    setShowTypeOfProperty(!showTypeOfProperty);
  };

  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleRangeChange = (newRange: number[]) => {
    setPriceRange(newRange);
  };

  return (
    <div className={sidebar.container}>
      <div className={sidebar.searchBox}>
        <label>Search</label>
        <div className={sidebar.input}>
          <input type="text" />
          <img
            src="/searchIcon.png"
            alt="search"
            onClick={() => {
              console.log("clicked");
            }}
          />
        </div>
      </div>
      <div className={sidebar.destination}>
        <p>Дестинација</p>
        <i
          className="fa-solid fa-chevron-down"
          onClick={handleDestinationsClick}
        ></i>
      </div>
      {showDestinations && <DestinationFilter />}
      <div className={sidebar.line}></div>
      <div className={sidebar.price}>
        <p>Цена EUR</p>
        <i className="fa-solid fa-chevron-down" onClick={handlePriceClick}></i>
      </div>
      {showPrice && (
        <PriceRangeSlider
          min={0}
          max={1000}
          onRangeChange={handleRangeChange}
          range={priceRange}
        />
      )}
      <div className={sidebar.line}></div>
      <div className={sidebar.typeOfProperty}>
        <p>Тип на сместување</p>
        <i
          className="fa-solid fa-chevron-down"
          onClick={handleTypeOfPropertyClick}
        ></i>
      </div>
      {showTypeOfProperty && <PropertyFilter />}
      <div className={sidebar.line}></div>
    </div>
  );
};

export default Sidebar;
