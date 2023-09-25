import Head from "next/head";
import Filters from "../components/Filters";
import CardComponent from "../components/CardComponent";
import GroupTravel from "../components/GroupTravel";
import GroupTravelBanner from "../components/GroupTravelBanner";
import Testimonials from "../components/Testimonials";
import Moments from "../components/Moments";
import { GetServerSideProps, NextPage } from "next";
import {
  ApartmentAndHotelCard,
  FilterNames,
  TestimonialsType,
} from "src/types/data";

interface Props {
  arrangements: ApartmentAndHotelCard[];
  locations: FilterNames[];
  testimonials: TestimonialsType[];
}

const HomePage: NextPage<Props> = ({
  arrangements,
  locations,
  testimonials,
}) => {
  return (
    <>
      <Head>
        <title>Infinity travel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Filters
          data={locations}
          filterCountry="Greece"
          title="Актуелни понуди"
        />
        <CardComponent data={arrangements} filterCountry="Greece" />
        <GroupTravel />
        <GroupTravelBanner />
        <Testimonials data={testimonials} />
        <Moments />
      </main>
    </>
  );
};

export default HomePage;

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

  const resTestimonials = await fetch(
    "https://icy-glimmer-captain.glitch.me/testimonials"
  );
  const testimonials: TestimonialsType[] = await resTestimonials.json();

  return {
    props: { arrangements, locations, testimonials },
  };
};
