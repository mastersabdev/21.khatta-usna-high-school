import Image from "next/image";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-primary-100 transition-all duration-500 px-4 py-6 text-center group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-primary-100 group-hover:shadow-lg transition-all duration-500 relative mb-6">
          <Image
            className="object-cover group-hover:scale-110 transition-transform duration-700 object-top"
            src={teacher?.image_url}
            alt={teacher?.name}
            height={300}
            width={300}
            quality={100}
          />
          {/* Subtle ring effect on hover */}
          <div className="absolute inset-0 rounded-full ring-2 ring-primary-100 ring-offset-2 ring-offset-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-700 transition-colors duration-300">
            {teacher?.name}
          </h3>
          <div className="space-y-2">
            <p className="text-xs text-primary-700 font-semibold bg-primary-50 rounded-full px-4 py-2 inline-block">
              {teacher?.designation}
            </p>

            {teacher?.email && (
              <p className="text-sm text-slate-500 font-medium hover:text-primary-700 transition-colors duration-300">
                Email: {teacher?.email}
              </p>
            )}

            {teacher?.mobile_no && (
              <p className="text-sm text-slate-500 font-medium hover:text-primary-700 transition-colors duration-300">
                Mobile: {teacher?.mobile_no}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
