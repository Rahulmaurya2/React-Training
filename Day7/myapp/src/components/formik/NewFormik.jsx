import React from "react";
import * as Yup from "yup";

import "./newFormik.css";

import { useFormik } from "formik";

const validateData = Yup.object({
  fname: Yup.string().min(4).max(10).required("Please enter your name"),
  lname: Yup.string().min(2).max(10).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  website: Yup.string().required("Please enter your company website"),
  size: Yup.number().required("Please select the company size"),
  help: Yup.string().required("Please enter the query"),
});

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  website: "",
  size: "",
  help: "",
};

const NewFormik = () => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validateData,
      handleBlur: true,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="container__heading">
            <h1>Contact Form</h1>
            <h4>Tell us how we can help and we’ll get in touch shortly.</h4>
          </div>
          <div className="container__name">
            <div className="name_first">
              <br />
              <label htmlFor="fname">
                {" "}
                First Name{" "}
                {errors.fname && touched.fname ? (
                  <span>{errors.fname}</span>
                ) : null}
              </label>{" "}
              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter First name"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="name__last">
              <br />
              <label htmlFor="lname">
                {" "}
                Last Name{" "}
                {errors.lname && touched.lname ? (
                  <span>{errors.lname}</span>
                ) : null}
              </label>
              <br />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter Last name"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="container__email">
            <label htmlFor="email">
              Your Email{" "}
              {errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="xyz@gmail.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="container__website">
            <label htmlFor="website">
              Company Website{" "}
              {errors.website && touched.website ? (
                <span>{errors.website}</span>
              ) : null}
            </label>
            <input
              type="url"
              name="website"
              id="website"
              placeholder="xyz.com"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="container__company-size">
            <label htmlFor="size">
              Company Size{" "}
              {errors.size && touched.size ? <span>{errors.size}</span> : null}
            </label>
            <select
              name="size"
              id="size"
              value={values.size}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="select">select</option>
              <option value="9">0-9</option>
              <option value="10">10-49</option>
              <option value="50">50-99</option>
              <option value="100">100-499</option>
              <option value="499">499+</option>
            </select>
          </div>
          <div className="container__help">
            <label htmlFor="help">
              How can we help?{" "}
              {errors.help && touched.help ? <span>{errors.help}</span> : null}
            </label>
            <textarea
              name="help"
              id="help"
              cols="50"
              rows="5"
              placeholder="Enter the Query"
              value={values.help}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
          <div className="container__btn">
            <button className="btn" type="submit">
              <b> Let's Talk</b>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewFormik;
