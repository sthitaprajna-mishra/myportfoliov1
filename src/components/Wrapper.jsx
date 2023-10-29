import React from "react";

import Home from "./Home";
import Experience from "./Experience";

const Wrapper = () => {
  return (
    <div className="bg-lightWhite text-darkBlue font-leagueSpartan max-w-[1460px] border-1 border-blue-500 grid grid-cols-12 mx-auto">
      <div className="col-span-10 border-1 border-black">
        <Home />
        <Experience />
      </div>
      <div className="col-span-2 border-1 border-black">
        <div className="my-auto border-1 border-black text-xl space-y-6 fixed right-1/5 top-1/3">
          <div>Introduction</div>
          <div>Experience</div>
          <div>Skills</div>
          <div>Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
