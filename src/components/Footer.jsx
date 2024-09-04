import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-1 flex justify-center">
      <div className="items-center">
        <p>
          &copy; {new Date().getFullYear()} Portfolio Alexandru B. Mos. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
