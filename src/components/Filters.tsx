import { useRouter } from "next/router";
import React from "react";
import style from "src/styles/Filters.module.css";
import { FilterNames } from "src/types/data";

interface Props {
  data: FilterNames[];
  filterCountry?: string;
  filterDestination?: string;
  title: string;
}

const Filters: React.FC<Props> = ({
  data,
  filterCountry,
  filterDestination,
  title,
}) => {
  const router = useRouter();

  let filteredData = data;

  if (filterCountry) {
    filteredData = data.filter((card) => card.country === filterCountry);
  }

  if (filterDestination) {
    filteredData = data.filter(
      (card) => card.destination === filterDestination
    );
  }

  return (
    <>
      <div className={style.header}>
        <div className={style.leftLine}></div>
        <h4>{title}</h4>
        <div className={style.rightLine}></div>
      </div>
      <div className={style.filters}>
        {filteredData.map((location) => {
          return (
            <div
              key={location.slug}
              className={style.btn}
              onClick={() => {
                router.push({
                  href: "/",
                  query: {
                    ...router.query,
                    location: location.slug,
                  },
                });
              }}
            >
              <span
                className={
                  router.query.location === location.slug ? style.activeBtn : ""
                }
              >
                {location.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
