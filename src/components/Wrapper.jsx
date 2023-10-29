import React, { useState } from "react";

import Home from "./Home";
import Experience from "./Experience";

const Wrapper = () => {
  const [isIntroInView, setIsIntroInView] = useState(false);
  const [isExpInView, setIsExpInView] = useState(false);
  const [isSkillInView, setIsSkillInView] = useState(false);
  const [isProjInView, setIsProjeInView] = useState(false);

  return (
    <div className="bg-yellow2 text-darkBlue font-leagueSpartan max-w-[1460px] border-1 border-blue-500 grid grid-cols-12 mx-auto">
      <div className="col-span-10 border-1 border-black">
        <Home setIsIntroInView={setIsIntroInView} />
        <Experience setIsExpInView={setIsExpInView} />
      </div>
      <div className="col-span-2 border-1 border-black">
        <div className="my-auto border-1 border-black text-xl space-y-6 fixed right-1/5 top-1/3">
          <div
            className={`${
              isIntroInView ? "text-2xl text-red  font-bold" : ""
            } transition-all`}
          >
            Introduction
          </div>
          <div
            className={`${
              isExpInView ? "text-2xl text-red  font-bold" : ""
            } transition-all`}
          >
            Experience
          </div>
          <div>Skills</div>
          <div>Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
