import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

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

const Home = ({ setIsIntroInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setIsIntroInView(true);
    } else {
      setIsIntroInView(false);
    }
  }, [isInView]);

  return (
    <div className="w-fit flex flex-col ml-20 justify-evenly border-1 border-green-500 h-screen">
      <div className="md:hidden">
        <LunchDiningIcon className="text-orange" style={{ fontSize: "3rem" }} />
      </div>

      <motion.div
        variants={fadeInAnimationVariations}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{
          once: true,
        }}
        className="border-1 w-fit border-black"
      >
        <div ref={ref} className="ml-1 text-lg font-bold tracking-wider">
          Hi, I am
        </div>
        <div className="bg-sampleBg2 bg-no-repeat bg-cover bg-clip-text text-transparent font-bold text-8xl">
          Sthitaprajna Mishra
        </div>
        <div className="text-5xl font-semibold">
          and I like to build products for the web.
        </div>
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariations}
        initial="initial"
        whileInView="animate"
        custom={1}
        viewport={{
          once: true,
        }}
        className="w-2/3 border-1 border-black text-gray1 text-2xl"
      >
        Welcome to my digital portfolio! I possess a flair for coding,
        creativity, and a profound love for{" "}
        <span className="text-blue2 font-bold">full stack engineering</span>.
        Let's connect, collaborate, and create. Together, we'll shape the
        future, one line of code at a time.
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariations}
        initial="initial"
        whileInView="animate"
        custom={2}
        viewport={{
          once: true,
        }}
        className="w-2/3 border-1 border-black font-spaceGrotesk"
      >
        <div>
          Reach out to me at <span className="underline">LinkedIn</span>,{" "}
          <span className="underline">GitHub</span>, and{" "}
          <span className="underline">Twitter</span>.
        </div>
        <div>
          Take a look at my <a className="underline">resume</a>.
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
