import React from "react";

const Articles = () => {
  return (
    <div
      name="articles"
      className="pt-24 w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-centerw-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-500">
            Articles
          </p>
          <p className="py-6">Check out some of my articles:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* portfolio item */}
          <div>
            <p>coming next week!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
