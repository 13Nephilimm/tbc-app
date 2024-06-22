"use client";

import React, { useRef, FormEvent } from "react";
import Layout from "../../../components/Layout/Layout";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
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
    <Layout>
      <section id="contact" className="contact">
        <h1 className="contact-heading">
          <b>C</b>ontact <b>U</b>s
        </h1>
        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineMail className="contact-option-icon" />
              <h4>{t("email")}</h4>
              <h5>purplestore@gmail.com</h5>
              <a
                href="mailto:jekokharabadze@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("sendMessage")}
              </a>
            </article>
            <article className="contact-option">
              <RiMessengerLine className="contact-option-icon" />
              <h4>{t("messenger")}</h4>
              <h5>Purple Store</h5>
              <a
                href="https://m.me/xarabadzejeko"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("sendMessage")}
              </a>
            </article>
            <article className="contact-option">
              <AiOutlinePhone className="contact-option-icon" />
              <h4>{t("phoneNumber")}</h4>
              <h5>+995 599 1000 69</h5>
              <a href="#contact">{t("callMe")}</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={t("fullName")}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("yourEmail")}
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder={t("leaveMessage")}
              required
            ></textarea>
            <button className="main-btn" type="submit">
              {t("sendMessage")}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
