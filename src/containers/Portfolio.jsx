// React Util
import React from "react";

// Constants
import { portfolio } from "../constants/Home";

// Icons
import { MdOutlineOpenInNew } from "react-icons/md";

const Portfolio = () => {
  return (
    <section>
      <div className="flex items-center justify-center border-b-[1px] border-black text-black p-[25px] lg:p-[50px]">
        <div className="max-w-[800px] flex flex-col items-center gap-5">
          <div className="text-center">
            <h2 className="text-4xl">{portfolio.title}</h2>
          </div>
          <ul className="sm:flex sm:flex-col gap-3 mt-3 grid grid-cols-2">
            {portfolio.pieces.map((piece, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:h-[225px]"
              >
                <img
                  src={piece.image}
                  className="w-full h-[150px] object-cover sm:w-[300px] sm:h-full rounded"
                  alt=""
                />
                <div className="sm:pl-3">
                  <h3 className="text-2xl">{piece.title}</h3>
                  <p className="line-clamp-3">{piece.description}</p>
                  <button className="rounded border-black border-[1px] w-min px-2 text-lg mt-2 flex items-center gap-2 hover:bg-black hover:text-white transition-colors duration-150">
                    <MdOutlineOpenInNew />
                    Visit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
