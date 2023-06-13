// React Util
import React from "react";

// JSX Elements
import { Hero, About, Testimonials, Portfolio, Contact } from "../containers";

const Home = () => {
  return (
    <div className="bg-slate-100 font-primary">
      <Hero />
      <About />
      <Testimonials />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
