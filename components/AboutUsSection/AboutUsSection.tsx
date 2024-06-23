import React from "react";
import "./AboutUsSection.css";
import Image from "next/image";
import phx from "../../public/phx-2.png";
import { useTranslation } from "react-i18next";

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="about-us-section">
      <div className="about-us-img-box">
        <Image
          src={phx}
          alt="about-us-image"
          className="about-us-image"
          width={622}
          height={350}
        />
      </div>
      <div className="about-us-text-box">
        <h1 className="about-us-heading">
          <b>{t("about")}</b> {t("us")}
        </h1>
        <p className="about-us-text">{t("aboutText1")}</p>
        <p className="about-us-text">{t("aboutText2")}</p>
        <p className="about-us-text">{t("aboutText3")}</p>
      </div>
    </section>
  );
};

export default AboutUsSection;
