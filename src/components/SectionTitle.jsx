
import React from "react";
import { cn } from "@/lib/utils";

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className 
}) => {
  return (
    <div className={cn(
      "mb-10",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-ssta-dark mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
