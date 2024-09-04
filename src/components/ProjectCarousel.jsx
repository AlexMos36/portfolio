import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard"; // Importing the ProjectCard component
import airtripCO2 from "../assets/airtripCO2.png";
import information from "../assets/information.png";
import books from "../assets/books.png";
import counter from "../assets/counter.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Project data
const projects = [
  {
    title: "COUNTER",
    image: counter,
    website: "https://meek-bunny-a01dee.netlify.app/",
    code: "https://github.com/AlexMos36/Counter?tab=readme-ov-file",
  },
  {
    title: "SEARCH BOOKS",
    image: books,
    website: "https://effulgent-cascaron-aa9824.netlify.app/",
    code: "https://github.com/AlexMos36/Books?tab=readme-ov-file",
  },
  {
    title: "GET INFORMATION",
    image: information,
    website: "https://information-s2i.netlify.app/",
    code: "https://github.com/AlexMos36/react-information?tab=readme-ov-file",
  },
  {
    title: "AIR TRIP CO2",
    image: airtripCO2,
    website: "https://airtripcalculator.netlify.app/",
    code: "https://github.com/AlexMos36/AirTripCO2?tab=readme-ov-file",
  },
];

// Custom arrow components for the slider
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 p-2 text-sm font-bold text-white bg-black rounded-full shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 p-2 text-sm font-bold text-white bg-black rounded-full shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const ProjectCarousel = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // for tablets and smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <h2 className="absolute top-10 w-full text-center text-5xl text-black md:text-6xl lg:text-6xl">
        Projects
      </h2>
      <Slider {...settings} className="w-full px-6">
        {projects.map((project) => (
          <div key={project.title} className="px-2 flex justify-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
