import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Card from "src/components/Card";
import Sidebar from "src/components/Sidebar";
import style from "src/styles/Apartments.module.css";

import { ApartmentAndHotelCard, FilterNames } from "src/types/data";

interface Props {
  arrangements: ApartmentAndHotelCard[];
  locations: FilterNames[];
}

const MacedoniaHotels: NextPage<Props> = ({ arrangements }) => {
  const filterByCountryAndProperty = arrangements.filter(
    (arr) =>
      arr.propertyType?.includes("Hotel") &&
      arr.location.country?.includes("Macedonia")
  );

  return (
    <>
      <div className={style.header}>
        <div className={style.leftLine}></div>
        <h4>Македонија Хотели</h4>
        <div className={style.rightLine}></div>
      </div>

      <div className={style.box}>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
        <div className={style.mobile}>
          <div className={style.searchInput}>
            <input type="text" />
            <img src="/searchIcon2.png" alt="searchIcon2" />
          </div>
          <div className={style.filters}>
            <img src="/filterIcon.png" alt="filterIcon" />
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.container2}>
            {filterByCountryAndProperty.map((card) => {
              return <Card key={card.id} card={card} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MacedoniaHotels;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const location = query.location;

  let link: string;

  if (location) {
    link = `https://icy-glimmer-captain.glitch.me/arrangements?location.city=${location}`;
  } else {
    link = "https://icy-glimmer-captain.glitch.me/arrangements";
  }
  const res = await fetch(link);
  const arrangements: ApartmentAndHotelCard[] = await res.json();

  const resFilter = await fetch(
    "https://icy-glimmer-captain.glitch.me/locations"
  );
  const locations: FilterNames[] = await resFilter.json();

  return {
    props: { arrangements, locations },
  };
};
