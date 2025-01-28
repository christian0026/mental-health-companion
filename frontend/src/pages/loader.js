import React, { useEffect, useState } from "react";
import "../styles/Loader.css"; // Include the CSS provided

const Loader = () => {
  const [showDestination, setShowDestination] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDestination(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showDestination) {
    return <div className="destination">Welcome to the Destination!</div>;
  }

  return (
    <div className="hand">
      <div className="finger"></div>
      <div className="finger"></div>
      <div className="finger"></div>
      <div className="finger"></div>
      <div className="palm"></div>
      <div className="thumb"></div>
    </div>
  );
};

export default Loader;