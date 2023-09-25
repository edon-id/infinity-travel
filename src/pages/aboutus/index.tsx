import React from "react";
import aboutus from "src/styles/Aboutus.module.css";
import Contact from "../../components/Contact";

const AboutUsPage = () => {
  return (
    <>
      <div className={aboutus.header}>
        <div className={aboutus.leftLine}></div>
        <h3>За нас</h3>
        <div className={aboutus.rightLine}></div>
      </div>
      <div className={aboutus.container}>
        <img className={aboutus.image} src="/aboutus.png" alt="aboutus" />
        <img
          className={aboutus.banner}
          src="/aboutusbanner.png"
          alt="aboutusbanner"
        />
        <div className={aboutus.desc}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            perspiciatis? Numquam molestias expedita dolorem sequi. Dignissimos
            quae autem ea in ipsa enim hic fugiat et eveniet iure, alias
            adipisci placeat nam porro eos ratione neque labore temporibus
            veniam harum modi consectetur quidem. Provident dolore earum
            blanditiis quasi beatae, veritatis quas. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ad, eum id minima fuga iusto inventore
            beatae fugiat corporis in qui. Praesentium natus obcaecati placeat
            at animi laudantium distinctio ipsam quas assumenda, facilis facere
            amet dolorem provident quam neque aspernatur temporibus nostrum
            minus iure tempora laboriosam nam officiis eaque sapiente? Est.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default AboutUsPage;
