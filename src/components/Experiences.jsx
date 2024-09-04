import React, { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Start2impact University",
    date: "November 2023 - July 2024",
    description:
      "I recently completed a Front-End Development Master with Start to Impact University, where I gained solid knowledge in HTML, CSS, JavaScript, and basic TypeScript. I also studied frameworks like React and TailwindCSS to enhance my skills in building modern web applications. Throughout the course, I developed several personal projects that demonstrate my understanding of responsive design, component-based architecture, and clean code practices. You can explore these projects in the portfolio's projects section. This course provided me with a strong foundation to create interactive and user-friendly websites, and I'm eager to apply these skills in real-world development.",
  },
  {
    title: "Penstock Installer",
    date: "June 2020 - September 2022",
    description:
      "I worked for two years as an assembly worker for penstocks, traveling across Italy and internationally. My responsibilities included preparing pipe sections, setting up the assembly field, and ensuring proper support for accurate height alignment. Often, the pipe segments were transported by helicopter, requiring precise coordination and quick adjustments. Once positioned, I used specialized tools to install the pipes with minimal flaws, ensuring optimal alignment and functionality. My work demanded attention to detail, safety awareness, and the ability to work efficiently under pressure in diverse environments.",
  },
  {
    title: "Warehouse",
    date: "September 2017 - May 2020",
    description:
      "I worked as a warehouse metalworker, where I was responsible for the preparation, handling, and assembly of metal components. My duties included reading and interpreting blueprints, cutting and shaping metal parts, and operating various machinery to assemble and finish products to precise specifications. I ensured that all materials were organized and readily available for production, maintaining a safe and efficient workspace. My role required attention to detail, strong technical skills, and a commitment to quality, contributing to the timely completion of projects.",
  },
];

const Experiences = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prevVisibleSections) => [
              ...prevVisibleSections,
              entry.target.getAttribute("data-id"),
            ]);
          } else {
            setVisibleSections((prevVisibleSections) =>
              prevVisibleSections.filter(
                (id) => id !== entry.target.getAttribute("data-id")
              )
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-8 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-2 lg:px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-black text-center">
          EXPERIENCES
        </h2>
        <p className="text-xl sm:text-2xl lg:text-4xl mt-2 pb-6 text-center text-gray-500">
          My formation
        </p>
        <div className="mt-6 flex justify-center">
          {/* Left fixed timeline */}
          <div className="w-2 relative">
            <div className="sticky top-24">
              <div className="border-l-4 border-gray-300 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>

          {/* Experience cards */}
          <div className="w-full sm:w-5/6 lg:w-4/6 space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                data-id={index}
                className={`relative pl-4 sm:pl-6 lg:pl-8 transition-opacity duration-700 ease-in-out transform ${
                  visibleSections.includes(String(index))
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="absolute left-0 w-6 h-6 rounded-full bg-gray-800 border-4 border-white"></div>
                <div className="text-left">
                  <div className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    {exp.title}
                  </div>
                  <span className="ml-4 text-gray-800 text-md sm:text-lg lg:text-xl">
                    {exp.date}
                  </span>
                  <p className="mt-2 text-gray-600 text-sm sm:text-md lg:text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
