import { useState, useEffect } from "react";
import Axios from "axios";

const useForm = (callback, validData) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validData(values));

    setIsSubmitting(true);
  };

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: values.username,
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      createUser(values);
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, isSubmitting };
};

export default useForm;
