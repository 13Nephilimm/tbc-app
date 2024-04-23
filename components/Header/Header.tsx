"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { handleLogout } from "../../scripts/logout";
import i18n from "../../app/i18n";

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

  return (
    <header>
      <nav>
        <div className="logo-box">
          <h1 className="logo">PurpleStore</h1>
        </div>
        <div className="links-box">
          <Link href="/" className="link">
            {t("home")}
          </Link>
          <Link href="/contact" className="link">
            {t("contact")}
          </Link>
          <Link href="/blog" className="link">
            {t("blog")}
          </Link>
          <Link href="/profile" className="link">
            {t("profile")}
          </Link>
          <button onClick={toggleLanguage} className="link translate-btn">
            {translation.language === "en" ? "Geo" : "Eng"}
          </button>
        </div>
        <button
          className="theme-toggle-btn secondary-btn"
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <button
          className="secondary-btn"
          onClick={() => {
            handleLogout().then(() => window.location.reload());
          }}
        >
          {t("logOut")}
        </button>
      </nav>
    </header>
  );
};

export default Header;
