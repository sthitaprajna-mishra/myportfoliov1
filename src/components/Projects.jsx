import React, { useState } from "react";

import dictionaryDesktopDark from "../assets/dictionary_desktop_dark.png";
import dictionaryDesktopLight from "../assets/dictionary_desktop_light.png";

import ProjectItem from "./ProjectItem";

const projectsInfo = [
  {
    id: 1,
    name: "Dictionary Web App",
    photos: [dictionaryDesktopDark],
    codeLink: "https://github.com/sthitaprajna-mishra/dictionary-webapp",
    liveServerLink: "https://vocabsearch.netlify.app/",
    details: () => {
      return (
        <div className="w-11/12 space-y-2 text-justify">
          <p>
            A web application that seamlessly integrates with the Dictionary
            API, providing users with the ability to effortlessly{" "}
            <span className="text-blue2 font-bold">search for words</span> and
            receive comprehensive word definitions and information .
          </p>
          <p>
            In addition, the application{" "}
            <span className="text-blue2 font-bold">
              supports audio playback
            </span>
            , enabling users to listen to word pronunciations when available.
          </p>
          <p>
            The application caters to users' preferences by seamlessly adapting
            to their computer settings, automatically aligning with the color
            scheme. Additionally, it provides the flexibility for users to
            manually toggle the{" "}
            <span className="text-blue2 font-bold">dark mode</span>, ensuring a
            personalized interface.
          </p>
        </div>
      );
    },
    techStack: ["React", "Tailwind CSS", "Material UI", "Axios"],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-fit flex flex-col ml-20 justify-evenly border-1 border-green-500 h-screen"
    >
      <div className="text-5xl font-semibold text-darkBlue underline decoration-blue2">
        Projects
      </div>
      {projectsInfo.map((projectItem) => {
        return <ProjectItem key={projectItem.id} project={projectItem} />;
      })}
    </div>
  );
};

export default Projects;
