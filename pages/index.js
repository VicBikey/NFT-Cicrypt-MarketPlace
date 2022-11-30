import React from "react";

//INERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection } from "../components/componentsindex";

const index = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
    </div>
  )
};

export default index;
