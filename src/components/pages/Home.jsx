import React from "react";
import "./Home.css";
import { HomeMain } from "./Home/HomeMain";
import Testimonial from "./Home/Testimonals";

export const Home = () => {
  return (
    <div>
      <HomeMain />
      <Testimonial />
    </div>
  );
};
