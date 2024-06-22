"use client";

import "./login.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function Login(): JSX.Element {
  const [register, setRegister] = useState(false);

  return (
    <section className="login-section">
      <div className="login-container">
        <h1 className="login-heading">{register ? "Register" : "Login"}</h1>
        {register ? <RegisterForm /> : <LoginForm />}
        {register ? (
          <p className="account-text">
            Already have an account?
            <button onClick={() => setRegister(false)} className="reg-log-btn">
              Login
            </button>
          </p>
        ) : (
          <p className="account-text">
            Don`t have an account?
            <button onClick={() => setRegister(true)} className="reg-log-btn">
              Register
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
