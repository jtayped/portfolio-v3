// React Util
import React from "react";

// Constants
import { about } from "../constants/Home";

// Images
import MockUp from "../assets/about/mockup.png";

// Icons
import { FiSend } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <div className="flex items-center justify-center gap-4 border-b-[1px] border-black text-black">
        <div className="max-w-[1000px] flex flex-col md:flex-row items-center justify-between md:gap-20 p-[25px] lg:p-[50px] ">
          <div>
            <h2 className="text-4xl">{about.title}</h2>
            <p>{about.description}</p>
            <a
              href="#contact"
              className="rounded-sm w-min px-2 py-1 mt-2 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-150"
            >
              <FiSend />
              Contact
            </a>
          </div>
          <img
            className="h-[300px] lg:h-[425px]"
            src={MockUp}
            alt="Two computers showing two of my projects."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
