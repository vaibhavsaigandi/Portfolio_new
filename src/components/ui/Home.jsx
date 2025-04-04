// import React from "react";

// const Home = ({ id }) => {
//   return (
//     <div
//       id={id}
//       className=" h-[90vh]  w-full sm:w-11/12 md:w-3/4 mx-auto px-2 sm:px-4 md:px-6 max-w-12xl bg-white "
//     >
//       <section className=" flex display-col justify-center items-center">
//         <div>This is vaibhav</div>
//         <div>welcome to my website</div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React from "react";

const Home = ({ id }) => {
  return (
    <div
      id={id}
      className="h-[100vh] w-full flex items-center justify-center text-white px-4"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Placeholder for profile image */}
          {/* <div className="size-[100px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-4">
            VG
          </div> */}
          <img
            src="https://neelmishra.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmemoji-computer.0c295dc9.png&w=640&q=75"
            alt="software engineer"
            className=" w-32 h-32"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 size-2.5 rounded-full animate-ping"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto text-black">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Fullstack Developer
          </h1>
          <h2 className="font-serif text-2xl md:text-3xl text-center mt-8 tracking-wide">
            "Think🤔 Code🧑‍💻 Ship🚀"
          </h2>
          <p className="mt-4 text-center text-black/80 md:text-lg">
            Hi! I'm Vaibhav, a Full Stack Developer based in New Jersey.
            <span className="hidden md:inline">
              <br />
              <br />
            </span>
            I specialize in creating robust web applications, enterprise
            systems, and comprehensive automation solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-50">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/45 px-6 h-12 rounded-xl hover:animate-bounce [animation-duration:5s] bg-indigo-200 hover:bg-indigo-400"
          >
            <span
              className="font-[700] text-black  hover:text-white
            "
            >
              Explore My Work
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-4"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:animate-pulse">
            <span className="text-2xl">👋</span>
            <span
              className="font-semibold"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/saivaibhavgandi",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Let's Connect
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
