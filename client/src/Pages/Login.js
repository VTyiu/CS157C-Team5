import React from "react";
import { useState } from "react";
import "../components/styles/Login.css";
import { Navigate } from "react-router-dom";

const Login = ({ isAuth, setAuth, logUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [validLogin, setValidLogin] = useState(false)

  const checkLogin = () => {
    if (email.length == 0 || password.length == 0) {
      return false;
    }
    let auth = logUser(email, password);
    if (auth) {
      console.log(auth);
      setAuth(true);
    } else {
      console.log("nope");
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <form className="login-container-form">
        <h1>Login</h1>
        <span className="login-separator">
          <div className="login-inputs">
            <label htmlFor="email" className="login-label">
              Email
            </label>
            <input
              type="text"
              className="login-input"
              placeholder="Email..."
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="login-inputs">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="text"
              className="login-input"
              placeholder="Password..."
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </span>
        <button onClick={checkLogin} className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
