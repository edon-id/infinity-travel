import React from "react";
import contact from "src/styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={contact.header}>
        <div className={contact.leftLine}></div>
        <h3>Контакт</h3>
        <div className={contact.rightLine}></div>
      </div>
      <div className={contact.container}>
        <div className={contact.formDiv}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("form submitted");
            }}
          >
            <div className={contact.inputs}>
              <div className={contact.leftInput}>
                <label htmlFor="name">Име</label>
                <input type="text" />
              </div>
              <div className={contact.rightInput}>
                <label htmlFor="email">Емаил</label>
                <input type="text" />
              </div>
            </div>
            <div className={contact.textArea}>
              <label htmlFor="textarea">Порака</label>
              <textarea name="msg" id="" rows={10} cols={100} />
            </div>
            <div className={contact.btnSend}>
              <button type="submit" className={contact.btn}>
                ПРАТИ
              </button>
            </div>
          </form>
        </div>
        <div className={contact.contactUsDiv}>
          <h3>Контакт</h3>
          <div className={contact.contactDesc}>
            <p>
              Адреса: Бул. Даме Груев бр. 14 лок. 24 <br /> 1000 Скопје,
              Македонија
            </p>
            <p>Е-маил: contact@infinitytravel.mk</p>
            <p>Телефон: 023100360 / 072254160</p>
          </div>
          <div className={contact.socials}>
            <a
              href="https://www.instagram.com/infinitytravel.mk/?hl=en"
              target="_blank"
            >
              <img src="/instagram.png" alt="instagram" />
            </a>
            <img src="/fb.png" alt="facebook" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
