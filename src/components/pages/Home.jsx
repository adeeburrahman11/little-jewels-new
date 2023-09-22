import React from "react";
import "./Home.css";
import { HomeMain } from "./Home/HomeMain";
import Testimonial from "./Home/Testimonals";
import { HomeAbout } from "./Home/HomeAbout";
import Program from "./programcomponent/Program";

export const Home = () => {
  return (
    <div>
      <HomeMain />
      <Program />
      <HomeAbout />
      <Testimonial />
    </div>
  );
};
