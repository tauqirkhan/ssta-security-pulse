import React from "react";
import { cn } from "@/lib/utils";

const TeamMemberCard = ({
  name,
  position,
  imageUrl,
  description,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl",
        className
      )}
      style={style}
    >
      <div className="h-60 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          draggable="none"
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-ssta-dark">{name}</h3>
        <p className="text-ssta-gold font-medium mb-3">{position}</p>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default TeamMemberCard;
