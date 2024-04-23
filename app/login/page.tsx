import "./login.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default async function Login() {
  return (
    <section className="login-section">
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <LoginForm />
      </div>
    </section>
  );
}
