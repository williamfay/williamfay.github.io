import React, { useEffect, useState } from "react";
import "../styles/module.fade-in.css"; 

const FadeIn = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`fade-in ${isLoaded ? "is-loaded" : ""}`}>
      {children}
    </div>
  );
};

export default FadeIn;