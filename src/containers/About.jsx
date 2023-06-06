// React Util
import React from "react";

// Constants
import { about } from "../constants/Home";

// Images
import bg from "../assets/about/bg.jpg";

const About = () => {
  return (
    <section className="grid grid-rows-2 h-[100vh] text-center">
      <div
        style={{ "--image-url": `url(${bg})` }}
        className="flex flex-col items-center justify-center border-b-[1px] border-black p-10 sm:p-[50px] lg:p-[100px] 2xl:p-[200px] bg-[image:var(--image-url)] bg-left text-white"
      >
        <h2 className="text-4xl">{about.aboutSection1.title}</h2>
        <p className="w-[500px]">{about.aboutSection1.description}</p>
      </div>
      <div className="grid grid-cols-2 border-b-[1px] border-black">
        <div className="flex flex-col items-center justify-center p-[25px] lg:p-[50px] 2xl:p-[100px] border-r-[1px] border-black">
          <h3 className="text-3xl">{about.aboutSection2.title}</h3>
          <p>{about.aboutSection1.description}</p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
