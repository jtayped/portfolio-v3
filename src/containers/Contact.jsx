import React, { useState } from "react";

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

  function sendMessage(e, firstName, lastName, email, message) {
    e.preventDefault();
  }

  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center gap-4 border-b-[1px] border-black text-black p-[25px] lg:p-[50px] relative">
        <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg px-4 py-2 bg-black text-white text-3xl">
          Contact Me
        </h2>
        <form
          onSubmit={(e) => sendMessage(e, firstName, lastName, email, message)}
          className="flex flex-col max-w-[400px]"
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
            className="border-black border-x-[1px] border-b-[1px] p-3 text-lg bg-red-600 hover:bg-red-700 text-white transition-colors duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
