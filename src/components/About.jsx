import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#F2BE22]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Joel, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Reliable team member. Dedicated to business success. Passionate
              about data and what you can achieve with it. Systems Analysis
              Student, Computer Technician. Experience in the area of
              ​​cryptocurrency mining, specifically Bitcoin, working with
              different types of ASIC miners and taking control so that the
              appropriate mining conditions are met as well as preventive
              maintenance. Now working in Web Development, focused on finding
              solutions and bringing value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
