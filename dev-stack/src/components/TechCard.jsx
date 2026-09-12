// import React from 'react';
// import { Star, Plus, Check } from 'lucide-react';

// const TechCard = ({ tech, onAddToStack, isAdded }) => {
//   const { name, category, description, icon, rating, difficulty, badge } = tech;

//   return (
//     <div className="bg-base-100 rounded-2xl p-6 border border-base-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
//       <div>
//         {/* Header: Icon & Badge */}
//         <div className="flex items-center justify-between mb-4">
//           <div className="w-12 h-12 rounded-xl bg-base-200/60 p-2 flex items-center justify-center">
//             <img src={icon} alt={name} className="w-full h-full object-contain" />
//           </div>
//           <span className="badge badge-secondary badge-outline font-semibold">
//             {badge}
//           </span>
//         </div>

//         {/* Title & Category */}
//         <div className="flex items-center justify-between gap-2 mb-2">
//           <h3 className="text-xl font-bold">{name}</h3>
//           <span className="text-xs px-2.5 py-1 bg-brand-gradient text-white font-medium rounded-full">
//             {category}
//           </span>
//         </div>

//         {/* Description */}
//         <p className="text-base-content/70 text-sm mb-4 line-clamp-2">
//           {description}
//         </p>
//       </div>

//       <div>
//         {/* Meta Info: Difficulty & Rating */}
//         <div className="flex items-center justify-between text-xs text-base-content/60 border-t border-base-200 pt-3 mb-4">
//           <span>Difficulty: <strong className="text-base-content">{difficulty}</strong></span>
//           <div className="flex items-center gap-1 font-semibold text-amber-500">
//             <Star className="w-4 h-4 fill-amber-500" />
//             <span>{rating}</span>
//           </div>
//         </div>

//         {/* Add to Stack Button */}
//         <button
//           onClick={() => onAddToStack(tech)}
//           disabled={isAdded}
//           className={`w-full btn btn-sm rounded-xl font-semibold border-none transition-all ${
//             isAdded
//               ? 'bg-base-300 text-base-content/50 cursor-not-allowed'
//               : 'bg-brand-gradient text-white hover:opacity-90 shadow-md'
//           }`}
//         >
//           {isAdded ? (
//             <>
//               <Check className="w-4 h-4 mr-1" /> Added to Stack
//             </>
//           ) : (
//             <>
//               <Plus className="w-4 h-4 mr-1" /> Add to Stack
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TechCard;



import React from 'react';
import { Star, Check } from 'lucide-react';

const TechCard = ({ tech, onAddToStack, isAdded }) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div
      className={`bg-white rounded-2xl p-5 border transition-all flex flex-col justify-between h-full ${
        isAdded
          ? 'border-2 border-pink-500 shadow-lg shadow-pink-200/50' // ✅ সিলেক্টেড: পিঙ্ক বর্ডার
          : 'border border-gray-200 shadow-sm hover:shadow-md' // সাধারণ: হালকা ধূসর বর্ডার
      }`}
    >
      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-center justify-between mb-4">
          {/* Icon */}
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          {/* Badge */}
          {badge && (
            <span
              className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                badge === 'Popular'
                  ? 'bg-blue-50 text-blue-500'
                  : badge === 'Versatile'
                  ? 'bg-green-50 text-green-500'
                  : badge === 'Fast'
                  ? 'bg-orange-50 text-orange-500'
                  : badge === 'Standard'
                  ? 'bg-green-50 text-green-500'
                  : badge === 'Top SQL'
                  ? 'bg-blue-50 text-blue-500'
                  : badge === 'Cache'
                  ? 'bg-red-50 text-red-500'
                  : badge === 'Ubiquitous'
                  ? 'bg-yellow-50 text-yellow-600'
                  : badge === 'Essential'
                  ? 'bg-blue-50 text-blue-500'
                  : badge === 'Robust'
                  ? 'bg-blue-50 text-blue-500'
                  : badge === 'Modern'
                  ? 'bg-sky-50 text-sky-500'
                  : badge === 'Containers'
                  ? 'bg-cyan-50 text-cyan-600'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-black mb-2">{name}</h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>
      </div>

      <div>
        {/* Meta Info: Category, Difficulty & Rating */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            {/* Category Pill */}
            <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
              {category}
            </span>
            {/* Difficulty */}
            <span>{difficulty}</span>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-1 font-semibold text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Add to Stack Button */}
        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1 ${
            isAdded
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' // ✅ ক্লিক করার পরে: ধূসর, ডিজেবল
              : 'bg-[#0f172a] text-white hover:bg-black shadow-md' // ✅ ক্লিক করার আগে: গাঢ় কালো
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" /> Added to Stack
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};

export default TechCard;