import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";

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

    const { email, password } = formState;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormState({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}
