"use client";
import React, { useState } from "react";
import "./RegisterForm.css";
import { FaUserTie } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //   const [role, setRole] = useState<string>("");
  const role = "admin";
  const router = useRouter();

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        fetch("/api/register", {
          method: "POST",
          body: JSON.stringify({ username: name, email, password, role }),
        }).then(() => {
          router.push("/");
        });
      }}
    >
      <label>
        <FaUserTie className="login-icon" />
        Username
      </label>
      <input
        placeholder="Type your username"
        type="text"
        name="username"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <label>
        <FaUserTie className="login-icon" />
        Email
      </label>
      <input
        placeholder="Type your username"
        type="text"
        name="username"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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

      <button className="btn-login" type="submit">
        Login
      </button>
    </form>
  );
};

export default RegisterForm;
