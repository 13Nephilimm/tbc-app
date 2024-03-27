import React from "react";
import "./profile-page.css";
import Layout from "../../components/Layout/Layout";
import { CgProfile } from "react-icons/cg";

const ProfilePage = () => {
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
            required
          />
          <input
            className="profile-password"
            type="password"
            name="password"
            placeholder="Confirm New Password"
            required
          />
          <button type="submit" className="secondary-btn btn-password-save">
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
