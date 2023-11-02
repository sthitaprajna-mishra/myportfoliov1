import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Modal = ({ photos }) => {
  return (
    <div className=" h-screen w-screen relative z-10 border-4 border-green-500">
      <div className="absolute top-4 right-4 border-2 border-blue-500">
        <CloseIcon />
      </div>
      <div className="h-full w-full grid grid-cols-12 border-2 border-red">
        <div className="col-span-1 m-auto">
          <ArrowLeftIcon sx={{ fontSize: "6rem" }} />
        </div>
        <div className="col-span-10 my-auto">
          <img className="" src={photos[0]} alt="photo" />
        </div>
        <div className="col-span-1 m-auto">
          <ArrowRightIcon sx={{ fontSize: "6rem" }} />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 border-2 border-blue-500">
        <div className="text-2xl">{photos.length}</div>
      </div>
    </div>
  );
};

export default Modal;
