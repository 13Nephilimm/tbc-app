"use client";

import { FaUserTie } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ handleLogin }) => {
  return (
    <form className="login-form" action={handleLogin}>
      <label>
        <FaUserTie className="login-icon" />
        Username
      </label>
      <input placeholder="Type your username" type="name" name="username" />
      <label>
        <RiLockPasswordFill className="login-icon" />
        Password
      </label>
      <input name="password" placeholder="Type your password" type="password" />
      <button className="btn-login">Login</button>
    </form>
  );
};

export default LoginForm;
