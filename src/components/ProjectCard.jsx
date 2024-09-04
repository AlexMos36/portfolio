import React, { useEffect, useRef, useState } from "react";

const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCardRef = cardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when the card goes out of view
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
      }
    );

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-full max-w-md mx-auto h-[450px] overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-1000 p-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
      <div className="p-4 text-center bg-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="flex justify-between mt-2">
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black text-black py-2 px-4 rounded-md hover:bg-black hover:text-white transition duration-300"
          >
            Website
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black text-black py-2 px-4 rounded-md hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
