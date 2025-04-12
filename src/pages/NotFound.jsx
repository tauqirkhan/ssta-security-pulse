
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="flex items-center min-h-screen bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-6xl font-bold text-ssta-dark mb-4">404</h2>
          <h3 className="text-2xl font-semibold text-ssta-dark mb-6">Page Not Found</h3>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild variant="default" className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark">
            <Link to="/" className="flex items-center justify-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
