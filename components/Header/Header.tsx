"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { handleLogout } from "../../scripts/logout";
import i18n from "../../app/i18n";
import Cart from "../Cart/Cart";
import { IoHomeOutline } from "react-icons/io5";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { getCartTotalCookie } from "../../utils/actions";

const Header: React.FC = () => {
  // TRANSLATE
  const { t, i18n: translation } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = translation.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  //THEME
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    const newTheme: string = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header>
      <div className="upper-nav">
        <div className="logo-container">
          <Link href="/" className="logo">
            Gamezy
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/" className="nav-link">
                <b>{t("h")}</b>
                {t("ome")}
                <IoHomeOutline className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link href="/games" className="nav-link">
                <b>{t("g")}</b>
                {t("ames")}
                <TbDeviceGamepad2 className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                <b>{t("c")}</b>
                {t("ontact")}
                <MdOutlineEmail className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link href="/profile" className="nav-link">
                <b>{t("p")}</b>
                {t("rofile")}
                <IoMdContact className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link href="/admin" className="nav-link">
                <b>{t("a")}</b>
                {t("dmin")}
                <IoIosLock className="nav-icon" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-btn-box">
        <Cart />
        <button className="nav-btn" onClick={toggleLanguage}>
          {translation.language === "en" ? "GEO" : "ENG"}
        </button>
        <div className="toggle-mode">
          <p>Light Mode</p>
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "light"}
            />
            <span className="slider"></span>
          </label>
          <p>Dark Mode</p>
        </div>
        <button
          className="nav-btn"
          onClick={() => {
            handleLogout().then(() => window.location.reload());
          }}
        >
          {t("logOut")}
        </button>
      </div>
    </header>
    // <header>
    //   <nav>
    //     <div className="logo-box">
    //       <h1 className="logo">PurpleStore</h1>
    //     </div>
    //     <div className="links-box">
    //       <Link href="/" className="link">
    //         {t("home")}
    //       </Link>
    //       <Link href="/contact" className="link">
    //         {t("contact")}
    //       </Link>
    //       <Link href="/blog" className="link">
    //         {t("blog")}
    //       </Link>
    //       <Link href="/profile" className="link">
    //         {t("profile")}
    //       </Link>
    //       <button onClick={toggleLanguage} className="link translate-btn">
    //         {translation.language === "en" ? "Geo" : "Eng"}
    //       </button>
    //     </div>
    //     <button
    //       className="theme-toggle-btn secondary-btn"
    //       onClick={toggleTheme}
    //     >
    //       {theme === "light" ? "Dark" : "Light"} Mode
    //     </button>
    //     <button
    //       className="secondary-btn"
    //       onClick={() => {
    //         handleLogout().then(() => window.location.reload());
    //       }}
    //     >
    //       {t("logOut")}
    //     </button>
    //   </nav>
    // </header>
  );
};

export default Header;
