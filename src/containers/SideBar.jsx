// React Util
import React from "react";

// Icons
import { RxCross1 } from "react-icons/rx";

// Constants
import { pages } from "../constants/Header";

// Animation
import { AnimatePresence, motion } from "framer-motion";

const SideBar = ({ toggleSideBar }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed w-full h-screen bg-slate-100 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          className="absolute top-7 right-7"
          onClick={() => toggleSideBar()}
        >
          <RxCross1 size={30} />
        </button>
        <nav>
          <ul className="flex flex-col gap-2">
            {pages.map((page, index) => (
              <motion.li
                key={index}
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <a
                  href={page.link}
                  onClick={() => toggleSideBar()}
                  className="text-3xl underline decoration-2"
                >
                  {page.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default SideBar;
