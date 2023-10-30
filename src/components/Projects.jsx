import React, { useState } from "react";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import dictionaryDesktopDark from "../assets/dictionary_desktop_dark.png";
import dictionaryDesktopLight from "../assets/dictionary_desktop_light.png";

const Projects = () => {
  const [dictionaryProjectHover, setDictionaryProjectHover] = useState(false);

  return (
    <div
      id="projects"
      className="w-fit flex flex-col ml-20 justify-evenly border-1 border-green-500 h-screen"
    >
      <div className="text-5xl font-semibold text-darkBlue underline decoration-blue2">
        Projects
      </div>
      <div className="flex items-center gap-x-12">
        <div className="flex-1 space-y-4">
          <img
            className="hover:cursor-pointer transition-all"
            src={dictionaryDesktopDark}
            alt="dictionaryDesktopDark"
            onMouseEnter={() => setDictionaryProjectHover(true)}
            onMouseLeave={() => setDictionaryProjectHover(false)}
          />
          <div
            className={`${
              dictionaryProjectHover ? "text-darkBlue" : "text-lightWhite"
            } text-center text-gray1`}
          >
            Click to open expanded view
          </div>
        </div>
        <div className="flex-1 pr-8 flex flex-col gap-y-6">
          <h2 className="text-3xl font-semibold">Dictionary Web App</h2>

          <div className="flex text-md gap-x-8">
            <div className="flex items-center gap-x-2">
              <GitHubIcon size="small" />
              <div className="flex items-center gap-x-1">
                <a
                  target="_blank"
                  href="https://github.com/sthitaprajna-mishra/dictionary-webapp"
                >
                  GitHub
                </a>
                <OpenInNewIcon style={{ fontSize: "1rem" }} />
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <LanguageIcon />
              <div className="flex items-center gap-x-1">
                <a target="_blank" href="https://vocabsearch.netlify.app/">
                  Live Site
                </a>
                <OpenInNewIcon style={{ fontSize: "1rem" }} />
              </div>
            </div>
          </div>

          <div className="w-11/12 space-y-2 text-justify">
            <p>
              A web application that seamlessly integrates with the Dictionary
              API, providing users with the ability to effortlessly search for
              words and receive comprehensive word definitions and information.
            </p>
            <p>
              In addition, the application supports audio playback, enabling
              users to listen to word pronunciations when available.
            </p>
            <p>
              The application has been designed with user experience in mind. It
              accommodates users' preferences by automatically adopting a color
              scheme that corresponds to their computer settings, or it allows
              manual toggling for a personalized visual experience.
            </p>
          </div>

          <div className="flex gap-x-4">
            <div className="bg-blue2 px-4 pt-1 text-lightWhite rounded-full border border-blue2 transition-all hover:bg-lightWhite hover:border hover:text-darkBlue">
              React
            </div>
            <div className="bg-blue2 py-1 px-4 text-lightWhite rounded-full">
              Tailwind CSS
            </div>
            <div className="bg-blue2 py-1 px-4 text-lightWhite rounded-full">
              Material UI
            </div>
            <div className="bg-blue2 py-1 px-4 text-lightWhite rounded-full">
              Axios
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
