import React, { useState } from "react";

import { Link } from "react-scroll";

import Home from "./Home";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

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
        <Skills setIsSkillInView={setIsSkillInView} />
        <Projects />
      </div>
      <div className="col-span-2 border-1 border-black">
        <div className="my-auto border-1 border-black text-xl space-y-6 fixed right-1/5 top-1/3">
          <div
            className={`${
              isIntroInView ? "text-3xl text-red  font-bold" : ""
            } transition-all`}
          >
            <Link
              className={
                !isIntroInView
                  ? `hover:underline hover:cursor-pointer hover:underline-offset-4 hover:decoration-red`
                  : ""
              }
              to="introduction"
              smooth={true}
              offset={10}
              duartion={500}
            >
              Introduction
            </Link>
          </div>
          <div
            className={`${
              isExpInView ? "text-3xl text-red  font-bold" : ""
            } transition-all`}
          >
            <Link
              className={
                !isExpInView
                  ? `hover:underline hover:cursor-pointer hover:underline-offset-4 hover:decoration-red`
                  : ""
              }
              to="experience"
              smooth={true}
              offset={55}
              duartion={500}
            >
              Experience
            </Link>
          </div>
          <div
            className={`${
              isSkillInView ? "text-3xl text-red  font-bold" : ""
            } transition-all`}
          >
            <Link
              className={
                !isSkillInView
                  ? `hover:underline hover:cursor-pointer hover:underline-offset-4 hover:decoration-red`
                  : ""
              }
              to="skills"
              smooth={true}
              offset={200}
              duartion={500}
            >
              Skills
            </Link>
          </div>
          <div>Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
