"use client";

import React, { useState } from "react";
import "./profile.css";
import Layout from "../../../components/Layout/Layout";
import { CgProfile } from "react-icons/cg";
import { useTranslation } from "react-i18next";

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(password, confirmPassword);
    // password change logic here
  };

  return (
    <Layout>
      <h1 className="profile-heading">{t("myProfile")}</h1>
      <div className="profile-container">
        <CgProfile size={256} color="#fff" />
        <div className="profile-info">
          <h3 className="profile-name">
            <b>{t("name")}: </b> Jax
          </h3>
          <h3 className="profile-lastname">
            <b>{t("lastName")}: </b> Teller
          </h3>
          <h3 className="profile-email">
            <b>{t("email")}: </b> jaxteller@gmail.com
          </h3>
          <div className="input-box">
            <input
              className="profile-password"
              type="password"
              name="password"
              placeholder={t("newPassword")}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input
              className="profile-password"
              type="password"
              name="password"
              placeholder={t("confirmNewPassword")}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <button
              type="button"
              className="secondary-btn btn-password-save"
              onClick={handleSubmit}
            >
              {t("save")}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
