
import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamMemberCard = ({
  name,
  position,
  imageUrl,
  bio,
  arabicName,
  arabicPosition,
  arabicBio,
  className,
  style,
}) => {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  // Use Arabic content if available and Arabic is selected
  const displayName = isArabic && arabicName ? arabicName : name;
  const displayPosition = isArabic && arabicPosition ? arabicPosition : position;
  const displayBio = isArabic && arabicBio ? arabicBio : bio;

  return (
    <div
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl",
        className
      )}
      style={style}
    >
      {/* Image + Bio Overlay */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={displayName}
          draggable="false"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {displayBio && (
          <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto">
            <div
              className={`w-full h-full px-4 py-3 text-sm leading-relaxed overflow-y-auto overflow-x-hidden scroll-smooth ${isArabic ? "font-arabic text-right" : ""}`}
              style={{
                scrollbarWidth: "thin", // Firefox
                scrollbarColor: "#9ca3af transparent", // Firefox fallback
                direction: isArabic ? "rtl" : "ltr",
              }}
            >
              <p
                className="whitespace-pre-line"
                style={{
                  minHeight: "100%", // makes scroll possible even for short text
                }}
              >
                {displayBio}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Name & Position */}
      <div className={`p-6 ${isArabic ? "text-right" : ""}`}>
        <h3 className={`text-xl font-bold text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>{displayName}</h3>
        <p className={`text-ssta-gold font-medium mb-3 ${isArabic ? "font-arabic" : ""}`}>{displayPosition}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
