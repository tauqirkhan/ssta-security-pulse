
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
    
    // Add language-specific class to body for additional styling
    if (language === "ar") {
      document.body.classList.add("arabic-lang");
      document.body.classList.remove("english-lang");
    } else {
      document.body.classList.add("english-lang");
      document.body.classList.remove("arabic-lang");
    }
  }, [language]);

  // Function to toggle language between English and Arabic
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  // Function to set a specific language
  const setSpecificLanguage = (lang) => {
    if (lang === "en" || lang === "ar") {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setSpecificLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
