import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary text-text-secondary px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-black mb-4 text-text-primary">404</h1>
        <p className="text-lg mb-8">Page not found.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-[--pulse-primary] text-[--bg-primary] font-semibold px-6 py-3 transition-all hover:bg-[--pulse-secondary] hover:shadow-[0_0_30px_var(--pulse-glow)]"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
