import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Input from "../components/login/Input.jsx";

import LogInButton from "../components/login/LogInButton.jsx";
import AuthButton from "../components/login/AuthButton.jsx";

const SignUp = ({
  usernameInput,
  setUsernameInput,
  passwordInput,
  setPasswordInput,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    passwordValidation();
  }

  function passwordValidation() {
    if (!passwordRegex.test(passwordInput)) {
    }
  }

  function passwordConfirmation() {}

  return (
    <div className="flex bg-white flex-col h-screen">
      <Link to={"/"}>
        <button className="text-white absolute px-4 flex mt-6 gap-2 items-center">
          <img className="h-4" src={assets.back} alt="" />
          Back
        </button>
      </Link>
      <div className="bg-pm min-h-[30vh] w-full flex flex-col justify-center items-center rounded-b-[12vh]">
        <span className="text-2xl pt-18 font-extrabold text-white">
          Create an account
        </span>
        <span className="text-white mx-24 text-sm text-center">
          Let's get logged in and continue your shopping.
        </span>
      </div>
      <form className="bg-white flex flex-col items-center relative gap-5 mt-4">
        <Input
          username={true}
          type="text"
          icon={assets.user}
          placeholder="Username"
          setPasswordInput={setPasswordInput}
          setUsernameInput={setUsernameInput}
        />
        <Input
          username={true}
          type="email"
          icon={assets.user}
          placeholder="Email address"
          setPasswordInput={setPasswordInput}
          setUsernameInput={setUsernameInput}
        />
        <Input
          showPass={true}
          type="password"
          icon={assets.lock}
          placeholder="Password"
          setPasswordInput={setPasswordInput}
          setUsernameInput={setUsernameInput}
        />

        <Input
          showPass={true}
          type="password"
          icon={assets.lock}
          placeholder="Confirm password"
          setPasswordInput={setPasswordInput}
          setUsernameInput={setUsernameInput}
        />

        <LogInButton prop="SIGN UP" />
        <div className="flex w-[75vw] h-5 justify-center">
          <span className="text-gray-500 text-sm">or continue with</span>
        </div>
        <div className="flex gap-2 w-[75vw]">
          <AuthButton icon={assets.google} />
          <AuthButton icon={assets.ig} />
          <AuthButton icon={assets.fb} />
        </div>
        <span className="text-sm">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-blue-600">Log In</span>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
