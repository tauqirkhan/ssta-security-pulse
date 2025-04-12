
import React from "react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

const SectorCard = ({ 
  title, 
  description, 
  icon, 
  className, 
  style 
}) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100",
        className
      )}
      style={style}
    >
      <div className="bg-ssta-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {icon && React.cloneElement(icon, { className: "text-ssta-gold" })}
      </div>
      <h3 className="text-xl font-bold mb-2 text-ssta-dark">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default SectorCard;
