import React, { useState, useEffect } from "react";

const Loading = ({ onComplete }) => {
  const translations = [
    "Bine ați venit", // Romanian
    "Benvenuto", // Italian
    "Bienvenue", // French
    "Welkom", // Dutch
    "Bienvenido", // Spanish
    "Welcome", // English
    "Witamy", // Polish
    "Bem-vindo", // Portuguese
    "Добродошли", // Serbian
    "Laipni lūdzam", // Latvian
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < translations.length) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 300); // Change language every 0.5 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    } else {
      // After all translations are shown, complete loading
      setLoadingComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, translations.length, onComplete]);

  if (loadingComplete) {
    return null; // Hide the loading screen after all translations
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-white text-4xl animate-pulse">
        {translations[currentIndex]}
      </div>
    </div>
  );
};

export default Loading;
