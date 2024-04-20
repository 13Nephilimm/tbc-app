"use client";

import Link from "next/link";
import "./Header.css";
import { handleLogout } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "@/app/i18n";

const Header = () => {
  const router = useRouter();

  const logoutBtn = async () => {
    await handleLogout();
    router.push("/login");
  };

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

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
        <button className="secondary-btn" onClick={logoutBtn}>
          {t("logOut")}
        </button>
      </nav>
    </header>
  );
};

export default Header;
