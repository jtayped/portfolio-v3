// React Util
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

// Constants
import { contact } from "../constants/Home";

// Icons
import { BsFillPersonPlusFill } from "react-icons/bs";

// Images
import LinkedInBanner from "../assets/contact/LinkedInBackground.svg";
import LinkedInNothing from "../assets/contact/LinkedInNothingIcon.svg";

// Animations
import { motion } from "framer-motion";

const Input = ({ placeholder, type, setFunction }) => {
  return (
    <div className="border-l-[1px] border-t-[1px] border-black p-3">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setFunction(e.target.value)}
        className="bg-transparent outline-none w-full h-full placeholder:font-primary placeholder:text-black/60 placeholder:text-lg text-lg"
      />
    </div>
  );
};

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  function sendMessage(e, firstName, lastName, email, message) {
    e.preventDefault();
  }

  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center gap-4 border-b-[1px] border-black text-black p-[25px] lg:p-[50px]">
        <div className="flex flex-col-reverse sm:flex-row  justify-center gap-5">
          <motion.form
            onSubmit={(e) =>
              sendMessage(e, firstName, lastName, email, message)
            }
            className="flex flex-col w-full sm:max-w-[400px]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="grid grid-cols-2 border-r-[1px] border-black">
              <Input
                type="text"
                placeholder="First Name"
                setFunction={setFirstName}
              />
              <Input
                type="text"
                placeholder="Last Name"
                setFunction={setLastName}
              />
            </div>
            <div className="border-r-[1px] border-black">
              <Input type="email" placeholder="Email" setFunction={setEmail} />
            </div>

            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              className="border-[1px] border-black p-3 bg-transparent outline-none placeholder:text-black/60 placeholder:text-lg text-lg"
            ></textarea>
            <button
              type="submit"
              className="border-black border-x-[1px] border-b-[1px] p-3 text-lg bg-black text-white transition-colors duration-150"
            >
              Submit
            </button>
          </motion.form>
          <motion.div
            className="max-w-[400px]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            ref={ref}
          >
            <h2 className="text-4xl">{contact.title}</h2>
            <p className="">{contact.description}</p>
            <ul className="grid grid-cols-2 gap-2 w-full h-[200px] mt-2">
              <motion.li
                className="border-[1px] rounded-lg shadow"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
              >
                <a
                  href={contact.socials.linkedIn.link}
                  className="flex flex-col justify-center"
                >
                  <div className="relative">
                    <img
                      src={LinkedInBanner}
                      className="h-16 w-full bg-center object-cover rounded-t-lg"
                      alt="LinkedIn Profile Banner"
                    />
                    <div className="rounded-full bg-white absolute p-0.5 bottom-[-20%] left-2 shadow-xl">
                      <img
                        className="h-14 rounded-full"
                        src={contact.socials.linkedIn.pfp}
                        alt="LinkedIn Profile"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 p-3 mt-3">
                    <div>
                      <p className="text-xs">{contact.socials.linkedIn.name}</p>
                      <p className="text-[7px]">
                        Attendant at {contact.socials.linkedIn.school}
                      </p>
                      <p className="text-[7px] text-gray-500">
                        {contact.socials.linkedIn.location}
                      </p>
                      <div className="flex gap-0.5 text-[5px] text-gray-500">
                        <p>{contact.socials.linkedIn.followers} followers</p>·
                        <p>
                          {contact.socials.linkedIn.connections} connections
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center ml-3">
                        <img
                          src={LinkedInNothing}
                          className="h-3"
                          alt="School Icon"
                        />
                        <p className="text-[6px]">
                          {contact.socials.linkedIn.school}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="px-2 py-0.5 bg-blue-600 text-white rounded-full text-xs ml-3 w-min">
                    Visit
                  </button>
                </a>
              </motion.li>
              <motion.li
                className="rounded-lg shadow border-[1px] bg-black"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.25 }}
              >
                <a
                  href={contact.socials.instagram.link}
                  className="text-white flex flex-col gap-3 p-1 h-full justify-between"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 p-1">
                      <img
                        src={contact.socials.instagram.pfp}
                        className="h-8 aspect-square rounded-full"
                        alt="Instagram Profile"
                      />
                      <div className="flex flex-col">
                        <p className="text-xs">
                          {contact.socials.instagram.username}
                        </p>
                        <p className="text-[8px] text-gray-600">
                          {contact.socials.instagram.name}
                        </p>
                      </div>
                    </div>
                    <ol className="flex items-center justify-evenly text-[8px]">
                      <li className="flex flex-col items-center">
                        <p className="font-bold">
                          {contact.socials.instagram.posts}
                        </p>
                        <p>posts</p>
                      </li>
                      <li className="flex flex-col items-center">
                        <p className="font-bold">
                          {contact.socials.instagram.followers}
                        </p>
                        <p>following</p>
                      </li>
                      <li className="flex flex-col items-center">
                        <p className="font-bold">
                          {contact.socials.instagram.following}
                        </p>
                        <p>followers</p>
                      </li>
                    </ol>
                  </div>

                  <div className="h-full flex flex-col items-center justify-center">
                    <p className="font-bold text-xs">No Posts</p>
                    <p className="text-[6px]">
                      This user has no posts for the moment.
                    </p>
                  </div>
                  <button className="w-full bg-[#0095F6] rounded-md flex items-center gap-2 justify-center text-sm">
                    <BsFillPersonPlusFill />
                    Visit
                  </button>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
