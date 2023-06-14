// React Util
import React from "react";
import { useInView } from "react-intersection-observer";
// Constants
import { about } from "../constants/Home";

// Images
import MockUp from "../assets/about/mockup.png";

// Icons
import { FiSend } from "react-icons/fi";

// Animations
import { motion } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref}>
      <div className="flex items-center justify-center gap-4 border-b-[1px] border-black text-black">
        <div className="max-w-[1000px] flex flex-col md:flex-row items-center justify-between md:gap-20 p-[25px] lg:p-[50px] ">
          <motion.div
            id="animated"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <h2 className="text-4xl">{about.title}</h2>
            <p>{about.description}</p>
            <a
              href="#contact"
              className="rounded-sm w-min px-2 py-1 mt-2 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-150"
            >
              <FiSend />
              Contact
            </a>
          </motion.div>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
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
