const ContactLoadingPage = () => {
  return (
    <main className="mt-4 lg:mt-8 container">
      {/* Contact Information Section Skeleton */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact Info Skeleton */}
        <div className="relative rounded-3xl border border-slate-100 bg-white/70 backdrop-blur-md shadow-2xl p-6 sm:p-12 h-full overflow-hidden">
          {/* Title Skeleton */}
          <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mb-10 animate-pulse"></div>
          
          {/* Contact Items Skeleton */}
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-5 bg-primary-50/40 rounded-2xl p-4">
                {/* Icon Skeleton */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"></div>
                <div className="flex-1">
                  {/* Label Skeleton */}
                  <div className="h-5 bg-slate-200 rounded-md mb-2 w-20 animate-pulse"></div>
                  {/* Content Skeleton */}
                  <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Skeleton */}
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          {/* Form Title Skeleton */}
          <div className="h-7 bg-slate-200 rounded-lg mb-6 w-32 animate-pulse"></div>
          
          {/* Form Fields Skeleton */}
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <div className="h-4 bg-slate-200 rounded w-16 mb-2 animate-pulse"></div>
              <div className="h-12 bg-slate-100 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Email Field */}
            <div>
              <div className="h-4 bg-slate-200 rounded w-20 mb-2 animate-pulse"></div>
              <div className="h-12 bg-slate-100 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Subject Field */}
            <div>
              <div className="h-4 bg-slate-200 rounded w-16 mb-2 animate-pulse"></div>
              <div className="h-12 bg-slate-100 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Message Field */}
            <div>
              <div className="h-4 bg-slate-200 rounded w-20 mb-2 animate-pulse"></div>
              <div className="h-32 bg-slate-100 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Submit Button */}
            <div className="h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Map Section Skeleton */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Map Header Skeleton */}
        <div className="p-6 border-b border-slate-100">
          <div className="h-6 bg-slate-200 rounded-lg w-32 animate-pulse"></div>
        </div>
        
        {/* Map Content Skeleton */}
        <div className="h-96 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 animate-pulse relative">
          {/* Map Pin Icons Skeleton */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-red-300 rounded-full animate-bounce"></div>
          </div>
          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-primary-200 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
            <div className="w-6 h-6 bg-green-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactLoadingPage;