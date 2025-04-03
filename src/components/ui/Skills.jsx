import React from "react";
import JavascriptOriginal from "react-devicons/javascript/original";
import Css3OriginalWordmark from "react-devicons/css3/original-wordmark";
import AngularjsOriginalWordmark from "react-devicons/angularjs/original-wordmark";
import Html5Original from "react-devicons/html5/original";
import ReactOriginal from "react-devicons/react/original";
import NodejsOriginalWordmark from "react-devicons/nodejs/original-wordmark";
import ExpressOriginal from "react-devicons/express/original";
import GitOriginalWordmark from "react-devicons/git/original-wordmark";
import MongodbOriginalWordmark from "react-devicons/mongodb/original-wordmark";
import PythonOriginalWordmark from "react-devicons/python/original-wordmark";
import SkillsData from "./skillsData";

const Skills = ({ id }) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="500"
      id={id}
      className="h-screen w-full sm:w-11/12 md:w-3/4 mx-auto px-2 sm:px-4 md:px-6 max-w-12xl 
      flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl mb-3 md:text-3xl font-semibold">Skills</h1>
      <div className="flex flex-wrap max-w-4xl mx-auto justify-center items-center w-full h-auto mb-5">
        <div className="w-1/4 p-4 flex justify-center transition-all duration-300 ease-in-out hover:scale-125 ">
          <JavascriptOriginal className="!h-30 !w-30" />
        </div>

        <div className="w-1/4 p-4 flex justify-center transition-all duration-300 ease-in-out hover:scale-125 ">
          <ReactOriginal className="!h-30 !w-30" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <NodejsOriginalWordmark className="!h-30 !w-30 transition-all duration-300 ease-in-out hover:scale-125" />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row justify-center items-center gap-4 w-full h-auto">
        {SkillsData.map((skill, index) => {
          return (
            <span
              className="font-[500] flex-col justify-center items-center p-3 inline-flex rounded-lg bg-indigo-300 border-1 border-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
              key={index}
            >
              <h4 key={index}>{skill}</h4>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
