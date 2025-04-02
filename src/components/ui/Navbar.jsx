// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 z-10 Nav__container flex justify-between items-center bg-[var(--nav-background-color)] text-[var(--nav-text-color)] w-full max-w-7xl mx-auto px-4 rounded-full">
//       <div
//         className="Nav__logo flex justify-center items-center text-2xl pr-2
//       font-bold text-[var(--nav-text-color)]"
//       >
//         VG
//       </div>
//       <nav className="flex justify-between p-5 w-full max-w-4xl italic  text-lg text-[var(--nav-text-color)] ">
//         <a
//           href="#home"
//           className="Nav__link hover:bg-[var(--nav-hover-color)] hover:text-[var(--nav-text-hover-color)]"
//         >
//           Home
//         </a>
//         <a href="#skills" className="Nav__link">
//           Skills
//         </a>
//         <a href="#experience" className="Nav__link">
//           Experience
//         </a>
//         <a href="#projects" className="Nav__link">
//           Projects
//         </a>
//         <a href="#contact" className="Nav__link">
//           Contact
//         </a>
//       </nav>
//     </div>
//   );
// };
// ``;

// export default Navbar;
// import React from "react";

// const Navbar = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       console.error(`Element with id ${sectionId} not found`);
//     }
//   };

//   return (
//     <div className="sticky top-0 z-10 flex justify-between items-center bg-black/20 backdrop-blur border border-white/10 text-white w-full max-w-7xl mx-auto px-4 rounded-full">
//       <div
//         className="flex justify-center items-center text-2xl p-3
//         font-bold"
//       >
//         VG
//       </div>
//       <nav className="flex gap-6 p-3 text-lg">
//         <button
//           onClick={() => scrollToSection("home")}
//           className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-full transition-colors"
//         >
//           <div className="w-5 h-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
//               <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
//               <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
//             </svg>
//           </div>
//           <span>Home</span>
//         </button>
//         <button
//           onClick={() => scrollToSection("skills")}
//           className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-full transition-colors"
//         >
//           <div className="w-5 h-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M7 8l-4 4l4 4"></path>
//               <path d="M17 8l4 4l-4 4"></path>
//               <path d="M14 4l-4 16"></path>
//             </svg>
//           </div>
//           <span>Skills</span>
//         </button>
//         <button
//           onClick={() => scrollToSection("experience")}
//           className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-full transition-colors"
//         >
//           <div className="w-5 h-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
//               <path d="M10 16h6"></path>
//               <path d="M13 11v5"></path>
//               <path d="M7 8v10a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2z"></path>
//             </svg>
//           </div>
//           <span>Experience</span>
//         </button>
//         <button
//           onClick={() => scrollToSection("projects")}
//           className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-full transition-colors"
//         >
//           <div className="w-5 h-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
//               <path d="M3 7l9 6l9 -6"></path>
//             </svg>
//           </div>
//           <span>Projects</span>
//         </button>
//         <button
//           onClick={() => scrollToSection("contact")}
//           className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-full transition-colors"
//         >
//           <div className="w-5 h-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
//               <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
//             </svg>
//           </div>
//           <span>Contact</span>
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Element with id ${sectionId} not found`);
    }
  };

  return (
    <div className="sticky top-0 z-10  justify-between items-center bg-white shadow-md text-gray-800  px-4 py-2 w-full    mx-auto hidden md:flex">
      <div
        className="flex justify-center items-center text-2xl p-3
        font-bold"
      >
        VG
      </div>
      <nav className="flex gap-6 p-3 text-lg">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 hover:text-blue-600 px-3 py-2 transition-colors"
        >
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>
          </div>
          <span>Home</span>
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="flex items-center gap-2 hover:text-blue-600 px-3 py-2 transition-colors"
        >
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 8l-4 4l4 4"></path>
              <path d="M17 8l4 4l-4 4"></path>
              <path d="M14 4l-4 16"></path>
            </svg>
          </div>
          <span>Skills</span>
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="flex items-center gap-2 hover:text-blue-600 px-3 py-2 transition-colors"
        >
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
              <path d="M10 16h6"></path>
              <path d="M13 11v5"></path>
              <path d="M7 8v10a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <span>Experience</span>
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="flex items-center gap-2 hover:text-blue-600 px-3 py-2 transition-colors"
        >
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </div>
          <span>Projects</span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="flex items-center gap-2 hover:text-blue-600 px-3 py-2 transition-colors"
        >
          <div className="w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
          </div>
          <span>Contact</span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
