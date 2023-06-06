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
        <div className="max-w-[1000px] flex items-center justify-between gap-20">
          <div>
            <h2 className="text-4xl">{about.aboutSection1.title}</h2>
            <p>{about.aboutSection1.description}</p>
          </div>
          <img className="h-[425px]" src={MockUp} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
