import React from "react";
import grouptravelbanner from "src/styles/GroupTravelBanner.module.css";

const GroupTravelBanner = () => {
  return (
    <div className={grouptravelbanner.container}>
      <div className={grouptravelbanner.travelbanner}>
        <img
          className={grouptravelbanner.ssLeft}
          src="/sideStampLeft.png"
          alt="sideStampLeft"
        />
        <img
          className={grouptravelbanner.ssRight}
          src="/sideStampRight.png"
          alt="sideStampRight"
        />
        <div className={grouptravelbanner.grid}>
          <div className={grouptravelbanner.grid1}>
            <img src="/gtIcon1.png" alt="gtIcon1" />
            <p>
              1000+ патувања <br /> Започнете ја вашата авантура
            </p>
          </div>
          <div className={grouptravelbanner.grid2}>
            <img src="/gtIcon2.png" alt="gtIcon2" />
            <p>
              15000+ патници годишно <br /> Бидете дел од нашите задоволни
              патници
            </p>
          </div>
          <div className={grouptravelbanner.grid3}>
            <img src="/gtIcon3.png" alt="gtIcon3" />
            <p>Одберете ја вашата дестинација</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupTravelBanner;
