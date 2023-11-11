import React, { useState, useContext } from "react";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import { PhotoContext } from "../context/PhotoContext";

const ProjectItem = ({ project }) => {
  const [dictionaryProjectHover, setDictionaryProjectHover] = useState(false);

  const { setShowPhotos, setPhotoList } = useContext(PhotoContext);

  const updatePhotoList = () => {
    console.log("update photos");
    setPhotoList(project.photos);
    setShowPhotos(true);
  };

  return (
    <div className="grid grid-cols-12 space-x-12 mb-24">
      <div className="col-span-6 my-auto space-y-4">
        <img
          className="hover:cursor-pointer transition-all"
          src={project.photos[0]}
          alt="dictionaryDesktopDark"
          onMouseEnter={() => setDictionaryProjectHover(true)}
          onMouseLeave={() => setDictionaryProjectHover(false)}
          onClick={() => updatePhotoList()}
        />
        <div
          className={`${
            dictionaryProjectHover ? "text-darkBlue" : "text-lightWhite"
          } text-center text-gray1 tracking-wide`}
        >
          Click to open expanded view
        </div>

        <div className="flex text-md gap-x-8">
          <div className="flex items-center gap-x-2">
            <GitHubIcon size="small" />
            <div className="flex items-center gap-x-1 text-gray1">
              <a
                className="hover:text-red"
                target="_blank"
                href={project.codeLink}
              >
                Code
              </a>
              <OpenInNewIcon style={{ fontSize: "1rem" }} />
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <LanguageIcon className="text-blue1" />
            <div className="flex items-center gap-x-1 text-gray1">
              <a
                className="hover:text-red"
                target="_blank"
                href={project.liveServerLink}
              >
                Live Site
              </a>
              <OpenInNewIcon style={{ fontSize: "1rem" }} />
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.techStack.map((tech) => {
            return (
              <div className="bg-blue1 text-white text-sm rounded-full py-1 px-4">
                {tech}
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-6 pr-8 flex flex-col gap-y-6">
        <h2 className="text-3xl bg-sampleBg2 bg-no-repeat bg-cover bg-clip-text text-transparent font-bold ">
          {project.name}
        </h2>

        {project.details()}
      </div>
    </div>
  );
};

export default ProjectItem;
