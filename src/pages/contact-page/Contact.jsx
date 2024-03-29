import React, { useRef } from "react";
import Layout from "../../components/Layout/Layout";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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

    e.target.reset();
  };

  return (
    <Layout>
      <section id="contact" className="contact">
        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineMail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>purplestore@gmail.com</h5>
              <a href="mailto:jekokharabadze@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact-option">
              <RiMessengerLine className="contact-option-icon" />
              <h4>Messenger</h4>
              <h5>Purple Store</h5>
              <a href="https://m.me/xarabadzejeko" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact-option">
              <AiOutlinePhone className="contact-option-icon" />
              <h4>Phone Number</h4>
              <h5>+995 599 1000 69</h5>
              <a href="#contact">Call Me</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button className="secondary-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
