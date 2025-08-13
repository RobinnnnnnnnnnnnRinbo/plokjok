import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Input from "../components/login/Input";
import LogInButton from "../components/login/LogInButton";
import AuthButton from "../components/login/AuthButton";

import { useAuthStore } from "../stores/useAuthStore";

const LogIn = () => {
  const [identifier, setIdentifier] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [mountAlert, setMountAlert] = useState(false);
  const navigate = useNavigate();

  const { logInCheck, log } = useAuthStore();

  const formRef = useRef();

  // Scroll to top when any input loses focus
  const handleBlur = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Messy log validation might clean later

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(identifier);
  }

  function validatePassword() {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  }

  function triggerAlert() {
    setMountAlert(true);
    setTimeout(() => setShowAlert(true), 10);
    setTimeout(() => setShowAlert(false), 2000);
    setTimeout(() => setMountAlert(false), 2300);
  }

  const validEmail = validateEmail();
  const validPass = validatePassword();

  function handleLogIn() {
    const authed = logInCheck(identifier, identifier, password);

    if (authed && validPass) {
      navigate("/");
      setAlert("Succesfully Login");
      triggerAlert();
    } else if (!validEmail) {
      setAlert("Invalid Email");
      triggerAlert();
    } else if (!validPass) {
      setAlert("Invalid Password");
      triggerAlert();
    } else {
      setAlert("Invalid credential");
      console.log("Invalid");
      triggerAlert();
    }
  }

  return (
    <div className="flex bg-white flex-col h-screen">
      {mountAlert && (
        <div
          role="alert"
          className={`alert alert-warning absolute top-3 right-3 transition-all duration-300 ease-in-out ${
            showAlert ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{alert}</span>
        </div>
      )}
      <Link to={"/"}>
        <button className="text-white absolute px-4 flex mt-6 gap-2 items-center">
          <img className="h-4" src={assets.back} alt="" />
          Back
        </button>
      </Link>
      <div className="bg-pm min-h-[35vh] w-full flex flex-col justify-center items-center rounded-b-[12vh]">
        <span className="text-2xl pt-18 font-extrabold text-white">
          Welcome back,
        </span>
        <span className="text-white mx-24 text-sm text-center">
          Let's get logged in and continue your shopping.
        </span>
      </div>
      <form
        ref={formRef}
        className="bg-white flex flex-col items-center gap-4 mt-4"
      >
        <Input
          type="email"
          icon={assets.user}
          placeholder="Email address or username"
          value={identifier}
          setValue={setIdentifier}
          onBlur={handleBlur}
        />
        <Input
          type={passwordVisible ? "text" : "password"}
          value={password}
          setValue={setPassword}
          icon={assets.lock}
          showPass={true}
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
          placeholder="Password"
          onBlur={handleBlur}
        />
        <div className="w-[75vw] flex justify-between">
          <div>
            <input type="checkbox" />
            <span className="pl-2 text-sm">Rememer me</span>
          </div>
          <a className="text-blue-600 text-sm">Forgot password?</a>
        </div>

        <LogInButton
          onClick={(e) => {
            e.preventDefault();
            handleLogIn();

            log();
          }}
          prop="LOG IN"
        />

        <div className="flex w-[75vw] justify-center">
          <span className="text-gray-500 text-sm">or continue with</span>
        </div>
        <div className="flex gap-2 w-[75vw]">
          <AuthButton icon={assets.google} />
          <AuthButton icon={assets.ig} />
          <AuthButton icon={assets.fb} />
        </div>
        <span className="text-sm">
          Don't have an account?
          <Link to={"/signup"}>
            <span className="text-blue-600 px-2">Register now</span>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LogIn;
