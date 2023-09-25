import React from "react";
import Contact from "../../components/Contact";
import groupt from "src/styles/Groupt.module.css";

const GroupTravelPage = () => {
  return (
    <>
      <div className={groupt.header}>
        <div className={groupt.leftLine}></div>
        <h3>Групни патувања</h3>
        <div className={groupt.rightLine}></div>
      </div>
      <div className={groupt.container}>
        <div className={groupt.mice}>
          <div className={groupt.miceDesc}>
            <h3>MICE Tourism</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              qui ipsum debitis. Sequi quaerat accusamus odit autem
              voluptatibus, dignissimos explicabo voluptas aut id aperiam ipsum
              reprehenderit harum cupiditate quibusdam laudantium nam inventore
              consequatur libero a illo natus quasi delectus. Nesciunt,
              cupiditate asperiores. Similique incidunt natus qui labore
              distinctio, aspernatur inventore asperiores corrupti, nihil
              deserunt cumque assumenda blanditiis, quas eligendi suscipit
              debitis. Sequi, maxime commodi voluptas fugiat hic voluptatibus
              est! Modi aut fugiat maiores quis sed molestias consequatur
              laboriosam, qui accusamus aliquam cum nobis dignissimos facere ab
              maxime suscipit inventore quos in ex doloremque laborum culpa
              recusandae similique fuga? Nam, accusantium.
            </p>
          </div>
          <img src="/mice.png" alt="mice" />
        </div>
        <div className={groupt.team}>
          <img src="/tbuilding.png" alt="tbuilding" />
          <div className={groupt.teamDesc}>
            <h3>Team Building</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, dicta, quibusdam ea, iure doloribus rerum ut quis
              assumenda rem velit maxime veniam quisquam repudiandae sequi
              temporibus autem iste commodi eveniet corporis ducimus.
              Perferendis maiores alias non, deleniti atque perspiciatis commodi
              autem eius quod impedit velit culpa minima iusto quasi doloremque
              reprehenderit fuga ullam praesentium consectetur iste inventore
              est quibusdam aperiam! Nam odio eius voluptatibus. Soluta
              repellendus voluptatibus molestias omnis sint quidem excepturi
              possimus laboriosam officiis voluptatum blanditiis officia
              tenetur, libero fugit perferendis amet, minus, labore a similique
              exercitationem magnam! Alias praesentium maxime perferendis
              repellendus ullam cupiditate veniam hic, possimus quo?
            </p>
          </div>
        </div>
        <div className={groupt.tailor}>
          <div className={groupt.tailorDesc}>
            <h3>Tailor Made</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, dicta, quibusdam ea, iure doloribus rerum ut quis
              assumenda rem velit maxime veniam quisquam repudiandae sequi
              temporibus autem iste commodi eveniet corporis ducimus.
              Perferendis maiores alias non, deleniti atque perspiciatis commodi
              autem eius quod impedit velit culpa minima iusto quasi doloremque
              reprehenderit fuga ullam praesentium consectetur iste inventore
              est quibusdam aperiam! Nam odio eius voluptatibus. Soluta
              repellendus voluptatibus molestias omnis sint quidem excepturi
              possimus laboriosam officiis voluptatum blanditiis officia
              tenetur, libero fugit perferendis amet, minus, labore a similique
              exercitationem magnam! Alias praesentium maxime perferendis
              repellendus ullam cupiditate veniam hic, possimus quo?
            </p>
          </div>
          <img src="/tailor.png" alt="tailor" />
        </div>
      </div>
      <Contact />
    </>
  );
};

export default GroupTravelPage;
