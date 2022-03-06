import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

const SignUp = ({ signUpStart }) => {
  // console.log(props);
  const [formState, setFormState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = formState;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={formState.displayName}
          onChange={handleChange}
          placeholder="Diplay Name"
          requied
        />

        <FormInput
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
          requied
        />
        <FormInput
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Password"
          requied
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          requied
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInputs) => dispatch(signUpStart(userInputs)),
});

export default connect(null, mapDispatchToProps)(SignUp);
