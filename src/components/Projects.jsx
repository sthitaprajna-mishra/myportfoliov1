import React from "react";

import dictionaryDesktopDark from "../assets/dictionary_desktop_dark.png";
import dictionaryDesktopLight from "../assets/dictionary_desktop_light.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-fit flex flex-col ml-20 justify-evenly border-1 border-green-500 h-screen"
    >
      <div className="text-5xl font-semibold text-darkBlue underline decoration-blue2">
        Projects
      </div>
      <div className="flex gap-x-6">
        <div className="flex-1">
          <img src={dictionaryDesktopDark} alt="dictionaryDesktopDark" />
        </div>
        <div className="flex-1 pr-8 flex flex-col gap-y-2">
          <h2 className="text-3xl font-semibold">Dictionary Web App</h2>

          <div className="w-11/12 space-y-2">
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
            <p>
              This real-world dictionary web app combines functionality and
              aesthetics, offering a seamless and intuitive experience for users
              seeking word definitions and pronunciations.
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="font-semibold">Tech Stack</div>
            <div className="flex gap-x-6">
              <div>React</div>
              <div>Tailwind CSS</div>
              <div>Material UI</div>
              <div>Axios</div>
            </div>
          </div>

          <div className="flex gap-x-8">
            <div>
              <a href="#">GitHub</a>
            </div>
            <div>
              <a href="#">Live Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
