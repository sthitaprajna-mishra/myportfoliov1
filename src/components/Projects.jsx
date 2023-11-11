import React, { useState } from "react";

import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

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

const itemData = [
  {
    img: fe9,
    title: "time-tracking-dashboard",
    url: "https://time-tracking-dashboard-fe-mentor.netlify.app/",
  },
  {
    img: fe1,
    title: "base-apparel-coming-soon",
    url: "https://base-apparel-coming-soon-fe-mentor.netlify.app/",
  },
  {
    img: fe3,
    title: "fylo-landing-page",
    url: "https://fylo-landing-page-fe-mentor.netlify.app/",
  },
  {
    img: fe8,
    title: "social-proof-section",
    url: "https://social-proof-section-fe-mentor.netlify.app/",
  },
  {
    img: fe5,
    title: "news-homepage-main",
    url: "https://news-homepage-main-fe-mentor.netlify.app/",
  },
  {
    img: fe4,
    title: "manage-landing-page",
    url: "https://manage-landing-page-fe-mentor.netlify.app/",
  },
  {
    img: fe7,
    title: "results-summary-component",
    url: "https://results-summary-component-fe-mentor.netlify.app/",
  },
  {
    img: fe2,
    title: "four-card-feature-section",
    url: "https://four-card-feature-section-fe-mentor.netlify.app/",
  },
  {
    img: fe6,
    title: "newsletter-signup",
    url: "https://newsletter-signup-fe-mentor.netlify.app/",
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
      <div className="text-3xl font-semibold text-darkBlue text-center underline decoration-blue2 mb-12">
        Full Stack Projects
      </div>
      {projectsInfo.map((projectItem) => {
        return <ProjectItem key={projectItem.id} project={projectItem} />;
      })}

      <div className="text-3xl font-semibold text-darkBlue text-center underline decoration-blue2 mb-12">
        UI Projects
      </div>
      <div className="space-y-2">
        <p className="w-2/3 text-center mx-auto">
          Design is hard. That is why I prefer FrontendMentor's design-led
          challenges empower me to wield a diverse arsenal of tools, tackling
          real-world responsive design puzzles head-on.
        </p>
        <p className="w-2/3 text-center mx-auto">
          Swing by my{" "}
          <span className="underline decoration-blue2">
            <a
              target="_blank"
              href="https://www.frontendmentor.io/profile/sthitaprajna-mishra"
            >
              profile
            </a>
          </span>{" "}
          to catch an exclusive glimpse behind the scenes of these projects –
          it's where the design magic happens! 🚀✨
        </p>
      </div>

      <Box className="mx-6 mt-12">
        <Masonry columns={3} spacing={2}>
          {itemData.map((item, index) => (
            <div
              key={index}
              className="shadow-lg overflow-hidden bg-gray-200 rounded border-2 border-gray-200"
            >
              {/* <Label>{index + 1}</Label> */}
              <a target="_blank" href={item.url}>
                <img
                  className="hover:scale-125 transition-all"
                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=162&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                  }}
                />
              </a>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};

export default Projects;
