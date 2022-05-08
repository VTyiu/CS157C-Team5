import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../components/Form/Form.css";
import Home from "./Home";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <div className="form-content-left"></div>
        {!isSubmitted ? <Signup submitForm={submitForm} /> : <Home />}
      </div>
    </>
  );
};

export default Form;
