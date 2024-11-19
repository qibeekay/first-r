import React, { useState } from "react";
import "./role.css";
import { RiFacebookCircleFill } from "react-icons/ri";

const Role = () => {
  const [count, setCount] = useState(0);
  const [view, setView] = useState(true);

  const toggleView = () => {
    setView(!view);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div style={{ fontSize: "10rem" }}>{count}</div>
      <button onClick={increase}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <div className={`${view ? "view" : "hide"}`}>Viewwwwwww</div>
      <button style={{ position: "relative" }} onClick={toggleView}>
        click me
      </button>
    </div>
  );
};

export default Role;
