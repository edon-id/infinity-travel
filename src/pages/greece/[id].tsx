import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import style from "src/styles/CardDetail.module.css";
import { ApartmentAndHotelCard } from "src/types/data";

interface Props {
  arrangement: ApartmentAndHotelCard;
}

const CardDetail: NextPage<Props> = ({ arrangement }) => {
  const numbers = Array.from({ length: 8 }, (_, index) => index + 1);

  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const nextCards = () => {
    if (currentPage < Math.ceil(numbers.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevCards = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * cardsPerPage;
  const visibleCards = numbers.slice(startIndex, startIndex + cardsPerPage);

  const isLastPage = currentPage === Math.ceil(numbers.length / cardsPerPage);

  return (
    <>
      <div className={style.header}>
        <div className={style.leftLine}></div>
        <h3>{arrangement.name}</h3>
        <div className={style.rightLine}></div>
      </div>
      <div className={style.container}>
        <div className={style.listAndLocation}>
          <ul>
            <li>
              <a href="#opis">Опис</a>
            </li>
            <li>
              <a href="#galerija">Галерија</a>
            </li>
            <li>
              <a href="#ceni">Цени</a>
            </li>
            <li>
              <a href="#prevoz">Превоз</a>
            </li>
          </ul>
          <div className={style.location}>
            <img src="/location.png" alt="location" style={{ width: "20px" }} />
            <h4>
              {arrangement.location.country}, {arrangement.location.city}
            </h4>
          </div>
        </div>
        <div className={style.hotelName} id="opis">
          <h3>{arrangement.name}</h3>
        </div>
        <div className={style.description}>
          <p>
            {arrangement.detailsDesc3}
            <br />
            <br />
            Цените во табелата се однесуваат за наем на студио/апартман за 7
            ноќевања, без превоз или со превоз според изборот во пребарувачот.
            Цените се изразени во EUR за уплата во денарска противвредност
            (1EUR=62MKD).
            <br />
            * За резервација со "EB" попуст, 50% од вредноста на аранжманот се
            уплатува во моментот на правење на резервацијата.
            <br />* Можност за користење на неискористените ваучери од Лето
            2020.
          </p>
        </div>
      </div>
      <div className={style.containerTwo}>
        <div className={style.leftChevron}>
          <img src={"/leftChevron.png"} alt="leftChevron" onClick={prevCards} />
        </div>
        <div className={style.imageCarousel}>
          {visibleCards.map((number) => {
            return (
              <div key={number} className={style.imgDiv} id="galerija">
                <img
                  className={style.image}
                  src={`/CardDetailsImg/carddetails${number}.png`}
                  alt={`Card ${number}`}
                />
              </div>
            );
          })}
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
      <div className={style.containerThree}>
        <div className={style.tableDiv} id="ceni">
          TABLE TO BE DONE
        </div>
        <div className={style.description2} id="prevoz">
          <h3>Превоз</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            necessitatibus voluptate ex ullam consectetur architecto labore
            fuga. Blanditiis, asperiores corrupti. Numquam tempora mollitia
            dolor quisquam eius culpa nisi, doloremque quod accusamus, odio
            adipisci expedita odit voluptate necessitatibus dicta impedit libero
            molestias quam reprehenderit ad. Assumenda labore distinctio sequi
            et autem soluta nesciunt, perferendis eaque. Autem ad nemo harum
            possimus, dignissimos accusamus incidunt sed, consectetur nobis
            aliquid repellat! Omnis quibusdam laudantium vel sed in quisquam
            doloremque aut, cupiditate laborum voluptatibus dolorem temporibus
            atque quia repellendus illo animi architecto qui hic? Odit,
            similique enim dolor esse architecto sapiente corporis aspernatur.
            Nemo odio ducimus itaque! Recusandae vel optio voluptates? Suscipit
            cum atque perferendis laboriosam provident et ea nihil, omnis dolore
            culpa ipsam facere quia doloribus expedita, temporibus vel, aliquid
            impedit eveniet libero maiores! Laborum similique maxime
            voluptatibus odio recusandae ipsam. Ad laboriosam quia deserunt
            culpa repellendus tempora, iusto distinctio quo officiis minus earum
            quae mollitia veniam nemo aliquam ratione magnam, expedita esse
            eligendi!
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://icy-glimmer-captain.glitch.me/arrangements");
  const arrangement: ApartmentAndHotelCard[] = await res.json();

  const paths = arrangement.map((arr) => {
    return {
      params: {
        id: arr.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  console.log(id);

  if (id) {
    const res = await fetch(
      `https://icy-glimmer-captain.glitch.me/arrangements/${id}`
    );
    const arrangement: ApartmentAndHotelCard = await res.json();

    return {
      props: {
        arrangement,
      },
    };
  }

  return {
    notFound: true,
  };
};
