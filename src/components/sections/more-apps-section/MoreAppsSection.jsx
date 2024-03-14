import React from "react";
import "./more-apps.css";
import starImg from "../../../assets/star.png";
import mobileImg from "../../../assets/mobiles.png";
import googlePlay from "../../../assets/google-play.png";
import appStore from "../../../assets/app-store.png";

const MoreAppsSection = () => {
  return (
    <section className="more-apps-section">
      <img src={starImg} alt="star" className="star star-10" />
      <img src={starImg} alt="star" className="star star-11" />
      <img src={starImg} alt="star" className="star star-12" />
      <div className="gradient-circle"></div>
      <div className="container">
        <div className="more-apps-container">
          <div className="more-apps-text-box">
            <h2 className="more-apps-heading">
              Easy Way To Manage <br></br> Your Finances
            </h2>
            <p className="more-apps-description">
              Easy to use mobile app that support on android and ios.
            </p>
            <div className="more-apps-links">
              <a href="#">
                <img src={googlePlay} alt="google play" />
              </a>
              <a href="#">
                <img src={appStore} alt="app store" />
              </a>
            </div>
          </div>
          <div className="more-apps-img-box">
            <img src={mobileImg} alt="cards" />
          </div>
        </div>
      </div>
      <img src={starImg} alt="star" className="star star-13" />
      <img src={starImg} alt="star" className="star star-14" />
      <img src={starImg} alt="star" className="star star-15" />
    </section>
  );
};

export default MoreAppsSection;
