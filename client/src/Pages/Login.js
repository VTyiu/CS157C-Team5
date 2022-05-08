import React from "react";
import { useState } from "react";
import Axios from "axios";

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
    <div className="userLogin">
      <h1> Login </h1>
      <form>
        <input
          value={email}
          type="text"
          placeholder="Email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          value={password}
          type="text"
          placeholder="Password..."
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        {/* <input type="submit" value ="Create User"/> */}
        <button onClick={logUser}> Login </button>
      </form>
    </div>
  );
};

export default Login;
