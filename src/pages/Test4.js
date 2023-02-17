import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const Test4 = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientReact();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>
      {show && <div ref={popup}>This is a popup</div>}
    </div>
  );
};

export default Test4;
