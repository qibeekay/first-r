import React from "react";

const SectionProps = ({ h1, p, img, p1 = "", p2 = "" }) => {
  return (
    <div>
      <div>
        <div style={{ backgroundImage: `url(${img})` }}>
          <h1>{h1}</h1>
          <p>{p}</p>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionProps;
