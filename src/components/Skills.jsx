import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import htmlIcon from "../assets/html5.svg";
import cssIcon from "../assets/css3.svg";
import jsIcon from "../assets/javascript.svg";
import sassIcon from "../assets/sass.svg";
import tailwindcssIcon from "../assets/tailwindcss.svg";
import reactIcon from "../assets/react.svg";
import javaIcon from "../assets/java.svg";
import csharpIcon from "../assets/csharp.svg";
import dotnetcoreIcon from "../assets/dot-net-core.svg";
import mssqlIcon from "../assets/mssql.svg";
import githubIcon from "../assets/github.svg";

const skillsData = [
  { icon: htmlIcon, name: "HTML" },
  { icon: cssIcon, name: "CSS" },
  { icon: jsIcon, name: "JavaScript" },
  { icon: sassIcon, name: "SASS/SCSS" },
  { icon: tailwindcssIcon, name: "Tailwind CSS" },
  { icon: reactIcon, name: "React" },
  { icon: javaIcon, name: "Java" },
  { icon: csharpIcon, name: "C#" },
  { icon: dotnetcoreIcon, name: "Web APIs" },
  { icon: mssqlIcon, name: "MSSQL" },
  { icon: githubIcon, name: "GitHub" },
];

const fadeInAnimationVariations = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = ({ setIsSkillInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setIsSkillInView(true);
    } else {
      setIsSkillInView(false);
    }
  }, [isInView]);
  return (
    <div className="w-fit flex flex-col ml-20 justify-evenly border-1 border-green-500 h-screen">
      <motion.div
        initial={{ marginLeft: "-2000px", opacity: 0 }}
        whileInView={{ marginLeft: "0", opacity: 1 }}
        transition={{ duration: 0.75 }}
        ref={ref}
        className="text-5xl font-semibold text-darkBlue underline decoration-blue2"
      >
        Skills
      </motion.div>

      <div className="text-xl w-5/6 text-gray1 flex flex-wrap gap-16">
        {skillsData.map((skill, index) => (
          <motion.div
            variants={fadeInAnimationVariations}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="flex flex-col items-center gap-y-6"
          >
            <div>
              <img className="h-20 w-20" src={skill.icon} alt={skill.name} />
            </div>
            <div className="font-spaceGrotesk text-sm font-bold">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
