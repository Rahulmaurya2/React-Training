import React, { useState } from "react";
import InputField from "./InputField";
import "./loginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formFields = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{4,8}$",
      errorMessage:
        "Username should be 4-8 characters and shouldn't include any special character!",
      autocomplete: "off",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "email",
      required: true,
      errorMessage: "Please enter the valid email",
      autocomplete: "off",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,14}$`,
      errorMessage:
        "Password should be 6-14 characters and include at least 1 letter, 1 number and 1 special character! ",
      autocomplete: "off",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "confirmPassword",
      required: true,
      pattern: formData.password,
      errorMessage: "Password is not match",
      autocomplete: "off",
    },
  ];

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Login page </h1>
      <div className="main">
        <form onSubmit={onSubmitHandler}>
          {formFields.map((field) => (
            <InputField
              key={field.id}
              onChange={onChangeHandler}
              {...field}
              value={formData[field.name]}
              errorMessage={field.errorMessage}
            />
          ))}
          <button className="button">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
