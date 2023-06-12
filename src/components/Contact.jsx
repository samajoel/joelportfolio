import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/0b8e43d7-da32-44eb-b638-35dd96b8b142"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#F2BE22] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Submit the form below shoot me an email -
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-pink600 hover:border-[#F2BE22]">
          Let's Collaborate
          <span className="group-hover: duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
