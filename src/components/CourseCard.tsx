
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import { CSSProperties } from "react";

interface CourseCardProps {
  title: string;
  category: string;
  description?: string;
  className?: string;
  style?: CSSProperties;
}

const CourseCard = ({
  title,
  category,
  description,
  className,
  style,
}: CourseCardProps) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100",
        className
      )}
      style={style}
    >
      <div className="flex items-center mb-4">
        <Award className="text-ssta-gold w-6 h-6 mr-2" />
        <span className="text-sm font-medium text-ssta-gold">{category}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-ssta-dark">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default CourseCard;
