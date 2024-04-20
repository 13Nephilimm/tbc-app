import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
          <form className="input-box">
            <input
              className="footer-email"
              type="email"
              name="email"
              placeholder={t("yourEmail")}
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder={t("leaveMessage")}
              className="footer-message"
              required
            ></textarea>
            <button type="submit" className="secondary-btn">
              {t("send")}
            </button>
          </form>
        </div>
        <div className="footer-lower-container">
          <div className="footer-logo-box">
            <h1 className="logo">PurpleStore</h1>
          </div>
          <div className="copyright-box">
            <p>
              &copy; 2024 <br /> by PurpleStore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
