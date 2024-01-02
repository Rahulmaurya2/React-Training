import React, { useState } from "react";

import "./formikForm.css";

const FormikForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    website: "",
    size: "",
    help: "",
  });

  const onClickHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="container">
          <div className="container__heading">
            <h1>Contact Form</h1>
            <h4>Tell us how we can help and we’ll get in touch shortly.</h4>
          </div>
          <div className="container__name">
            <div className="name_first">
              <br />
              <label htmlFor="fname"> First Name </label>
              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                onClick={onClickHandler}
                placeholder="Enter First name"
                required
                errorMassge="Plase fill the name"
              />
            </div>
            <div className="name__last">
              <br />
              <label htmlFor="lname"> Last Name </label>
              <br />
              <input
                type="text"
                id="lname"
                name="lname"
                onClick={onClickHandler}
                placeholder="Enter Last name"
                required
              />
            </div>
          </div>
          <div className="container__email">
            <label htmlFor="email">Your Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              onClick={onClickHandler}
              placeholder="xyz@gmail.com"
              required
            />
          </div>
          <div className="container__website">
            <label htmlFor="website">Company Website</label>
            <input
              type="url"
              name="website"
              id="website"
              onClick={onClickHandler}
              placeholder="xyz.com"
              required
            />
          </div>
          <div className="container__company-size">
            <label htmlFor="size">Company Size</label>
            <select name="size" id="size" onClick={onClickHandler} required>
              <option value="0-9">0-9</option>
              <option value="10-49">10-49</option>
              <option value="50-99">50-99</option>
              <option value="100-499">100-499</option>
              <option value="499+">499+</option>
            </select>
          </div>
          <div className="container__help">
            <label htmlFor="help">How can we help?</label>
            <textarea
              name="help"
              id="help"
              cols="50"
              rows="5"
              onClick={onClickHandler}
              placeholder="Enter the Query"
              required
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

export default FormikForm;
