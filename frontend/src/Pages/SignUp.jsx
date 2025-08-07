import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import InputEmail from "../Components/LogIn/InputEmail";
import InputPassword from "../Components/LogIn/InputPassword";
import LogInButton from "../Components/LogIn/LogInButton";
import AuthButton from "../Components/LogIn/AuthButton";

const SignUp = () => {
  return (
    <div className="flex bg-white flex-col h-screen">
      <Link to={"/"}>
        <button className="text-white absolute px-4 flex mt-6 gap-2 items-center">
          <img className="h-4" src={assets.back} alt="" />
          Back
        </button>
      </Link>
      <div className="bg-pm min-h-[35vh] w-full flex flex-col justify-center items-center rounded-b-[12vh]">
        <span className="text-2xl pt-18 font-extrabold text-white">
          Create an account
        </span>
        <span className="text-white mx-24 text-sm text-center">
          Let's get logged in and continue your shopping.
        </span>
      </div>
      <form className="bg-white flex flex-col items-center gap-4 mt-4">
        <InputEmail
          type="email"
          icon={assets.user}
          placeholder="Username or email address"
        />
        <InputEmail
          showPass={true}
          type="password"
          icon={assets.lock}
          placeholder="Password"
        />
        <InputEmail
          showPass={true}
          type="password"
          icon={assets.lock}
          placeholder="Confirm password"
        />

        <LogInButton prop="SIGN UP" />
        <div className="flex w-[75vw] h-5 justify-center">
          <span className="text-gray-500">or continue with</span>
        </div>
        <div className="flex gap-2 w-[75vw]">
          <AuthButton icon={assets.google} />
          <AuthButton icon={assets.ig} />
          <AuthButton icon={assets.fb} />
        </div>
        <span>
          Already have an account?{" "}
          <Link to={"/login"}>
            <a className="text-blue-600">Log In</a>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
