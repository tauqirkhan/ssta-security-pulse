
import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const SectorCard = ({ 
  title, 
  description, 
  arabicDescription,
  icon, 
  className, 
  style 
}) => {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  // Use Arabic description if provided and Arabic is selected
  const displayDescription = isArabic && arabicDescription ? arabicDescription : description;
  
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100",
        language === "ar" ? "text-right" : "text-left",
        className
      )}
      style={style}
    >
      <div className={`bg-ssta-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${language === "ar" ? "mr-auto" : "ml-0"}`}>
        {icon && React.cloneElement(icon, { className: "text-ssta-gold" })}
      </div>
      <h3 className={`text-xl font-bold mb-2 text-ssta-dark ${language === "ar" ? "font-arabic" : ""} break-words`}>{title}</h3>
      {displayDescription && (
        <p className={`text-gray-600 ${language === "ar" ? "font-arabic" : ""} break-words`}>
          {displayDescription}
        </p>
      )}
    </div>
  );
};

export default SectorCard;
