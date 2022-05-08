import React, { useState } from "react";
import Signup from "./Signup";
import "../components/Form/Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <div className="form-content-left"></div>
        {!isSubmitted ? <Signup submitForm={submitForm} /> : navigate("/login")}
      </div>
    </>
  );
};

export default Form;
