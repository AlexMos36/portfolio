import React, { useState, useEffect } from "react";
import { RxThickArrowUp } from "react-icons/rx";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.innerWidth > 768) {
      // Only apply visibility toggle on desktop
      if (window.pageYOffset > 300) {
        // Show button after scrolling 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      setIsVisible(false); // Hide button on smaller screens
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility); // Ensure responsiveness on window resize

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 bg-transparent text-black
           p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          aria-label="Scroll to top"
        >
          <RxThickArrowUp size={40} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
