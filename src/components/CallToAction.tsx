
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
}: CallToActionProps) => {
  return (
    <section className="bg-ssta-navy py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">{description}</p>
        <Button
          asChild
          className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold text-lg px-8 py-6"
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
