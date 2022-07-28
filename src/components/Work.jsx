import React from "react";
import GraceImg from "../assets/GracesGreensImg.png";
import StackathonImg from "../assets/StackathonImg.png";
import HappilistImg from "../assets/HappilistImg.png";

const Work = () => {
  return (
    <div
      name="work"
      className="pt-24 w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-centerw-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-500">
            Work
          </p>
          <p className="py-6">Check out some of my recent work:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* portfolio item */}
          <div
            style={{ backgroundImage: `url(${HappilistImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold text-white tracking-wider px-2">
                Happilist App
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.youtube.com/watch?v=nMU2eROaP4s">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/2204-cookiemonsters-capstone/amazing-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${GraceImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold text-white tracking-wider px-2 text-center">
                E-Commerce Site
              </p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://fs-grace-shopper.herokuapp.com/home">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Site
                  </button>
                </a>
                <a href="https://github.com/FullStack-Sisko/GraceShopper">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${StackathonImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold text-white tracking-wider px-2">
                Bootcamp Blog Site
              </p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://fullstack-retrospect-a-thon.herokuapp.com/home">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Site
                  </button>
                </a>
                <a href="https://github.com/benassiPb/stackathon">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
