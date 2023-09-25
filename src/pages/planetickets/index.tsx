import Link from "next/link";
import React from "react";
import style from "src/styles/PlaneTickets.module.css";

const PlaneTicketsPage = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.leftLine}></div>
        <h3>Авионски карти</h3>
        <div className={style.rightLine}></div>
      </div>
      <div className={style.grid}>
        <div className={style.tittle}>
          <h5>Пребарувај</h5>
        </div>
        <div className={style.radioInputs}>
          <div className={style.radio1}>
            <input type="radio" name="povratenBilet" />
            <label>Повратен билет</label>
          </div>
          <div className={style.radio2}>
            <input type="radio" name="edenPravec" />
            <label>Еден правец</label>
          </div>
        </div>
        <div className={style.inputs}>
          <div className={style.upperInput}>
            <label htmlFor="from">Од</label>
            <input type="text" />
          </div>
          <div className={style.upperInput}>
            <label htmlFor="to">До</label>
            <input type="text" />
          </div>
          <div className={style.upperInput}>
            <label htmlFor="">Датум на поаѓање</label>
            <input type="text" />
          </div>
          <div className={style.upperInput}>
            <label htmlFor="">Датум на враќање</label>
            <input type="text" />
          </div>
          <div className={style.downInput}>
            <label htmlFor="mySelect">Возрасни</label>
            <select name="возрасни" className={style.customSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className={style.downInput}>
            <label htmlFor="mySelect">Деца</label>
            <select name="деца" className={style.customSelect}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className={style.downInput}>
            <label htmlFor="mySelect">Бебиња</label>
            <select name="бебиња" className={style.customSelect}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className={style.downInput}>
            <label htmlFor="mySelect">Класа</label>
            <select name="класа" className={style.customSelect}>
              <option value="економска">Економска</option>
              <option value="бизнис">Бизнис</option>
            </select>
          </div>
        </div>
        <div className={style.btnSearch}>
          <Link href={"/planetickets/search-plane"}>
            <button type="submit" className={style.btn}>
              ПОБАРАЈ ПОНУДА
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlaneTicketsPage;
