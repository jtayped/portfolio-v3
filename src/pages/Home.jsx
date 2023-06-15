// React Util
import React from "react";

// JSX Elements
import { Hero, About, Testimonials, Portfolio, Contact } from "../containers";

// CSS
import "./anchorSpacing.css";

const Home = () => {
  return (
    <div className="bg-slate-100 font-poppins overflow-x-hidden">
      <Hero />
      <About />
      <Testimonials />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
