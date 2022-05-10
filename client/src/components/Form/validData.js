export default function validData(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  // Email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    // regex for invalid email
    errors.email = "Email address is invalid";
  }

  // Password and verify password
  if (!values.password) {
    errors.password = "Password required";
  }

  if (!values.password2) {
    errors.password2 = "Password required";
  } else if (values.password2 !== values.password) {
    errors.password = "Passwords do not match";
  }

  return errors;
}
