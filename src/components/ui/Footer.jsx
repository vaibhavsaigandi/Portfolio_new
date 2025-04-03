import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-sm">
          © 2025 Vaibhav Sai Gandi | All Rights Reserved
        </p>
        <p className="text-gray-500 text-xs mt-2">
          This website is built using React, Next.js, and Tailwind CSS.
          <span role="img" aria-label="love">
            ❤️❤️
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
