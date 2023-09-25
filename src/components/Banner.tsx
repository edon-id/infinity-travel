import React from "react";
import banner from "src/styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={banner.banner}>
      <div className={banner.bannerFrame}>
        <img src="/bannerframe.png" alt="frame" className={banner.frame} />
        <div className={banner.desc}>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className={banner.input}>
            <input type="text" />
            <img src="/searchIcon.png" alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
