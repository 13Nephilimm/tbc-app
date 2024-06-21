"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./profile.css";
import Layout from "../../../components/Layout/Layout";
import { CgProfile } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { getToken } from "../../../utils/actions";
import { PutBlobResult } from "@vercel/blob";
import Image from "next/image";

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [userInfo, setUserInfo] = useState<any>({
    username: "",
    Email: "",
    image: "",
    password: "",
    confirmPassword: "",
  });

  const imageRef = useRef<HTMLInputElement>(null);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const token = await getToken();
    if (
      imageRef.current &&
      imageRef.current.files &&
      imageRef.current.files[0]
    ) {
      const file = imageRef.current!.files[0];
      if (file.name) {
        const response = await fetch(
          `
            /api/profile-image?filename=${file.name}`,
          {
            method: "POST",
            headers: { Authorization: token?.value as string },
            body: file,
          }
        );

        const newBlob = (await response.json()) as PutBlobResult;

        setUserInfo((prevState: any) => ({
          ...prevState,
          image: newBlob.url,
        }));

        await fetch(`${process.env.BASE_URL}api/update-profile`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token?.value as string,
          },
          body: JSON.stringify(userInfo),
        });
      } else {
        await fetch(`${process.env.BASE_URL}api/update-profile`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token?.value as string,
          },
          body: JSON.stringify(userInfo),
        });
        console.log("No file selected");
      }
    }
  };

  useEffect(() => {
    getToken().then((res: any) => {
      fetch("/api/profile-info", {
        method: "GET",
        headers: {
          Authorization: res?.value as string,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setUserInfo({ ...res.user });
        });
    });
  }, []);

  return (
    <Layout>
      <h1 className="profile-heading">{t("myProfile")}</h1>
      <div className="profile-container">
        {userInfo.image ? (
          <Image
            src={userInfo.image}
            alt="profile-image"
            width={200}
            height={200}
          />
        ) : (
          <CgProfile size={256} color="#fff" />
        )}
        <form className="profile-info">
          <label className="profile-name">Username</label>
          <input
            type="text"
            value={userInfo.username}
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
            required
          />
          <label className="profile-lastname">Email</label>
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            required
          />
          <label>Upload Image</label>
          <input type="file" ref={imageRef} required />
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
              className="main-btn btn-password-save"
              onClick={handleSubmit}
            >
              {t("save")}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
