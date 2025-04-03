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

const Skills = ({ id }) => {
  return (
    <div
      id={id}
      className="h-full w-full sm:w-11/12 md:w-3/4 mx-auto px-2 sm:px-4 md:px-6 max-w-12xl flex flex-col justify-center items-center"
    >
      <h1>Skills</h1>
      <div className="flex flex-wrap max-w-4xl mx-auto justify-center items-center w-full h-auto ">
        {/* Each skill takes exactly 25% width to force 4 per row */}
        <div className="w-1/4 p-4 flex justify-center hover:animate-bounce [animation-duration:2s]">
          <JavascriptOriginal className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <Css3OriginalWordmark className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <Html5Original className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <ReactOriginal className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <NodejsOriginalWordmark className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <ExpressOriginal className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <AngularjsOriginalWordmark className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <GitOriginalWordmark className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <MongodbOriginalWordmark className="!h-20 !w-20" />
        </div>
        <div className="w-1/4 p-4 flex justify-center">
          <PythonOriginalWordmark className="!h-20 !w-20" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
