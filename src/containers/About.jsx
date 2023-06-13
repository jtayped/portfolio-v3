// React Util
import React from "react";

// Constants
import { about } from "../constants/Home";

// Images
import MockUp from "../assets/about/mockup.png";

const About = () => {
  return (
    <section>
      <div className="flex items-center justify-center gap-4 border-b-[1px] border-black text-black">
        <div className="max-w-[1000px] flex flex-col md:flex-row items-center justify-between md:gap-20 p-[25px] lg:p-[50px] ">
          <div>
            <h2 className="text-4xl">{about.title}</h2>
            <p>{about.description}</p>
          </div>
          <img className="h-[300px] lg:h-[425px]" src={MockUp} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
