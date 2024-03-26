import React from "react";
import "./profile-page.css";
import Layout from "../../components/Layout/Layout";
import { CgProfile } from "react-icons/cg";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="profile-container">
        <CgProfile color="#fff" width={256} />
        <div className="profile-info"></div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
