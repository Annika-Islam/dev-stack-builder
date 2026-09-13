
import React from 'react';
import { Star, Check } from 'lucide-react';

const TechCard = ({ tech, onAddToStack, isAdded }) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div
      className={`bg-white rounded-2xl p-5 border transition-all flex flex-col justify-between h-full ${
        isAdded
          ? 'border-2 border-pink-500 shadow-lg shadow-pink-200/50' 
          : 'border border-gray-200 shadow-sm hover:shadow-md' 
      }`}
    >
      <div>
          <div className="flex items-center justify-between mb-4">
          
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          
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

        
        <h3 className="text-xl font-bold text-black mb-2">{name}</h3>

         <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-2">
          
            <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
              {category}
            </span>
           
            <span>{difficulty}</span>
          </div>
          
          <div className="flex items-center gap-1 font-semibold text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            <span>{rating}</span>
          </div>
        </div>

          <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1 ${
            isAdded
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-[#0f172a] text-white hover:bg-black shadow-md' 
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