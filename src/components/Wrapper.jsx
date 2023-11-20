import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import { Link } from "react-scroll";

import Home from "./Home";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

import lightBulbON from "../assets/lightBulbON.png";

const fadeInAnimationVariations = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05,
    },
  }),
};

const Wrapper = () => {
  const [isIntroInView, setIsIntroInView] = useState(false);
  const [isExpInView, setIsExpInView] = useState(false);
  const [isSkillInView, setIsSkillInView] = useState(false);
  const [isProjInView, setIsProjeInView] = useState(false);

  const [isBulbClicked, setIsBulbClicked] = useState(false);

  const handleToggleClick = () => {
    console.log("toggling");
    setIsBulbClicked(!isBulbClicked);
  };

  return (
    <div className="bg-yellow2 text-darkBlue font-leagueSpartan max-w-[1460px] border-1 border-blue-500 grid grid-cols-12 mx-auto">
      <div className="col-span-10 border-1 border-black">
        <Home setIsIntroInView={setIsIntroInView} />
        <Experience setIsExpInView={setIsExpInView} />
        <Skills setIsSkillInView={setIsSkillInView} />
        <Projects />
      </div>
      <div className="col-span-2 border-1 border-black">
        <motion.div
          variants={fadeInAnimationVariations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className={`mx-auto flex top-2 hover:cursor-pointer transition-all fixed`}
          onClick={handleToggleClick}
        >
          <img
            className={`h-36           
            ${
              isBulbClicked
                ? "translate-y-4 duration-300"
                : "translate-y-0 duration-300"
            }`}
            src={lightBulbON}
            alt="lightBulbON"
          />
        </motion.div>
        <div className="my-auto text-xl space-y-6 fixed right-1/5 top-1/3">
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
              offset={10}
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
