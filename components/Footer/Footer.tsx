"use client";

import "./Footer.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

const Footer = () => {
  const { t } = useTranslation();

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_hhhcitj",
          "template_mwurkt4",
          form.current,
          "0NA3KLjIitEBGl6tV"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      form.current.reset();
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-upper-container">
          <div className="privacy-box">
            <a href="#" className="privacy-heading">
              {t("privacyPolicy")}
            </a>
          </div>
          <div className="terms-box">
            <a href="#" className="terms-heading">
              {t("termsAndConditions")}
            </a>
          </div>
          <form className="input-box" ref={form} onSubmit={sendEmail}>
            <input
              className="footer-email"
              type="email"
              name="email"
              placeholder={t("yourEmail")}
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder={t("leaveMessage")}
              className="footer-message"
              required
            ></textarea>
            <button type="submit" className="main-btn">
              {t("send")}
            </button>
          </form>
        </div>
        <div className="footer-lower-container">
          <div className="footer-logo-box">
            <h1 className="logo">Gamezy</h1>
          </div>
          <div className="copyright-box">
            <p>
              &copy; 2024 <br /> by Gamezy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
