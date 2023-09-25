import Link from "next/link";
import React, { useState } from "react";
import navbar from "src/styles/Navbar.module.css";

const Navbar = () => {
  const [showSmallMenu, setShowSmallMenu] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

  const openMenu = () => {
    setShowSmallMenu(!showSmallMenu);
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setShowSmallMenu(false);
    setMobileMenuVisible(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <div className={navbar.navbar} style={{ cursor: "pointer" }}>
        <Link href={"/"}>
          <img src="/logo.png" alt="logo" />
        </Link>
        <ul>
          <Link href={"/"}>
            <li>Дома</li>
          </Link>
          <li
            onClick={openMenu}
            style={{ display: "flex", alignItems: "center" }}
          >
            <span>Дестинации</span>
            <i
              style={{ marginLeft: "10px" }}
              aria-hidden
              className={
                menuVisible
                  ? "fa-solid fa-caret-down"
                  : "fa-solid fa-caret-right"
              }
            ></i>
          </li>

          <Link href={"/grouptravel"}>
            <li>Групни патувања</li>
          </Link>
          <Link href={"/planetickets"}>
            <li>Авио карти</li>
          </Link>
          <Link href={"/macedonia"}>
            <li>Истражи ја Македонија</li>
          </Link>
          <Link href={"/aboutus"}>
            <li>За нас</li>
          </Link>
          <li className={navbar.phone2}>
            <img className={navbar.phone} src="/phone.png" alt="phone" />
            <Link href={"/aboutus"}>
              <span>02/3100-360</span>
            </Link>
          </li>
        </ul>
        <div className={navbar.hamburgerMenu} onClick={toggleMobileMenu}>
          <i className="fa-solid fa-bars fa-2x"></i>
        </div>
        {mobileMenuVisible && (
          <div
            style={
              mobileMenuVisible
                ? {
                    display: "block",
                    position: "absolute",
                    top: "75px",
                    left: "0",
                    padding: "10px",
                    backgroundColor: "white",
                    zIndex: "1000",
                    listStyle: "none",
                  }
                : { display: "none" }
            }
          >
            <img
              src="/x.png"
              alt="x"
              onClick={toggleMobileMenu}
              style={{ cursor: "pointer" }}
            />
            <Link href={"/"}>
              <li>Дома</li>
            </Link>
            <li
              onClick={openMenu}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Дестинации</span>
              <i
                style={{ marginLeft: "10px" }}
                aria-hidden
                className={
                  menuVisible
                    ? "fa-solid fa-caret-right"
                    : "fa-solid fa-caret-down"
                }
              ></i>
            </li>
            <Link href={"/grouptravel"}>
              <li>Групни патувања</li>
            </Link>
            <Link href={"/planetickets"}>
              <li>Авио карти</li>
            </Link>
            <Link href={"/macedonia"}>
              <li>Истражи ја Македонија</li>
            </Link>
            <Link href={"/aboutus"}>
              <li>За нас</li>
            </Link>
            <li className={navbar.phone2}>
              <img className={navbar.phone} src="/phone.png" alt="phone" />
              <Link href={"/aboutus"}>
                <span>02/3100-360</span>
              </Link>
            </li>
          </div>
        )}
      </div>
      {showSmallMenu && (
        <div className={navbar.smallMenu} onClick={closeMenu}>
          <ul>
            <Link href={"/greece"}>
              <li>Грција</li>
            </Link>
            <Link href={"/turkey"}>
              <li>Турција</li>
            </Link>
            <Link href={"/albania"}>
              <li>Албанија</li>
            </Link>
            <Link href={"/croatia"}>
              <li>Хрватска</li>
            </Link>

            <Link href={"/montenegro"}>
              <li>Црна Гора</li>
            </Link>
            <Link href={"/italy"}>
              <li>Италија</li>
            </Link>
            <Link href={"/macedonia"}>
              <li>Македонија</li>
            </Link>
            <Link href={"/exotic"}>
              <li>
                Егзотични <br /> патувања
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
