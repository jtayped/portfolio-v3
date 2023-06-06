// React Util
import React from "react";
import { Link } from "react-router-dom";

// Constants
import { hero } from "../constants/Home";

// Icons
import { FiMousePointer, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:justify-between items-center h-[80vh]">
      <div className="p-10 sm:p-[50px] lg:p-[100px] 2xl:p-[200px] h-full border-black border-b-[1px] flex flex-col justify-center">
        <h1 className="text-6xl xl:text-8xl font-normal sm:font-bold">
          {hero.title}
        </h1>
        <p className="text-md sm:text-lg">{hero.description}</p>
        <button className="rounded border-black border-[1px] w-min px-2 py-1 text-lg mt-2 flex items-center gap-2 hover:bg-black hover:text-white transition-colors duration-150">
          <FiMousePointer size={18} />
          Button
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 h-full">
        {hero.secondarySections.map((section) => (
          <div className="p-[25px] lg:p-[50px] 2xl:p-[100px] border-b-[1px] border-black border-l-[1px] flex flex-col sm:justify-center">
            <h2 className="font-bold sm:font-normal text-md sm:text-2xl xl:text-4xl">
              {section.title}
            </h2>
            <p className="text-xs sm:text-sm ">{section.description}</p>

            <Link to="/about">
              <button className="rounded border-black border-[1px] px-2 py-1 text-sm sm:text-lg mt-2 flex items-center gap-2 hover:bg-black hover:text-white hover:gap-3 transition-all duration-150">
                Learn More
                <FiArrowRight size={18} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hero;
