import LunchDiningIcon from "@mui/icons-material/LunchDining";

function App() {
  return (
    <>
      {/* <div className="hidden font-leagueSpartan md:flex md:justify-end space-x-12 py-6 pr-12 md:sticky md:top-0 bg-lightWhite bg-opacity-95 border-1 border-green-500">
        <a>Introduction</a>
        <a>About</a>
        <a>Experience</a>
        <a>Projects</a>
      </div> */}
      <div className="bg-lightWhite text-darkBlue font-leagueSpartan flex justify-center pb-[100rem]">
        <div className="flex flex-col justify-evenly border-1 border-green-500 min-h-screen">
          <div className="md:hidden">
            <LunchDiningIcon
              className="text-orange"
              style={{ fontSize: "3rem" }}
            />
          </div>
          <div className="space-y-12">
            <div>
              <div className="ml-1 text-lg font-bold tracking-wider">
                Hi, I am
              </div>
              <div className="text-red font-semibold text-8xl">
                Sthitaprajna Mishra
              </div>
              <div className="text-5xl">
                and I like to build products for the web.
              </div>
            </div>
            <div className="w-2/3 text-2xl">
              Let's connect, collaborate, and create. Together, we'll shape the
              future, one line of code at a time.
            </div>
          </div>
          <div>
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
      </div>
    </>
  );
}

export default App;
