// React Util
import React from "react";
import { useInView } from "react-intersection-observer";

// Constants
import { testimonials } from "../constants/Home";

// Icons
import { BsFillStarFill } from "react-icons/bs";

// Animations
import { motion } from "framer-motion";

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="testimonials" className="relative">
      <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-black text-white text-3xl shadow-lg">
        Testimonials
      </h2>
      <ul className="flex flex-col md:grid md:grid-cols-3 md:items-start md:border-black md:border-b-[1px]">
        {testimonials.map((testimonial, index) => (
          <motion.li
            ref={ref}
            key={index}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className={`flex flex-col justify-center md:justify-start gap-2 border-black md:border-b-[0px] border-b-[1px] p-[25px] lg:p-[50px] md:border-black ${
              index === testimonials.length - 1 ? null : "md:border-r-[1px]"
            } md:h-full`}
          >
            <div className="flex items-center gap-2">
              <img
                src={testimonial.image}
                className="h-14 aspect-square rounded-full object-cover"
                alt={testimonial.name}
              />
              <div className="flex flex-col">
                <h3 className="text-2xl">{testimonial.title}</h3>{" "}
                <ul className="flex items-start">
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      key={index}
                    >
                      <BsFillStarFill className="text-yellow-400" />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {" "}
              <p className="line-clamp-4 lg:line-clamp-6">
                {testimonial.testimonial}
              </p>
              <p className="font-bold">-{testimonial.details}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
