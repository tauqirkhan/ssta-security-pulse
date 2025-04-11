
import React from "react";
import { cn } from "@/lib/utils";

const SectorCard = ({ title, description, icon, className, style }) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {React.cloneElement(icon, { className: "text-ssta-gold" })}
      </div>
      <h3 className="text-xl font-bold mb-3 text-ssta-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SectorCard;
