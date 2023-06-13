import React, { useState } from "react";

const Input = ({ placeholder, type, setFunction }) => {
  return (
    <div className="border-[1px] border-black rounded-lg p-2">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setFunction(e.target.value)}
        className="bg-transparent outline-none"
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
    <section>
      <div className="flex flex-col items-center justify-center gap-4 border-b-[1px] border-black text-black p-10">
        <h2 className="text-4xl">Contact Me</h2>
        <form
          onSubmit={(e) => sendMessage(e, firstName, lastName, email, message)}
          className="flex flex-col max-w-[750px] gap-2"
        >
          <div className="grid grid-cols-2 gap-2">
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
          <Input type="email" placeholder="Email" setFunction={setEmail} />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            className="border-[1px] border-black rounded-lg p-2 bg-transparent outline-none"
          ></textarea>
          <button
            type="submit"
            className="rounded-lg border-black border-[1px] p-2 text-lg hover:bg-black hover:text-white transition-colors duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
