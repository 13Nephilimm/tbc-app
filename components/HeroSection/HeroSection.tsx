import React from "react";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <h1 className="hero-heading">
        {t("your")} <span>{t("gateway")}</span> <br /> <span>{t("toThe")}</span>{" "}
        <br /> <span>{t("gaming")}</span> {t("paradise")}
      </h1>
      <a href="#" className="main-btn hero-link">
        {t("seeMore")} &darr;
      </a>
    </section>
  );
};

export default HeroSection;
