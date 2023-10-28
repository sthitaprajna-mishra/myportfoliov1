import compass from "../src/assets/compass.png";

function App() {
  return (
    <>
      <div className="bg-lightWhite text-darkBlue font-leagueSpartan">
        <div className="flex flex-col justify-evenly border-1 border-green-500 ml-20 min-h-screen w-1/2">
          <div className="h-12 w-12">
            <img src={compass} alt="compass icon" />
          </div>
          <div className="space-y-12">
            <div className="leading-5">
              <div className="ml-1 font-bold tracking-wider">Hi, I am</div>
              <div className="text-red font-semibold text-6xl tracking-wide">
                Sthitaprajna Mishra
              </div>
              <div className="text-4xl">
                and I like to build products for the web.
              </div>
            </div>
            <div className=" text-2xl">
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
