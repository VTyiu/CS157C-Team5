import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import useForm from "../components/Form/useForm";
import validData from "../components/Form/validData";
import "../components/Form/Form.css";

const Signup = ({ submitForm }) => {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validData
  );

  // const createUser = () => {
  //   Axios.post("http://localhost:3001/createUser", {
  //     name: values.name.value,
  //     email: values.email.value,
  //     password: values.password.value,
  //   });
  // };

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getUsers")
  //     .then((response) => {
  //       setListOfUsers(response.data);
  //     })
  //     .catch(() => {
  //       console.log("ERR");
  //     });
  // }, []);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1> Sign Up </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="form-input"
            placeholder="Username..."
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="Email..."
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-input"
            placeholder="Password..."
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            name="password2"
            type="password2"
            className="form-input"
            placeholder="Repeat Password..."
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        {/* <button onClick={createUser}> Create User </button> */}
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? login <a href="#"> here </a>
        </span>
      </form>
    </div>
  );
};

export default Signup;

/* Backup code template
<input
          value={rank}
          type="text"
          placeholder="Rank..."
          onChange={(event) => {
            setRank(event.target.value);
          }}
        />
        */
