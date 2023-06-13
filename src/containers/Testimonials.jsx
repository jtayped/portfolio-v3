// React Util
import React from "react";

// Constants
import { testimonials } from "../constants/Home";

// Icons
import { BsFillStarFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section>
      <ul className="flex flex-col md:grid md:grid-cols-3 md:items-start md:border-black md:border-b-[1px]">
        {testimonials.map((testimonial, index) => (
          <li
            key={index}
            className={`flex flex-col justify-center md:justify-start gap-2 border-black md:border-b-[0px] border-b-[1px] p-[25px] lg:p-[50px] md:border-black ${
              index === testimonials.length - 1 ? null : "md:border-r-[1px]"
            } md:h-full`}
          >
            <div className="flex items-center gap-2">
              <img
                src={testimonial.image}
                className="h-14 aspect-square rounded-full object-cover"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="text-2xl">{testimonial.title}</h3>{" "}
                <ul className="flex items-start">
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <li key={index}>
                      <BsFillStarFill className="text-yellow-400" />
                    </li>
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
