import React, { useState, useEffect } from 'react';
import Loader from '../pages/loader';

const LoaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && children}
    </>
  );
};

export default LoaderWrapper;
