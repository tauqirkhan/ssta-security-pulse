import React from "react";
import { cn } from "@/lib/utils";

const TeamMemberCard = ({
  name,
  position,
  imageUrl,
  bio,
  className,
  style,
}) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${className}`}
      style={style}
    >
      <div className="relative h-60 w-full overflow-hidden group">
        <img
          src={imageUrl}
          alt={name}
          draggable="false"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {bio && (
          <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-center">
            <div
              className="w-full h-full overflow-y-auto px-4 py-3 text-sm leading-relaxed"
              style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE & Edge
                overflowX: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.overflowY = "auto";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.overflowY = "hidden";
              }}
            >
              <p className="whitespace-pre-line">{bio}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-ssta-dark">{name}</h3>
        <p className="text-ssta-gold font-medium mb-3">{position}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
