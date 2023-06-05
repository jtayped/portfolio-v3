// React Util
import React from "react";

// JSX Elements
import { Hero, About } from "../containers";

const Home = () => {
  return (
    <div className="bg-slate-100 pb-[10000px] font-primary">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
