import React from "react";
import style from "src/styles/PlaneTickets.module.css";

type Props = {};

const SearchPlanePage = (props: Props) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.leftLine}></div>
        <h3>Авионски карти</h3>
        <div className={style.rightLine}></div>
      </div>
      <div className={style.grid2}>
        <div className={style.tittle2}>
          <h5>Податоци за контакт:</h5>
        </div>
        <div className={style.container}>
          <div className={style.inputs}>
            <div className={style.upperInput2}>
              <label htmlFor="name">Име</label>
              <input type="text" />
            </div>
            <div className={style.upperInput2}>
              <label htmlFor="surname">Презиме</label>
              <input type="text" />
            </div>

            <div className={style.downInput2}>
              <label htmlFor="email">Емаил</label>
              <input type="email" />
            </div>
            <div className={style.downInput2}>
              <label htmlFor="surname">Телефон</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={style.btnSearch2}>
          <button type="submit" className={style.btn2}>
            ПОБАРАЈ ПОНУДА
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchPlanePage;
