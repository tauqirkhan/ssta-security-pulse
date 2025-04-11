
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) => {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-ssta-dark mb-4 relative inline-block",
          titleClassName
        )}
      >
        {title}
        <span className="absolute bottom-0 left-0 h-1 bg-ssta-gold w-1/3 rounded-full"></span>
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-gray-700 max-w-3xl",
            centered && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
