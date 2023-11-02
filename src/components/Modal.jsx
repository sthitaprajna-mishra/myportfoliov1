import React, { useState, useContext } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { PhotoContext } from "../context/PhotoContext";

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

  const { setShowPhotos } = useContext(PhotoContext);

  return (
    <div className="bg-black bg-opacity-20 fixed z-10">
      <div className="h-screen w-screen relative border-1 border-green-500">
        <div
          className="absolute top-4 right-8 transition-all hover:cursor-pointer"
          onClick={() => setShowPhotos(false)}
        >
          <CloseIcon />
        </div>
        <div className="h-full w-full grid grid-cols-12  border-1 border-red">
          <div
            className="col-span-1 m-auto hover:bg-lightWhite rounded transition-all hover:cursor-pointer"
            onClick={prevPhoto}
          >
            <ArrowLeftIcon sx={{ fontSize: "6rem", color: "red" }} />
          </div>
          <div className="col-span-10 my-auto bg-gray1">
            <img
              className="mx-auto max-h-screen"
              src={photos[currentPhoto]}
              alt="photo"
            />
          </div>
          <div
            className="col-span-1 m-auto hover:bg-lightWhite rounded transition-all hover:cursor-pointer"
            onClick={nextPhoto}
          >
            <ArrowRightIcon sx={{ fontSize: "6rem", color: "red" }} />
          </div>
        </div>
        <div className="absolute bottom-4 right-8">
          <div className="text-2xl font-bold">
            {currentPhoto + 1}/{photos.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
