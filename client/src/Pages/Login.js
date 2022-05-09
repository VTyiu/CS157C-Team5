import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../components/styles/Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const logUser = () => {
    Axios.post("http://localhost:3001/loginUser", {
      email: email,
      password: password,
    });
  };

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
              value={email}
              type="text"
              className="login-input"
              placeholder="Email..."
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="login-inputs">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              value={password}
              type="text"
              className="login-input"
              placeholder="Password..."
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* <input type="submit" value ="Create User"/> */}
            {/* <button onClick={logUser}> Login </button> */}
          </div>
        </span>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
