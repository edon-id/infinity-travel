import Link from "next/link";
import React from "react";
import footer from "src/styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={footer.container}>
      <div className={footer.destinations}>
        <h3>Дестинации</h3>
        <ul>
          <Link href={"/grcija"}>
            <li>Грција</li>
          </Link>
          <Link href={"/turcija"}>
            <li>Турција</li>
          </Link>
          <Link href={"/crnagora"}>
            <li>Црна Гора</li>
          </Link>
          <Link href={"/hrvatska"}>
            <li>Хрватска</li>
          </Link>
          <Link href={"/egipet"}>
            <li>Египет</li>
          </Link>
          <Link href={"/italija"}>
            <li>Италија</li>
          </Link>
          <Link href={"/dalecnipatuvanja"}>
            <li>Далечни патувања</li>
          </Link>
        </ul>
      </div>
      <div className={footer.informations}>
        <h3>Информации</h3>
        <ul>
          <Link href={"/planetickets"}>
            <li>Авио карти</li>
          </Link>
          <Link href={"/grouptravel"}>
            <li>MICE Туризам</li>
          </Link>
          <Link href={"/grouptravel"}>
            <li>Team building</li>
          </Link>
          <Link href={"/grouptravel"}>
            <li>Tailor made</li>
          </Link>
          <li>Gift card</li>
        </ul>
      </div>
      <div className={footer.other}>
        <h3>Останато</h3>
        <ul>
          <li>
            <Link href={"/aboutus"}>За нас</Link>
          </li>

          <li>
            <Link href={"/conditions"}>
              Општи услови за <br /> патување
            </Link>
          </li>
          <li>
            <Link href={"/insurance"}>
              Патничко <br /> осигурување
            </Link>
          </li>
        </ul>
      </div>
      <div className={footer.contact}>
        <h3>Контакт</h3>
        <div className={footer.contactDesc}>
          <p>
            Адреса: Бул. Даме Груев бр. 14 лок. 24 <br /> 1000 Скопје,
            Македонија
          </p>
          <p>Е-маил: contact@infinitytravel.mk</p>
          <p>Телефон: 023100360 / 072254160</p>
        </div>
        <div className={footer.socials}>
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
  );
};

export default Footer;
