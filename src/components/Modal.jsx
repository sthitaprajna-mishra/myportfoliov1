import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Modal = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const prevPhoto = () => {
    if (currentPhoto == 0) return;
    setCurrentPhoto(currentPhoto - 1);
  };
  const nextPhoto = () => {
    console.log("clicked next");
    console.log(currentPhoto);
    if (currentPhoto == photos.length - 1) return;
    setCurrentPhoto(currentPhoto + 1);
  };

  return (
    <div className=" h-screen w-screen relative z-10 border-1 border-green-500">
      <div className="absolute top-4 right-4 border-2 border-blue-500">
        <CloseIcon />
      </div>
      <div className="h-full w-full grid grid-cols-12 border-1 border-red">
        <div className="col-span-1 m-auto" onClick={prevPhoto}>
          <ArrowLeftIcon sx={{ fontSize: "6rem" }} />
        </div>
        <div className="col-span-10 my-auto">
          <img
            className="mx-auto max-h-screen"
            src={photos[currentPhoto]}
            alt="photo"
          />
        </div>
        <div className="col-span-1 m-auto" onClick={nextPhoto}>
          <ArrowRightIcon sx={{ fontSize: "6rem" }} />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 border-2 border-blue-500">
        <div className="text-2xl">
          {currentPhoto + 1}/{photos.length}
        </div>
      </div>
    </div>
  );
};

export default Modal;
