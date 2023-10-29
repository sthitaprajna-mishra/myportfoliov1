import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-fit flex flex-col ml-20 bg-lightWhite justify-evenly border-1 border-green-500 h-[95vh]">
      <motion.div
        initial={{ marginLeft: "-2000px", opacity: 0 }}
        whileInView={{ marginLeft: "0", opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="text-5xl font-semibold text-red"
      >
        Experience
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-5/6 text-xl"
      >
        Having graduated with a bachelor's degree in Information Technology, I
        started working at Deloitte USI and have since gained significant
        experience as an analyst. As part of my role, I am mostly in charge of
        overseeing batches in the backend, exhibiting a strong knack for
        managing databases and handling complex data.
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex"
      >
        <div className="w-1/2 border-t-2 border-t-gray-500 space-y-6">
          <div className="p-2 border-2 bg-lightWhite border-red rounded-full w-2 -mt-3 -ml-1"></div>
          <div>
            <div className="font-semibold text-xl text-red">2017 - 2021</div>
            <div className="font-bold text-lg">B.Tech</div>
            <div>
              <h2 className="uppercase tracking-wide">
                Odisha University of Technology and Research
              </h2>
              <h2 className="text-sm">
                (formerly College of Engineering and Technology, Bhubaneswar)
              </h2>
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-6">
          <div className="p-2 border-2 bg-lightWhite border-red rounded-full w-2 -mt-2 -ml-1"></div>
          <div>
            <div className="font-semibold text-xl text-red">
              2021 - <span className="italic">current</span>
            </div>
            <div className="font-bold text-lg">Analyst</div>
            <div>
              <h2 className="uppercase tracking-wide">Deloitte USI</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
