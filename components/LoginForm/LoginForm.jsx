"use client";

import { FaUserTie } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import React, { useState } from "react";
import "./LoginForm.css";
import { handleLogin } from "@/scripts/login";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(name, password).then(() => window.location.reload());
      }}
    >
      <label>
        <FaUserTie className="login-icon" />
        Username
      </label>
      <input
        placeholder="Type your username"
        type="name"
        name="username"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <label>
        <RiLockPasswordFill className="login-icon" />
        Password
      </label>
      <input
        name="password"
        placeholder="Type your password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <button className="btn-login">Login</button>
    </form>
  );
};

export default LoginForm;
