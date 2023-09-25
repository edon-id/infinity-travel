import { GetServerSideProps, NextPage } from "next";
import React from "react";
import CardComponent from "src/components/CardComponent";
import Filters from "src/components/Filters";
import { ApartmentAndHotelCard, FilterNames } from "src/types/data";

interface Props {
  arrangements: ApartmentAndHotelCard[];
  locations: FilterNames[];
}

const ExoticPage: NextPage<Props> = ({ arrangements, locations }) => {
  return (
    <>
      <Filters
        data={locations}
        filterDestination="Exotic"
        title="Егзотични дестинации"
      />
      <CardComponent data={arrangements} filterDestination="Exotic" />
    </>
  );
};

export default ExoticPage;

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
