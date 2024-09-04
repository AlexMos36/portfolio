import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = aboutRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="w-full min-h-screen px-8 md:px-10 py-12 relative z-20"
    >
      <div
        className={`w-full h-full transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Circle Icons on the Left */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <div className="relative w-full flex justify-center mt-4 md:mt-6 mb-24 md:mb-0">
              {/* Top Circle */}
              <div
                className={`absolute w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-black transition-transform duration-1000 ${
                  isVisible ? "translate-y-0" : "-translate-y-20"
                }`}
              >
                <FaHtml5 className="text-2xl md:text-4xl text-orange-500" />
              </div>

              {/* Bottom Left Circle */}
              <div
                className={`absolute w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-black transition-transform duration-1000 ${
                  isVisible
                    ? "translate-y-20 md:translate-y-32 -translate-x-16"
                    : "translate-y-32"
                }`}
              >
                <FaCss3Alt className="text-2xl md:text-4xl text-blue-500" />
              </div>

              {/* Bottom Right Circle */}
              <div
                className={`absolute w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-black transition-transform duration-1000 ${
                  isVisible
                    ? "translate-y-20 md:translate-y-32 translate-x-16"
                    : "translate-y-32"
                }`}
              >
                <FaJsSquare className="text-2xl md:text-4xl text-yellow-500" />
              </div>
            </div>
          </div>

          {/* Text on the Right */}
          <div
            className={`w-full md:w-1/2 text-justify mt-32 md:mt-0 flex flex-col justify-center transition-transform duration-1000 ${
              isVisible ? "translate-x-0" : "translate-x-20"
            }`}
          >
            <div className="flex justify-center md:justify-start text-black  pb-8 md:pb-16 text-4xl md:text-6xl">
              About Me
            </div>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              I’m Alexandru Mos, originally from Romania but raised in Italy
              since I was 10. My background is in accounting, but I began my
              career working in warehouse management before moving on to
              construction, specifically in pipeline projects for green energy.
              Through these experiences, I’ve developed strong soft skills like
              problem-solving, effective communication, and teamwork.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800">FOR PROJECTS</h3>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                Over the last couple of years, I’ve become deeply interested in
                frontend development. I’m fascinated by the technology that
                powers the web pages we use every day, and I’m enthusiastic
                about creating clear, responsive, and user-friendly interfaces.
                I’ve gained solid skills in HTML, CSS, JavaScript, and
                frameworks like React and TailwindCSS. Now, I’m eager to start
                my career as a junior frontend developer. I’m especially
                motivated to contribute to projects focused on sustainability
                and renewable energy, where I can use my skills to improve user
                experiences and support the company’s goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
