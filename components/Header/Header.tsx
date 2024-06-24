"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { handleLogout } from "../../scripts/logout";
import i18n from "../../app/i18n";
import { IoHomeOutline } from "react-icons/io5";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { TbNewSection } from "react-icons/tb";
import { MdNewspaper } from "react-icons/md";
import { getUserRole } from "../../utils/actions";

const Header: React.FC = () => {
  // TRANSLATE
  const { t, i18n: translation } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = translation.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  // THEME
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

  const [role, setRole] = useState("user");

  useEffect(() => {
    getUserRole().then((res) => {
      setRole(res as string);
    });
  }, []);

  // Hamburger Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <header
        className={
          typeof window !== undefined ||
          window.innerWidth > 1080 ||
          isMobileMenuOpen
            ? "header-visible"
            : "header-hidden"
        }
      >
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
                <Link href="/blog" className="nav-link">
                  <b>{t("b")}</b>
                  {t("log")}
                  <MdNewspaper className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link href="/profile" className="nav-link">
                  <b>{t("p")}</b>
                  {t("rofile")}
                  <IoMdContact className="nav-icon" />
                </Link>
              </li>
              <li className="nav-link">
                <Link href="/checkout" className="nav-link">
                  <b>{t("c")}</b>
                  {t("art")}
                  <BsCart className="nav-icon" />
                </Link>
              </li>
              {role === "admin" && (
                <>
                  <li>
                    <Link href="/admin" className="nav-link">
                      <b>{t("n")}</b>
                      {t("ewProduct")}
                      <TbNewSection className="nav-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/new-post" className="nav-link">
                      <b>{t("n")}</b>
                      {t("ewPost")}
                      <TbNewSection className="nav-icon" />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
        <div className="nav-btn-box">
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
    </>
  );
};

export default Header;
