import React, { useState } from "react";
import "./profile-page.css";
import Layout from "../../components/Layout/Layout";
import { CgProfile } from "react-icons/cg";

const ProfilePage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Layout>
      <h1 className="profile-heading">My Profile</h1>
      <div className="profile-container">
        <CgProfile size={256} color="#fff" />
        <div className="profile-info">
          <h3 className="profile-name">
            <b>Name: </b> Jax
          </h3>
          <h3 className="profile-lastname">
            <b>Lastname: </b> Teller
          </h3>
          <h3 className="profile-email">
            <b>Email: </b> jaxteller@gmail.com
          </h3>
          <input
            className="profile-password"
            type="password"
            name="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <input
            className="profile-password"
            type="password"
            name="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            className="secondary-btn btn-password-save"
            onSubmit={console.log(password, confirmPassword)}
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
