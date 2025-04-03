import React from "react";
import LinkedinOriginalWordmark from "react-devicons/linkedin/original-wordmark";
import GithubOriginalWordmark from "react-devicons/github/original-wordmark";
const Contact = ({ id }) => {
  return (
    <div
      id={id}
      className="contact flex flex-col items-center justify-center w-full h-screen"
    >
      <div className="text-4xl font-bold">Get in touch</div>
      <br />

      <br />

      <div className="tetx-2xl font-semibold"> Phone:+1 3527211148</div>
      <br />
      <div className="text-2xl font-semibold">
        Email: vaibhavsaigandi@gmail.com
      </div>
      <br />

      <div className="flex gap-4 mt-4">
        <a href="https://github.com/vaibhavsaigandi">
          <GithubOriginalWordmark className=" !w-25 !h-25 m-5 object-contain" />
        </a>
        <a
          onClick={() =>
            window.open("https://www.linkedin.com/in/vaibhavsaigandi/")
          }
        >
          <LinkedinOriginalWordmark className=" !w-25 !h-25 m-5 object-contain" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
