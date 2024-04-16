"use server";

import "./login.css";
import { AUTH_COOKIE_KEY } from "../constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { login } from "../actions";
import LoginForm from "@/components/LoginForm/LoginForm";

export default async function Login() {
  const cookieStore = cookies();

  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  console.log("cookie", cookie);

  if (cookie) {
    redirect("/");
  }

  const handleLogin = async (username, password) => {
    "use server";
    await login(username, password);
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <LoginForm handleLogin={handleLogin} />
      </div>
    </section>
  );
}
