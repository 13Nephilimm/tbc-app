"use client";

import Link from "next/link";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "@/app/i18n";
import { useEffect, useState } from "react";
import { handleLogout } from "@/scripts/logout";

const Header = () => {
  // TRANSLATE
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  // THEME
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

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
            {i18n.language === "en" ? "Geo" : "Eng"}
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
