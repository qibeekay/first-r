import React from "react";
import About1 from "./About1";
import About2 from "./About2";
import SectionProps from "../SectionProps";

const AboutPage = () => {
  return (
    <div>
      <About1 />
      <About2 />
      <SectionProps h1="About" p="Our About" img={"/fran.jpg"} />
    </div>
  );
};

export default AboutPage;
