import Link from "next/link";
import React, { useState } from "react";
import style from "src/styles/CardComponent.module.css";
import { ApartmentAndHotelCard } from "src/types/data";
import Card from "./Card";

interface Props {
  data: ApartmentAndHotelCard[];
  filterCountry?: string;
  filterDestination?: string;
  filterByProperty?: string;
}
const CardComponent: React.FC<Props> = ({
  data,
  filterCountry,
  filterDestination,
  filterByProperty,
}) => {
  let filteredData = data;

  if (filterCountry && filterByProperty) {
    filteredData = data.filter(
      (card) =>
        card.location.country === filterCountry &&
        card.propertyType === filterByProperty
    );
  } else if (filterDestination) {
    filteredData = data.filter(
      (card) => card.location.destination === filterDestination
    );
  } else {
    filteredData = data.filter(
      (card) => card.location.country === filterCountry
    );
  }

  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const nextCards = () => {
    if (currentPage < Math.ceil(filteredData.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevCards = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * cardsPerPage;
  const visibleCards = filteredData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const isLastPage =
    currentPage === Math.ceil(filteredData.length / cardsPerPage);

  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.leftChevron} onClick={prevCards}>
          <img src={"/leftChevron.png"} alt="leftChevron" />
        </div>
        <div className={style.grid}>
          <div className={style.container2}>
            {visibleCards.map((card) => {
              return <Card key={card.id} card={card} />;
            })}
          </div>
        </div>
        <div className={style.rightChevron}>
          <img
            src="/rightChevron.png"
            alt="rightChevron"
            onClick={isLastPage ? undefined : nextCards}
            className={isLastPage ? style.disabledButton : style.enabledButton}
          />
        </div>
      </div>

      <div className={style.seeMore}>
        <Link
          href={
            filterCountry && filterByProperty
              ? `/${filterCountry.toLowerCase()}/${filterByProperty.toLowerCase()}`
              : `/${filterCountry?.toLowerCase()}`
          }
        >
          See more &gt;&gt;
        </Link>
      </div>
    </>
  );
};

export default CardComponent;
