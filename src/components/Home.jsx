import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AlexAnime from "../assets/AlexAnime.png";

const Home = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="relative w-full h-screen text-black flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-8 overflow-x-hidden">
      {/* Text Section */}
      <div className="flex-1 z-20 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold pt-8 mb-8 md:mb-0">
          Junior Frontend Developer
        </h1>
        <p className="mt-4 text-lg md:text-xl md:mt-4">
          I design and develop websites and applications with a focus on user
          experience and performance.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center z-10">
        <img
          src={AlexAnime}
          alt="Alex Anime"
          className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Social Media Icons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20 hidden md:flex">
        <div className="flex justify-end">
          <a
            href="https://github.com/AlexMos36"
            className="relative flex items-center text-white text-xl bg-gray-800 p-2 rounded-md transition-all duration-300 hover:bg-gray-700"
            onMouseEnter={() => setHoveredIcon("github")}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              width: hoveredIcon === "github" ? "180px" : "50px",
              paddingLeft: hoveredIcon === "github" ? "20px" : "0px",
            }}
          >
            <FaGithub className="w-6 h-6 absolute left-2" />
            <span
              className={`ml-10 transition-opacity duration-300 ${
                hoveredIcon === "github" ? "opacity-100" : "opacity-0"
              }`}
            >
              GitHub
            </span>
          </a>
        </div>

        <div className="flex justify-end">
          <a
            href="https://www.linkedin.com/in/mos-alexandru/"
            className="relative flex items-center text-white text-xl bg-blue-700 p-2 rounded-md transition-all duration-300 hover:bg-blue-600"
            onMouseEnter={() => setHoveredIcon("linkedin")}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              width: hoveredIcon === "linkedin" ? "160px" : "50px",
              paddingLeft: hoveredIcon === "linkedin" ? "20px" : "0px",
            }}
          >
            <FaLinkedin className="w-6 h-6 absolute left-2" />
            <span
              className={`ml-6 transition-opacity duration-300 ${
                hoveredIcon === "linkedin" ? "opacity-100" : "opacity-0"
              }`}
            >
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
