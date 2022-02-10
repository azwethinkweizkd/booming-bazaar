import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

export default function SignIn() {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleFormSubmit}>
        <FormInput
          name="email"
          type="email"
          value={formState.email}
          handleChange={handleChange}
          placeholder="Email"
          required="true"
        />

        <FormInput
          name="password"
          type="password"
          value={formState.password}
          handleChange={handleChange}
          placeholder="Password"
          required="true"
        />

        <CustomButton type="submit">SIGN IN</CustomButton>
      </form>
    </div>
  );
}
