import React, { useState } from "react";

import Modal from "./components/Modal";
import Wrapper from "./components/Wrapper";

import { PhotoContext } from "./context/PhotoContext";

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [photoList, setPhotoList] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);

  console.log(photoList);

  return (
    <>
      <PhotoContext.Provider
        value={{ photoList, setPhotoList, showPhotos, setShowPhotos }}
      >
        {showPhotos ? <Modal photos={photoList} /> : null}
        <>
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-sampleBg2 bg-no-repeat bg-cover rounded-lg origin-left"
            style={{ scaleX }}
          />
          <div>
            <Wrapper />
          </div>
        </>
      </PhotoContext.Provider>
    </>
  );
}

export default App;
