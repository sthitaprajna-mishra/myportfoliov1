import React from "react";

import LunchDiningIcon from "@mui/icons-material/LunchDining";

const Home = () => {
  return (
    <div className="w-fit flex flex-col ml-20 justify-evenly border-1 border-green-500 h-screen">
      <div className="md:hidden">
        <LunchDiningIcon className="text-orange" style={{ fontSize: "3rem" }} />
      </div>

      <div className="border-1 w-fit border-black">
        <div className="ml-1 text-lg font-bold tracking-wider">Hi, I am</div>
        <div className="text-red font-bold text-8xl">Sthitaprajna Mishra</div>
        <div className="text-5xl font-semibold">
          and I like to build products for the web.
        </div>
      </div>

      <div className="w-2/3 border-1 border-black text-2xl">
        Welcome to my digital portfolio! I possess a flair for coding,
        creativity, and a profound love for{" "}
        <span className="text-red font-semibold">full stack engineering</span>.
        Let's connect, collaborate, and create. Together, we'll shape the
        future, one line of code at a time.
      </div>
      <div className="w-2/3 border-1 border-black">
        <div>
          Reach out to me at <span className="underline">LinkedIn</span>,{" "}
          <span className="underline">GitHub</span>, and{" "}
          <span className="underline">Twitter</span>.
        </div>
        <div>
          Take a loot at my <a className="underline">resume</a>.
        </div>
      </div>
    </div>
  );
};

export default Home;
