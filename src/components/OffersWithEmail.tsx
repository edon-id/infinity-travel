import React, { useState } from "react";
import offerswithemail from "src/styles/OffersWithEmail.module.css";
import OffersForm from "./OffersForm";

const OffersWithEmail = () => {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <>
      <div className={offerswithemail.offersWithEmail}>
        <div className={offerswithemail.container}>
          <div className={offerswithemail.margin}>
            <img src="/mail.png" alt="mail" />
            <p>
              Пријави се и добивај актуелни <br /> понуди на твојот маил
            </p>
            <img
              src={showComponent ? `/chevronUp.png` : `/chevronDown.png`}
              alt="chevronDown"
              onClick={handleClick}
            />
          </div>
        </div>
        {showComponent && <OffersForm />}
      </div>
    </>
  );
};

export default OffersWithEmail;
