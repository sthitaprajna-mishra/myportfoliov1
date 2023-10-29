import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const fadeInAnimationVariations = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Experience = ({ setIsExpInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setIsExpInView(true);
    } else {
      setIsExpInView(false);
    }
  }, [isInView]);

  return (
    <div className="w-fit flex flex-col ml-20 bg-lightWhite justify-evenly border-1 border-green-500 h-screen">
      <div ref={ref} className="text-[2px] text-lightWhite">
        ref
      </div>
      <motion.div
        variants={fadeInAnimationVariations}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{
          once: true,
        }}
        className="text-5xl font-semibold text-darkBlue underline decoration-blue2"
      >
        Experience
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariations}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{
          once: true,
        }}
        className="w-5/6 text-xl text-gray1"
      >
        Having graduated with a bachelor's degree in Information Technology, I
        started working at Deloitte USI and have since gained significant
        experience as an analyst. As part of my role, I am mostly in charge of
        overseeing batches in the backend, exhibiting a strong knack for
        managing databases and handling complex data.
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariations}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{
          once: true,
        }}
        className="flex"
      >
        <div className="w-1/2 border-t-2 border-t-gray1 space-y-6">
          <div className="p-3 border-2 border-blue2 bg-lightWhite rounded-full w-2 -mt-4"></div>
          <div className="space-y-2">
            <div className="font-semibold text-xl font-spaceGrotesk">
              2017 - 2021
            </div>
            <div className="text-lg">B.Tech.</div>
            <div className="text-gray1">
              <h2 className="tracking-wide">
                Odisha University of Technology and Research
              </h2>
              <h2 className="text-sm">
                (formerly College of Engineering and Technology, Bhubaneswar)
              </h2>
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-6 ">
          <div className="p-4 bg-red rounded-full w-2 -mt-4"></div>
          <div className="space-y-2">
            <div className="font-semibold text-xl font-spaceGrotesk">
              2021 - <span className="italic">current</span>
            </div>
            <div className="text-lg">Analyst</div>
            <div>
              <h2 className="text-gray1 tracking-wide">Deloitte USI</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
