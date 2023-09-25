import React from "react";
import offersform from "src/styles/OffersForm.module.css";

const OffersForm = () => {
  return (
    <>
      <form
        className={offersform.formDiv}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
        }}
      >
        <div className={offersform.labelAndInput}>
          <div className={offersform.name}>
            <label htmlFor="name">Име</label>
            <input className={offersform.formInput} type="text" />
          </div>
          <div className={offersform.email}>
            <label htmlFor="email">Емаил</label>
            <input className={offersform.formInput} type="email" />
          </div>
          <div className={offersform.btnDiv}>
            <label htmlFor="btn">Пријави ме</label>
            <button className={offersform.btnSubmit} type="submit">
              Пријави ме
            </button>
          </div>
        </div>
      </form>
      <p className={offersform.desc}>
        Со кликнување на Пријави ме се зачленуваш за добивање на маилови за
        нашите актуелни понуди и промоции
      </p>
    </>
  );
};

export default OffersForm;
