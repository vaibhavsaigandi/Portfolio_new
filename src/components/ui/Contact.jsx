// import React from "react";
// import LinkedinOriginalWordmark from "react-devicons/linkedin/original-wordmark";
// import GithubOriginalWordmark from "react-devicons/github/original-wordmark";

// const Contact = ({ id }) => {
//   return (
//     <div
//       id={id}
//       className="contact flex flex-col items-center justify-center w-full h-screen"
//     >
//       <div className="text-4xl font-bold">Get in touch</div>
//       <br />

//       <br />

//       <div className="tetx-2xl font-semibold"> Phone:+13527211148</div>
//       <br />

//       <br />

//       <div className="flex gap-4 mt-4">
//         <a href="https://github.com/vaibhavsaigandi">
//           <i class="fa-brands fa-github"></i>
//         </a>
//         <a
//           onClick={() =>
//             window.open("https://www.linkedin.com/in/vaibhavsaigandi/")
//           }
//         >
//           <i class="fa-brands fa-linkedin"></i>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";

const Contact = ({ id }) => {
  const githubLink = "https://github.com/vaibhavsaigandi";
  const linkedinLink = "https://www.linkedin.com/in/vaibhavsaigandi/";
  const mailId = "gandisaivaibhav@gmail.com";

  return (
    <div
      id={id}
      className="contact flex flex-col items-center justify-center w-full min-h-screen py-16 px-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="text-center max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h1>
        <p className="text-xl mb-8 text-gray-600">Feel free to reach out!</p>

        <div className="mb-8">
          <div className="text-xl mb-2 text-gray-700">
            <span className="font-semibold">Phone:</span> +1 352-721-1148
          </div>
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors text-4xl"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors text-4xl"
          >
            {" "}
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href={`mailto:${mailId}`}
            className="text-gray-700 hover:text-gray-900 transition-colors text-4xl"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
