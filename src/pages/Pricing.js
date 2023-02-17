import React, { useState, useEffect } from "react";

const Pricing = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const [windowHeight, setwindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
    setwindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <h1>Pricing</h1>
      <h2>
        {windowWidth}
        {"x"}
        {windowHeight}
      </h2>
    </div>
  );
};

export default Pricing;
