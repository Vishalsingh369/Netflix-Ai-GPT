import React, { useRef, useState } from "react";
import Header from "./Header";
import img from "../assets/netflix 1.jpg";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  // const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    const errorMessage = checkValidData(
      email.current.value,
      password.current.value,
      // name.current.value
    );
    setErrorMessage(errorMessage);
    if(errorMessage) return;

    // Sign In / Sign Up Logic
    
    if(!isSignInForm){
      // Sign Up Logic 
    }else{
      // Sign In Logic 
    }

  };

  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <div className="absolute">
        <img src={img} alt="img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 my-36 mx-auto right-0 left-0 absolute bg-black p-12 rounded-lg bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </h1>
        {!isSignInForm && (
          <input
            // ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />{" "}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign in Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
