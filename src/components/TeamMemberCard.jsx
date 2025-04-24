import React from "react";
import { cn } from "@/lib/utils";

import { useState } from "react";

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
      className={`group relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${className}`}
      style={style}
    >
      {/* Image + Bio Overlay */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          draggable="false"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {bio && (
          <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto">
            <div
              className="w-full h-full px-4 py-3 text-sm leading-relaxed overflow-y-auto overflow-x-hidden scroll-smooth"
              style={{
                scrollbarWidth: "thin", // Firefox
                scrollbarColor: "#9ca3af transparent", // Firefox fallback
              }}
            >
              <p
                className="whitespace-pre-line"
                style={{
                  minHeight: "100%", // makes scroll possible even for short text
                }}
              >
                {bio}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Name & Position */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-ssta-dark">{name}</h3>
        <p className="text-ssta-gold font-medium mb-3">{position}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
