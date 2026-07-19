"use client";

import { useEffect, useState } from "react";

const SplashLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center  w-full  relative">
        {/* Diagonal Stripes Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />
        <span className="animate-spin h-12 w-12 border-4 border-secondary border-t-transparent rounded-full" />
      </div>
    );
  }

  return <>{children}</>;
};

export default SplashLoader;
