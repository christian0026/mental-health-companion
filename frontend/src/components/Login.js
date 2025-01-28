// Updated Login.js with hover effects, cancel button, and OTP improvements
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup, sendSignInLinkToEmail } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      navigate("/chatbot");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleEmailLogin = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const actionCodeSettings = {
        url: "http://localhost:3000/verify",
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert("OTP link sent to your email.");
      localStorage.setItem("emailForSignIn", email);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Error sending OTP. Please try again.");
    }
  };

  return (
    <StyledWrapper>
      <form className="form">
        <p>
          Welcome,<span> sign in to continue</span>
        </p>
        <button className="oauthButton" onClick={handleGoogleLogin} type="button">
          Continue with Google
        </button>
        <div className="separator">
          <div />
          <span>OR</span>
          <div />
        </div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="oauthButton" type="button" onClick={handleEmailLogin}>
          Send OTP Link
        </button>
        <button className="cancelButton" type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
        <p>
          Don't have an account?{" "}
          <span
            style={{ cursor: "pointer", color: "#31511e", fontWeight: "bold" }}
            onClick={() => navigate("/registration")}
          >
            Sign up here!
          </span>
        </p>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .form {
    padding: 20px;
    background: #d3d3d3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 5px;
    border: 2px solid #323232;
    box-shadow: 4px 4px #323232;

    .oauthButton:hover {
      background-color: #5a5a5a;
    }

    .cancelButton:hover {
      color: red;
    }
  }
`;

export default Login;
