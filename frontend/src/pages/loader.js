import React from 'react';
import styled from 'styled-components';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null; // Hide loader when isLoading is false

  return (
    <StyledWrapper>
      <div className="loader">
        <div className="dot dot-1" />
        <div className="dot dot-2" />
        <div className="dot dot-3" />
        <div className="dot dot-4" />
        <div className="dot dot-5" />
        <div className="dot dot-6" />
        <div className="dot dot-7" />
        <div className="dot dot-8" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    width: 10px;
    height: 10px;
    margin-right: 6px;
    border-radius: 50%;
    animation: dot-pulse2 1.5s ease-in-out infinite;
  }

  .dot-1 { background-color: #4285f4; animation-delay: 0s; }
  .dot-2 { background-color: #34a853; animation-delay: 0.3s; }
  .dot-3 { background-color: #fbbc05; animation-delay: 0.6s; }
  .dot-4 { background-color: #ea4335; animation-delay: 0.9s; }
  .dot-5 { background-color: #4285f4; animation-delay: 1.2s; }
  .dot-6 { background-color: #0f9d58; animation-delay: 1.5s; }
  .dot-7 { background-color: #673ab7; animation-delay: 1.8s; }
  .dot-8 { background-color: #ff5722; animation-delay: 2.1s; }

  @keyframes dot-pulse2 {
    0% { transform: scale(0.5); opacity: 0.5; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.5); opacity: 0.5; }
  }
`;

export default Loader;
