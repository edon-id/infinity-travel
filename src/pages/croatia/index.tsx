import { GetServerSideProps, NextPage } from "next";
import React from "react";
import CardComponent from "src/components/CardComponent";
import Filters from "src/components/Filters";
import { ApartmentAndHotelCard, FilterNames } from "src/types/data";
import filters from "src/styles/Filters.module.css";

interface Props {
  arrangements: ApartmentAndHotelCard[];
  locations: FilterNames[];
}

const CroatiaPage: NextPage<Props> = ({ arrangements, locations }) => {
  return (
    <>
      <Filters
        data={locations}
        filterCountry="Croatia"
        title="Хрватска Апартмани"
      />
      <CardComponent
        data={arrangements}
        filterCountry="Croatia"
        filterByProperty="Apartment"
      />
      <div className={filters.header}>
        <div className={filters.leftLine}></div>
        <h4>Хрватска Хотели</h4>
        <div className={filters.rightLine}></div>
      </div>
      <CardComponent
        data={arrangements}
        filterCountry="Croatia"
        filterByProperty="Hotel"
      />
    </>
  );
};

export default CroatiaPage;

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
