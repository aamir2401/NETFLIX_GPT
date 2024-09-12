import React, { useState } from 'react';
import Header from './Header';
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const handleIsSignInForm = () =>
    {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div className="relative h-screen w-full">

      <Header />
      
      {/* Background Image */}
      <div className="relative h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="background"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Sign-In Form */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 p-8 rounded-md max-w-sm w-full z-10">
          <h2 className="text-white text-5xl font-semibold mb-6">
            {
                isSignInForm ? "Sign In" : "Sign Up"
            }
          </h2>
          <form className="flex flex-col space-y-4">
            {/*Full Name*/}
            {
                !isSignInForm && <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-md text-black"
              />
            }
            {/* Email Input */}
            <input
              type="text"
              placeholder="Email Address"
              className="p-3 rounded-md text-black"
            />
            {/*Mobile Number*/}
            {
              !isSignInForm && <input
              type="number"
              placeholder="Mobile No."
              className="p-3 rounded-md text-black"
            />
            }
            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-md text-black"
            />
            {/* Sign-In Button */}
            <button className="py-3 px-6 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300">
              {
                isSignInForm ? "Sign In" : "Sign Up"
              }
            </button>
            {/* Additional Options */}
            <div className="flex justify-between text-gray-400 text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-white" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          </form>
          {/* Signup and more info */}
          <p className="text-gray-400 text-sm mt-6">
            {
                isSignInForm ? "New to Netflix?" : "Already a User?"
            }{" "}
            <a href="#" className="text-white hover:underline"
            onClick={handleIsSignInForm}
            >
              {
                isSignInForm ? "Sign up now" : "Sign In now"
              }
            </a>
            .
          </p>
          <p className="text-gray-400 text-xs mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
