const RootLoader = () => {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Main Slider Skeleton */}
        <div className="relative">
          <div className="w-full h-[500px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            
            {/* Navigation arrows skeleton */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* Dots skeleton */}
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Welcome Speech Head Teacher Skeleton */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 mx-auto shadow-md rounded-lg bg-primary-100/50">
          {/* Profile section skeleton */}
          <div className="flex flex-col items-center xl:items-start w-full md:w-1/3 space-y-4">
            {/* Profile image skeleton */}
            <div className="w-[250px] h-[250px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full relative overflow-hidden border-3 border-gray-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            </div>
            
            {/* Name skeleton */}
            <div className="w-40 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            </div>
            
            {/* Designation skeleton */}
            <div className="w-32 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            </div>
          </div>

          {/* Speech content skeleton */}
          <div className="w-full md:w-2/3 space-y-4">
            {/* Title skeleton */}
            <div className="w-48 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            </div>
            
            {/* Speech text skeleton */}
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded relative overflow-hidden ${
                  i === 5 ? 'w-3/4' : 'w-full'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Welcome Speech President Skeleton */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 mx-auto shadow-md rounded-lg bg-primary-50/50">
          {/* Profile section skeleton */}
          <div className="flex flex-col items-center xl:items-start w-full md:w-1/3 space-y-4">
            {/* Profile image skeleton */}
            <div className="w-[250px] h-[250px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full relative overflow-hidden border-3 border-gray-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            </div>
            
            {/* Name skeleton */}
            <div className="w-44 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            </div>
            
            {/* Designation skeleton */}
            <div className="w-36 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            </div>
          </div>

          {/* Speech content skeleton */}
          <div className="w-full md:w-2/3 space-y-4">
            {/* Title skeleton */}
            <div className="w-48 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
            </div>
            
            {/* Speech text skeleton */}
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded relative overflow-hidden ${
                  i === 4 ? 'w-2/3' : 'w-full'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -skew-x-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default RootLoader;