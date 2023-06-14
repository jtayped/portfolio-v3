// React Util
import React from "react";

// Constants
import { hero } from "../constants/Home";

// Icons
import { FiMousePointer } from "react-icons/fi";

// CSS
import "./highlight.css";

// Animations
import { motion } from "framer-motion";

const Hero = () => {
  const animationTime = 0.25;
  return (
    <main
      className="flex flex-col lg:flex-row lg:justify-between items-center max-h-[500px] lg:h-[500px]"
      id="hero"
    >
      <div className="p-6 sm:p-[25px] lg:p-[50px] 2xl:p-[200px] lg:h-full border-black border-b-[1px] flex flex-col items-center justify-center xl:w-[1500px]">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: animationTime,
          }}
        >
          <h1 className="highlight text-6xl xl:text-8xl w-min">{hero.title}</h1>
          <p className="text-md sm:text-lg xl:w-[600px]">{hero.description}</p>
          <button className="shadow-lg rounded-sm w-min px-2 py-1 text-lg mt-2 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-150 outline-none">
            <FiMousePointer size={18} />
            Button
          </button>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 w-full lg:h-full lg:w-[1000px] text-center md:text-left">
        {hero.secondarySections.map((section, index) => (
          <div
            key={index}
            style={{ "--image-url": `url(${section.image})` }}
            className="bg-[image:var(--image-url)] lg:bg-none bg-cover text-white lg:text-black p-6 lg:p-[50px] 2xl:p-[100px] border-b-[1px] border-black border-l-[1px] flex flex-col sm:justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * (animationTime / hero.secondarySections.length),
              }}
            >
              {" "}
              <h2 className="text-md sm:text-2xl xl:text-3xl">
                {section.title}
              </h2>
              <p className="text-sm md:flex hidden">{section.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hero;
