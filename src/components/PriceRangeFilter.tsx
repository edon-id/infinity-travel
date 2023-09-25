import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "src/styles/Sidebar.module.css";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onRangeChange: (range: number[]) => void;
  range: number[];
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  onRangeChange,
  range,
}) => {
  const handleRangeChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange)) {
      onRangeChange(newRange);
    }
  };

  return (
    <div className={style.priceRangeContainer}>
      <div className={style.prices}>
        <p>{range[0]}</p>
        <p>{range[1]}</p>
      </div>
      <div className={style.slider}>
        <Slider
          range
          min={min}
          max={max}
          value={range}
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
