import React, { useState, useRef } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

import Input from "../components/login/Input.jsx";
import LogInButton from "../components/login/LogInButton.jsx";
import AuthButton from "../components/login/AuthButton.jsx";

import { useAuthStore } from "../stores/useAuthStore.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [mountAlert, setMountAlert] = useState(false);

  const { createUser, log } = useAuthStore();

  const formRef = useRef();

  // Scroll to top when any input loses focus
  const handleBlur = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Messy log validation might clean later

  const navigate = useNavigate();

  function triggerAlert() {
    setMountAlert(true);
    setTimeout(() => setShowAlert(true), 10);
    setTimeout(() => setShowAlert(false), 2000);
    setTimeout(() => setMountAlert(false), 2300);
  }

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword() {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  }

  const validEmail = validateEmail();
  const validPass = validatePassword();

  function handleSignUp() {
    if (
      username &&
      email &&
      password &&
      validEmail &&
      validPass &&
      password === confirmPassword
    ) {
      createUser(username, email, password);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAlert("Succesfully Login");
      triggerAlert();
      navigate("/login");
    } else if (!validEmail) {
      setAlert("Invalid Email");
      triggerAlert();
    } else if (!validPass) {
      setAlert("Invalid Password");
      triggerAlert();
    } else if (password !== confirmPassword) {
      setAlert("Password doesn't match");
      triggerAlert();
    } else {
      setAlert("Unknown Error");

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
      <div className="bg-pm min-h-[30vh] w-full flex flex-col justify-center items-center rounded-b-[12vh]">
        <span className="text-2xl pt-18 font-extrabold text-white">
          Create an account
        </span>
        <span className="text-white mx-24 text-sm text-center">
          Let's get logged in and continue your shopping.
        </span>
      </div>
      <form
        ref={formRef}
        className="bg-white flex flex-col items-center relative gap-5 mt-4"
      >
        <Input
          // username={true}
          type="text"
          icon={assets.user}
          placeholder="Username"
          value={username}
          setValue={setUsername}
          onBlur={handleBlur}
        />
        <Input
          type="email"
          icon={assets.user}
          placeholder="Email address"
          value={email}
          setValue={setEmail}
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

        {/* Confirm Password field */}
        <Input
          type={confirmPasswordVisible ? "text" : "password"}
          value={confirmPassword}
          setValue={setConfirmPassword}
          icon={assets.lock}
          showPass={true}
          passwordVisible={confirmPasswordVisible}
          setPasswordVisible={setConfirmPasswordVisible}
          placeholder="Confirm Password"
          onBlur={handleBlur}
        />

        <LogInButton
          onClick={(e) => {
            e.preventDefault();
            handleSignUp();
            log();
          }}
          prop="SIGN UP"
        />

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
