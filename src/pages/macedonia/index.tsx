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

const MacedoniaPage: NextPage<Props> = ({ arrangements, locations }) => {
  return (
    <>
      <Filters
        data={locations}
        filterCountry="Macedonia"
        title="Истражи ја Македонија"
      />
      <CardComponent
        data={arrangements}
        filterCountry="Macedonia"
        filterByProperty="Apartment"
      />
      <div className={filters.header}>
        <div className={filters.leftLine}></div>
        <h4>Излети</h4>
        <div className={filters.rightLine}></div>
      </div>
      <CardComponent
        data={arrangements}
        filterCountry="Macedonia"
        filterByProperty="Hotel"
      />
    </>
  );
};

export default MacedoniaPage;

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
