import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png"; // Make sure this path is correct
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setShowBurger(true); // Always show burger menu on small screens
    } else {
      setShowBurger(scrolled); // Show burger only if scrolled on larger screens
    }
  };

  useEffect(() => {
    handleResize();

    const handleScroll = () => {
      const navHeight = document.querySelector("nav").offsetHeight;
      if (window.scrollY > navHeight) {
        setScrolled(true);
        if (window.innerWidth > 768) {
          setTimeout(() => setShowBurger(true), 100); // Show burger menu with a slight delay on larger screens
        }
      } else {
        setScrolled(false);
        if (window.innerWidth > 768) {
          setShowBurger(false); // Hide burger menu when scrolling back up on larger screens
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling when menu is open
    } else {
      document.body.style.overflow = "auto"; // Allow background scrolling when menu is closed
    }
    return () => {
      document.body.style.overflow = "auto"; // Ensure overflow is always reset on component unmount
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.location.reload(); // Reload the page when the logo is clicked
  };

  const handleNavigationClick = (section) => {
    setIsOpen(false);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 overflow-x-hidden">
      <div
        className={`w-full mx-auto px-4 transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div
            className="flex-shrink-0 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="block cursor-pointer"
              onClick={handleLogoClick} // Logo click triggers page reload
              style={{
                width: isHovered ? "300px" : "150px",
                transition: "width 1s ease",
              }}
            >
              <span className="block md:hidden pt-5">
                <img
                  src={logo}
                  alt="Logo"
                  className="fixed h-16 md:h-16 lg:h-16 w-auto"
                />
              </span>

              <span className="hidden md:inline-block">
                <img
                  src={logo}
                  alt="Logo"
                  className={`h-16 md:h-16 lg:h-24 w-auto transition-transform duration-500 ease-in-out ${
                    isHovered ? "rotate-[360deg]" : "rotate-0"
                  }`}
                  style={{
                    display: "inline-block",
                    marginRight: "8px",
                    transition: "transform 1s ease",
                    height: "84px",
                  }}
                />
                <span
                  className={`absolute top-8 left-24 transition-all duration-1000 ease-in-out whitespace-nowrap text-black ${
                    isHovered
                      ? "transform translate-x-0 opacity-100"
                      : "transform translate-x-full opacity-0"
                  }`}
                >
                  Alexandru B. Mos
                </span>
              </span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigationClick("about")}
              className="text-black font-bold hover:text-gray-700"
            >
              About
            </button>
            <button
              onClick={() => handleNavigationClick("projects")}
              className="text-black font-bold hover:text-gray-700"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigationClick("experiences")}
              className="text-black font-bold hover:text-gray-700"
            >
              Experiences
            </button>
            <button
              onClick={() => handleNavigationClick("contact")}
              className="text-black font-bold hover:text-gray-700"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Burger Menu */}
      {showBurger && (
        <div
          className={`fixed top-4 right-4 z-50 transition-opacity duration-700 ease-in-out transform ${
            scrolled || window.innerWidth <= 768
              ? "opacity-100 translate-y-0"
              : "hidden -translate-y-2"
          }`}
        >
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white bg-gray-900 p-4 rounded-full focus:outline-none transform transition-transform hover:scale-110"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-8 h-8"
            />
          </button>
        </div>
      )}

      {/* Mobile menu (displayed only when isOpen is true) */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className={`fixed top-0 right-0 w-full h-screen z-40 bg-gray-900 transform transition-all duration-500 ease-in-out md:w-1/2 lg:w-1/3 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center items-start h-full space-y-8 px-8">
            <button
              onClick={() => handleNavigationClick("home")}
              className="text-white hover:text-gray-300 text-5xl font-bold"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigationClick("about")}
              className="text-white hover:text-gray-300 text-5xl font-bold"
            >
              About
            </button>
            <button
              onClick={() => handleNavigationClick("projects")}
              className="text-white hover:text-gray-300 text-5xl font-bold"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigationClick("experiences")}
              className="text-white hover:text-gray-300 text-5xl font-bold"
            >
              Experiences
            </button>
            <button
              onClick={() => handleNavigationClick("contact")}
              className="text-white hover:text-gray-300 text-5xl font-bold"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
