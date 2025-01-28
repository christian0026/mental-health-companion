// Updated Registration.js with hover effects and better OTP handling
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Update path correctly

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const sendOtp = async () => {
    if (!email) {
      alert("Please enter an email.");
      return;
    }
  
    try {
      const actionCodeSettings = {
        url: "http://localhost:3000/verify",
        handleCodeInApp: true,
      };
  
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert("OTP link sent to your email.");
      localStorage.setItem("emailForSignUp", email);
    } catch (error) {
      console.error("Error sending OTP:", error.code, error.message);
      alert(`Error sending OTP: ${error.message}`);
    }
  };
  

  return (
    <StyledWrapper>
      <form className="form">
        <p>Create an Account</p>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="oauthButton" type="button" onClick={sendOtp}>
          Send OTP Link
        </button>
        <button className="cancelButton" type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
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

export default Registration;
