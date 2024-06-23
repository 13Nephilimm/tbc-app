import React from "react";
import "./WWOSection.css";
import Image from "next/image";
import phx from "../../public/phx.png";
import { useTranslation } from "react-i18next";

const WWOSection = () => {
  const { t } = useTranslation();

  return (
    <section className="wwo-section">
      <div className="wwo-text-container">
        <h1 className="wwo-heading">
          <b>{t("what")}</b> {t("weOffer")}
        </h1>
        <div className="wwo-cards">
          <div className="wwo-card">
            <span></span>
            <div className="wwo-card-content">
              <h2>{t("gameAccess")}</h2>
            </div>
          </div>
          <div className="wwo-card">
            <span></span>
            <div className="wwo-card-content">
              <h2>{t("rewards")}</h2>
            </div>
          </div>
          <div className="wwo-card">
            <span></span>
            <div className="wwo-card-content">
              <h2>{t("prices")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="wwo-img-container">
        <Image
          className="wwo-image"
          alt="wwo-image"
          width={462}
          height={840}
          src={phx}
        />
      </div>
    </section>
  );
};

export default WWOSection;
