import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const onChange = (e) => {
    setloginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const logUser = () => {
    Axios.post("http://localhost:3001/loginUser", {
      email: email,
      password: password,
    });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="login-group">
            <input
              id="email"
              value={email}
              type="text"
              className="login-inputs"
              placeholder="Email..."
              onChange={onChange}
            />
          </div>
          <div className="login-group">
            <input
              id="password"
              name="password"
              value={password}
              type="text"
              className="login-inputs"
              placeholder="Password..."
              onChange={onChange}
            />
          </div>
          <div className="login-group">
            <button type="submit" className="login-btn">
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
