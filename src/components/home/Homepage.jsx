import React from "react";
import Role from "../Role/Role";
import Header from "../Header/Header";
import SectionProps from "../SectionProps";

const Homepage = () => {
  return (
    <div>
      <Role />
      <Header />
      <SectionProps h1="Home" p="Our Home" img={"/vite.svg"} />
    </div>
  );
};

export default Homepage;
