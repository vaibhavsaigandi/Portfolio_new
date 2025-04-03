// import React from "react";
// import ExperienceData from "../ui/ExperiencData";

// const Experience = ({ id }) => {
//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-delay="100"
//       id={id}
//       className="experience h-full w-full sm:w-11/12 md:w-3/4 mx-auto px-2 sm:px-4 md:px-6 max-w-12xl
//       flex flex-col justify-center items-center"
//     >
//       <h1 className="text-2xl mb-3 md:text-3xl mt-75"> Experience</h1>
//       <div className="flex flex-col md:flex-row justify-center items-center">
//         {ExperienceData.map((exp, index) => {
//           return (
//             <div
//               className="flex felx-col items-center align-middle justify-center
//               w-full md:w-1/2 lg:w-1/3 p-4 m-2 bg-white rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               data-aos-duration="1000"
//               key={index}
//             >
//               <img
//                 src={require(`../../assets/${exp.logo}.png`)}
//                 alt={exp.logo}
//                 className="w-16 h-16 mb-4"
//               />
//               <h2 className="text-lg font-bold">{exp.title}</h2>
//               <h3 className="text-md font-semibold">{exp.company}</h3>
//               <p className="text-sm text-gray-600">{exp.duration}</p>
//               <p className="mt-2 text-gray-800">{exp.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Experience;
// ExperienceData.js

// Experience.jsx
// import React from "react";
// import ExperienceData from "../ui/ExperiencData";
// const Experience = ({ id }) => {
//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-delay="100"
//       id={id}
//       className="experience h-full w-full sm:w-11/12 md:w-3/4 mx-auto px-2 sm:px-4 md:px-6 max-w-12xl
//       flex flex-col justify-center items-center"
//     >
//       <h1 className="text-2xl mb-3 md:text-3xl mt-75">Experience</h1>
//       <div className="flex flex-col md:flex-row justify-center items-center">
//         {ExperienceData.map((exp, index) => (
//           <div
//             className="flex flex-col items-center align-middle justify-center
//             w-full md:w-1/2 lg:w-1/3 p-4 m-2"
//             data-aos="fade-up"
//             data-aos-delay={`${index * 100}`}
//             data-aos-duration="1000"
//             key={index}
//           >
//             <div className="flex flex-row justify-center items-center gap-4">
//               <span>
//                 <img
//                   src={exp.logo}
//                   alt={`${exp.company} logo`}
//                   className="w-45 h-45 mb-4"
//                 />
//               </span>
//               <span>text</span>
//             </div>
//             <div>hello</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;
import React from "react";
import ExperienceData from "../ui/ExperiencData";

const Experience = ({ id }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      id={id}
      className="experience w-full h-screen py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Professional Experience
      </h1>
      <div className="space-y-8">
        {ExperienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-[#ffffff1a] shadow-lg rounded-xl overflow-hidden 
            flex flex-col md:flex-row items-stretch"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="1000"
          >
            {/* Logo Section */}
            <div className="w-full md:w-1/4 bg-gray/10 flex items-center justify-center p-6">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="max-w-[250px] max-h-[250px] object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/4 p-6">
              <h2 className="text-2xl font-semibold text-black-800 mb-2">
                {exp.title}
              </h2>
              <hr className="stroke-gray-400 mb-4" />

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-black-600 text-lg ">{exp.company}</p>

                  <p className="text-black-500 text-sm">{exp.duration}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
{
  /* <img
src={exp.logo}
alt={`${exp.company} logo`}
className="w-16 h-16 mb-4"
/>
<h2 className="text-lg font-bold">{exp.title}</h2>
<h3 className="text-md font-semibold">{exp.company}</h3>
<p className="text-sm text-gray-600">{exp.duration}</p>
<p className="mt-2 text-gray-800">{exp.description}</p> */
}
