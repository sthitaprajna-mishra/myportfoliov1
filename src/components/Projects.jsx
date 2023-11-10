import React, { useState } from "react";

import dictionaryDesktopDark from "../assets/dictionary_desktop_dark.png";
import dictionaryDesktopLight from "../assets/dictionary_desktop_light.png";
import dictionaryMobileDark from "../assets/dictionary_mobile_dark.png";
import dictionaryMobileLight from "../assets/dictionary_mobile_light.png";

import quickchat_1 from "../assets/quickchat_1.png";
import quickchat_2 from "../assets/quickchat_2.png";

import fe1 from "../assets/screencapture-base-apparel-coming-soon-fe-mentor-netlify-app-2023-11-08-22_05_53.png";
import fe2 from "../assets/screencapture-four-card-feature-section-fe-mentor-netlify-app-2023-11-08-22_06_13.png";
import fe3 from "../assets/screencapture-fylo-landing-page-fe-mentor-netlify-app-2023-11-08-22_06_35.png";
import fe4 from "../assets/screencapture-manage-landing-page-fe-mentor-netlify-app-2023-11-08-22_08_45.png";
import fe5 from "../assets/screencapture-news-homepage-main-fe-mentor-netlify-app-2023-11-08-22_07_35.png";
import fe6 from "../assets/screencapture-newsletter-signup-fe-mentor-netlify-app-2023-11-08-22_07_54.png";
import fe7 from "../assets/screencapture-results-summary-component-fe-mentor-netlify-app-2023-11-08-22_05_36.png";
import fe8 from "../assets/screencapture-social-proof-section-fe-mentor-netlify-app-2023-11-08-22_05_21.png";
import fe9 from "../assets/screencapture-time-tracking-dashboard-fe-mentor-netlify-app-2023-11-06-00_35_43.png";

import ProjectItem from "./ProjectItem";

const projectsInfo = [
  {
    id: 1,
    name: "QuickChat",
    photos: [quickchat_1, quickchat_2],
    codeLink: "https://github.com/sthitaprajna-mishra/quickchat",
    liveServerLink: "https://aquickchat.netlify.app/",
    details: () => {
      return (
        <div className="w-11/12 space-y-2">
          <p>
            A web-based platform, where we empower users to effortlessly
            establish{" "}
            <span className="text-blue2 font-bold">private chatrooms</span> and
            extend invitations to others, all while{" "}
            <span className="text-blue2 font-bold">
              eliminating the need for user registration or login
            </span>
            .
          </p>
          <ul>
            <li>
              <span className="font-bold">Create Private Chatrooms: </span>Craft
              exclusive spaces for interaction.
            </li>
            <li>
              <span className="font-bold">Invite Multiple Users:</span> Extend
              invitations to others to participate and engage in text-based
              discussions.
            </li>
            <li>
              <span className="font-bold">Real-time Notifications:</span> Stay
              informed as participants enter or exit chatrooms.
            </li>
            <li>
              <span className="font-bold">No Registration Required: </span>Enjoy
              all these functionalities without the necessity of signing up or
              logging in.
            </li>
            <li>
              <span className="font-bold">Responsive Design: </span>Experience
              an optimized interface layout that adapts to the screen size of
              your device.
            </li>
          </ul>
        </div>
      );
    },
    techStack: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "SocketIO",
      "Node",
      "Express",
    ],
  },
  {
    id: 2,
    name: "Dictionary Web App",
    photos: [
      dictionaryDesktopDark,
      dictionaryDesktopLight,
      dictionaryMobileDark,
      dictionaryMobileLight,
    ],
    codeLink: "https://github.com/sthitaprajna-mishra/dictionary-webapp",
    liveServerLink: "https://vocabsearch.netlify.app/",
    details: () => {
      return (
        <div className="w-11/12 space-y-2">
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
    techStack: ["React", "Tailwind CSS", "Material UI"],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-fit flex flex-col ml-20 justify-evenly border-1 border-green-500 "
    >
      <div className="text-5xl font-semibold text-darkBlue underline decoration-blue2 mb-12">
        Projects
      </div>
      {projectsInfo.map((projectItem) => {
        return <ProjectItem key={projectItem.id} project={projectItem} />;
      })}

      <div className="text-3xl font-semibold">
        Visit my{" "}
        <span className="text-4xl bg-sampleBg2 bg-no-repeat bg-cover bg-clip-text text-transparent font-bold ">
          FrontendMentor
        </span>{" "}
        profile for a more detailed review of these UI mockups!
      </div>
      <div className="grid grid-cols-12">
        <div className="f col-span-12 md:col-span-6 lg:col-span-4 border border-black h-80">
          <img src={fe1} alt="fe1" className="border border-green-500" />
        </div>
        <div className="f col-span-12 md:col-span-6 lg:col-span-4 border border-black h-fit">
          <img src={fe2} alt="fe1" className="border border-green-500" />
        </div>
        <div className="f col-span-12 md:col-span-6 lg:col-span-4 border border-black h-fit">
          <img src={fe3} alt="fe1" className="border border-green-500" />
        </div>
        <div className="f col-span-12 md:col-span-6 lg:col-span-4  border border-black h-fit">
          <img src={fe4} alt="fe1" className="border border-green-500" />
        </div>
        <div className="f col-span-12 md:col-span-6 lg:col-span-4 border border-black h-fit">
          <img src={fe5} alt="fe1" className="border border-green-500" />
        </div>
        <div className="f col-span-12 md:col-span-6 lg:col-span-4 border border-black h-fit">
          <img src={fe6} alt="fe1" className="border border-green-500" />
        </div>
        <div className="f col-span-12 md:col-span-6 lg:col-span-4 border border-black h-fit">
          <img src={fe7} alt="fe1" className="border border-green-500" />
        </div>
        <div className="f col-span-12 md:col-span-6 lg:col-span-4 border border-black h-fit">
          <img src={fe8} alt="fe1" className="border border-green-500" />
        </div>
        <div className="f col-span-12 md:col-span-6 lg:col-span-4 border border-black h-fit">
          <img src={fe9} alt="fe1" className="border border-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
