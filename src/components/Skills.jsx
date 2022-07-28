import React from "react";
import Javascript from "../assets/javascript.png";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="pt-24 w-full h-screen bg-[#0a192f]  text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Skills
          </p>
          <p className="py-4">
            These are some of the technologies I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img className="w-20 mx-auto" src={Javascript} alt="javascript" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img className="w-20 mx-auto" src={ReactIcon} alt="react" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img className="w-20 mx-auto" src={Firebase} alt="firebase" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img className="w-20 mx-auto" src={Node} alt="node" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img className="w-20 mx-auto" src={Github} alt="github" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
