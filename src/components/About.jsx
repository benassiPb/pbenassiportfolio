import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 px-4"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p> Hi, I'm Peter. Welcome to my site.</p>
          </div>
          <div>
            <p className="pb-4">
              I develop modern full stack applications with tools including
              Javascript, React, Node.JS, Express, Sequelize, PostgresQL, Redux,
              React Native, Firebase and more.
            </p>
            <p className="pb-4">
              I have worked with industry leading environmental, education, and
              youth development organizations, and am passionate about creating
              dynamic and modern websites and applications to help my clients
              achieve their highest goals.
            </p>

            <p className="pb-4">
              Strengths: Problem-Solving, Communication, Leadership, Creativity,
              Team-Building, Reflection, Cultural Awareness, Compassion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
