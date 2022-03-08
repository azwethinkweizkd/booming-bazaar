import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";

const SignIn = () => {
  // console.log(props);

  const dispatch = useDispatch();
  const googleSignInStartHandle = () => dispatch(googleSignInStart());
  const emailSignInStartHadle = (email, password) =>
    dispatch(emailSignInStart({ email, password }));
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

    const { email, password } = formState;

    emailSignInStartHadle(email, password);
  };

  // console.log(googleSignInStart);

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
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
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStartHandle}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
