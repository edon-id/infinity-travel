import Link from "next/link";
import React from "react";
import style from "src/styles/Card.module.css";
import { ApartmentAndHotelCard } from "src/types/data";

interface Props {
  card: ApartmentAndHotelCard;
}

const Card: React.FC<Props> = ({ card }) => {
  return (
    <div className={style.container}>
      <img
        className={style.image}
        src={
          card.location.destination
            ? `/${
                card.location.destination
              }/${card.location.destination?.toLowerCase()}${card.id}.png`
            : `/${card.location.country}/${card.location.country}${card.id}.png`
        }
        alt={`${card.name}`}
      />
      <div className={style.info}>
        <div className={style.infoOne}>
          <div className={style.infoOneLeft}>
            <h4>{card.name}</h4>
            <p>
              <span>
                <img src="/location.png" alt="location" />
              </span>
              <span>{card.location.city}</span>
            </p>
          </div>
          <div className={style.infoOneRight}>
            {Array(card.rating)
              .fill(null)
              .map((_, index) => {
                return <i key={index} aria-hidden className="fa fa-star"></i>;
              })}
          </div>
        </div>
        <div className={style.infoTwo}>
          <div className={style.infoTwoLeft}>
            <span>{card.description}</span>
            <span>{card.description2}</span>
          </div>
          <div className={style.infoTwoRight}>
            <h4>од</h4>
            <h4>&#8364; {card.prices.map((price) => price.prices)}</h4>
          </div>
        </div>
      </div>
      <div className={style.btnMore}>
        <Link href={`/${card.location.country?.toLowerCase()}/${card.id}`}>
          <button>ПОВЕЌЕ</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
