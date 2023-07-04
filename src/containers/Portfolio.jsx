// React Util
import React from "react";

// Constants
import { portfolio } from "../constants/Home";

// Icons
import { MdOutlineOpenInNew } from "react-icons/md";

// Animations
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="flex items-center justify-center border-b-[1px] border-black text-black p-[25px] lg:p-[50px]">
        <div className="max-w-[800px] flex flex-col items-center gap-5">
          <div className="text-center">
            <h2 className="text-4xl">{portfolio.title}</h2>
          </div>
          <ul className="sm:flex sm:flex-col gap-3 mt-3 grid grid-cols-2">
            {portfolio.pieces.map((piece, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col justify-between sm:flex-row sm:items-start sm:gap-2 border-[1px] border-black sm:border-[0px]"
              >
                <div className="flex flex-col sm:flex-row">
                  <img
                    src={piece.image}
                    className="w-full h-[150px] object-cover sm:w-[300px] sm:h-full sm:rounded border-b-[1px] sm:border-[1px] border-black"
                    alt="Project"
                  />
                  <div className="p-2 sm:p-0 sm:pl-3 flex flex-col">
                    <h3 className="text-2xl">{piece.title}</h3>
                    <p className="line-clamp-5 sm:line-clamp-3">
                      {piece.description}
                    </p>
                    <a
                      href={piece.link}
                      target="_blank"
                      rel="noreferrer"
                      className="sm:rounded hidden sm:flex border-black border-[1px] sm:w-min px-2 text-lg mt-2 items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-150"
                    >
                      <MdOutlineOpenInNew />
                      Visit
                    </a>
                  </div>
                </div>

                <a
                  href={piece.link}
                  target="_blank"
                  rel="noreferrer"
                  className="sm:rounded sm:hidden border-black border-t-[1px] sm:w-min px-2 text-lg mt-2 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-150"
                >
                  <MdOutlineOpenInNew />
                  Visit
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
