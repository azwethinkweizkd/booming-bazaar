import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
