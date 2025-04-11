
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 pb-20">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="text-red-600 w-16 h-16" />
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4 text-ssta-dark">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
