import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailLink, isSignInWithEmailLink } from "firebase/auth";

const Verify = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    console.log("Verify Component Mounted");
    console.log("Current URL:", window.location.href); // ✅ Log URL for debugging

    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = localStorage.getItem("emailForSignIn"); // ✅ Ensure same key as Registration.js

      if (!email) {
        email = window.prompt("Please enter your email for verification"); // ✅ Ask user for email if missing
      }

      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then(() => {
            alert("Login successful!");
            localStorage.removeItem("emailForSignIn");
            navigate("/login");
          })
          .catch(error => {
            console.error("OTP verification failed:", error);
            alert("OTP verification failed. Please try again.");
          });
      } else {
        alert("No email found. Please restart the sign-in process.");
      }
    } else {
      console.error("Invalid sign-in link");
    }
  }, [auth, navigate]);

  return <h2>Verifying OTP...</h2>;
};

export default Verify;
