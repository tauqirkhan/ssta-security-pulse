
import { cn } from "@/lib/utils";
import React from "react";

const SectorCard = ({
  title,
  description,
  icon,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100",
        className
      )}
      style={style}
    >
      <div className="mb-4 text-ssta-gold">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-ssta-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SectorCard;
