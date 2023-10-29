import React from "react";

import Home from "./Home";

const Wrapper = () => {
  return (
    <div className="bg-lightWhite text-darkBlue font-leagueSpartan max-w-[1460px] border-1 border-blue-500 grid grid-cols-12 mx-auto">
      <div className="col-span-10">
        <Home />
      </div>
      <div className="col-span-2 my-auto text-xl space-y-6">
        <div>Introduction</div>
        <div>Experience</div>
        <div>Skills</div>
        <div>Projects</div>
      </div>
    </div>
  );
};

export default Wrapper;
