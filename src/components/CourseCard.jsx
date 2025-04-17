
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CourseCard = ({ title, category, description, className, style }) => {
  // Convert title to a URL-friendly format for the section ID
  const sectionId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="h-48 bg-gradient-to-br from-ssta-navy/80 to-ssta-gold/50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <span className="text-white text-4xl font-bold">S</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="inline-block px-3 py-1 bg-ssta-gold/90 text-ssta-dark text-xs font-semibold rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-ssta-dark">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <Button asChild variant="ghost" className="p-0 h-auto text-ssta-navy hover:text-ssta-gold group">
          <Link to={`/courses#${sectionId}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;

