import React from "react";
import ServiceSection1 from "./ServiceSection1";
import Service2 from "./Service2";
import SectionProps from "../SectionProps";

const ServicePage = () => {
  return (
    <div>
      <ServiceSection1 />
      <Service2 />
      <SectionProps
        h1="Service"
        p="Our Service"
        img={"/chi.jpg"}
        p1="heferererer"
        p2="sfsndasdnamndmad"
      />
    </div>
  );
};

export default ServicePage;
