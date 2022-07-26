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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cupiditate, facilis dolorem obcaecati ab voluptas eveniet iure
              doloribus odit ipsum, inventore voluptate vero sunt minus quaerat
              ratione in magni iusto illo amet quasi labore a optio? Labore
              dolorum voluptas veniam, explicabo distinctio aspernatur, libero
              blanditiis culpa rerum eligendi quod enim impedit alias nobis
              similique adipisci, neque eaque. Pariatur ipsam omnis ex soluta
              doloremque eligendi ea nostrum iusto minima quasi corrupti
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
