
import React, { useRef, useState } from 'react';
import Header from './Header';
import { auth } from '../utils/firebase';
import { formValidator } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    
    const email = useRef(null);
    const password = useRef(null);
    const mobileNumber = useRef(null);
    const fullName = useRef(null);

    const handleIsSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleFormValidation = (e) => {
        e.preventDefault(); // Prevent the form from reloading the page

        // Validate the form and update the error message
        const messageGot = formValidator(
            email.current?.value || '',
            password.current?.value || '',
            mobileNumber.current?.value || '',
            fullName.current?.value || ''
        );

        setErrorMessage(messageGot);

        if (messageGot) return; // If there's a validation error, stop execution

        if (!isSignInForm) {
            // Sign up logic here
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user obj", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(`${errorCode} - ${errorMessage}`);
                console.log("error message in login form", errorCode, errorMessage);
            });
        } else {
            // Sign in logic here
        }
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
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h2>
                    <form className="flex flex-col space-y-4" onSubmit={handleFormValidation}>
                        {/* Full Name */}
                        {!isSignInForm && (
                            <input
                                ref={fullName}
                                type="text"
                                placeholder="Full Name"
                                className="p-3 rounded-md text-black"
                            />
                        )}
                        {/* Email Input */}
                        <input
                            ref={email}
                            type="text"
                            placeholder="Email Address"
                            className="p-3 rounded-md text-black"
                        />
                      
                        {/* Password Input */}
                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="p-3 rounded-md text-black"
                        />
                        <p className='text-red-700 font-bold rounded-md'>{errorMessage}</p>
                        {/* Sign-In Sign-Up Button */}
                        <button
                            className="py-3 px-6 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300"
                            type="submit"
                        >
                            {isSignInForm ? "Sign In" : "Sign Up"}
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
                        {isSignInForm ? "New to Netflix?" : "Already a User?"}{" "}
                        <a href="#" 
                        alt="hey"
                        className="text-white hover:underline" onClick={handleIsSignInForm}>
                            {isSignInForm ? "Sign up now" : "Sign in now"}
                        </a>.
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
