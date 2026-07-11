import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full py-12" role="status" aria-label="Loading page content">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-muted border-t-brand-primary animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-b-brand-secondary animate-pulse"></div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground animate-pulse font-medium tracking-wide">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
