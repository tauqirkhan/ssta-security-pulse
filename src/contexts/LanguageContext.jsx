
import React, { createContext, useState, useContext, useEffect } from "react";

// Create the language context
const LanguageContext = createContext();

// Hook for easy usage of the language context
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
    // Update document direction based on language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  // Function to toggle language between English and Arabic
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
