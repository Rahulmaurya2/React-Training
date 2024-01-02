import React, { useState } from "react";

import "./registrationForm.css";
import Input from "./Input";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    fathername: "",
    dob: "",
    mobileno: "",
    email: "",
    address: "",
    schoolten: "",
    schooltw: "",
  });
  const formInputData = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "Enter the name",
      label: "Student's Name ",
      required: true,
      errorMessage: "Plase enter the name",
    },
    {
      id: 2,
      type: "text",
      name: "fathername",
      placeholder: "Enter the Father name",
      label: "Father's Name ",
      required: true,
    },

    {
      id: 3,
      type: "date",
      label: "Date of Birth",
      required: true,
      name: "dob",
    },
    {
      id: 4,
      type: "tel",
      name: "mobileno",
      placeholder: "contract number",
      label: "Mobile Number ",
      required: true,
    },
    {
      id: 4,
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email Id  ",
      required: true,
    },
  ];

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-form">
      <h1> Registration Form</h1>
      <hr />
      <form onSubmit={onSubmitHandler}>
        {formInputData.map((field) => (
          <Input
            key={field}
            labelInput={field.label}
            {...field}
            errorMessage={field.errorMessage}
            onChangeHandler={onChangeHandler}
          />
        ))}
        <div id="main-form__address">
          <label htmlFor="address">Home Address</label> <br />
          <textarea
            placeholder="Enter the address"
            name="address"
            id="address"
            cols="55"
            rows="5"
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <br />
        <div id="course">
          <label htmlFor="course-name">Select course and stream</label>
          <br />
          <select id="course-name">
            <option value="B.Tech"> B.Tech</option>
            <option value="M.Tech"> M.Tech</option>
          </select>
          <select id="branch">
            <option value="CSE">Computer Science Engineering </option>
            <option value="ECE">
              Electronics and Communication Engineering
            </option>
            <option value="IT">Information Technology</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="">Civil Engineering</option>
          </select>
        </div>
        <Input
          placeholder="Enter percentage"
          labelInput={10 + "th %"}
          type="tel"
          required="true"
          name="schoolten"
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Enter percentage"
          labelInput={12 + "th %"}
          type="tel"
          required="true"
          name="schooltw"
          onChange={onChangeHandler}
        />
        <button id="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
