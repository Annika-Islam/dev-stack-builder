// import React from 'react';
// import { X, Trash2, Layers } from 'lucide-react';

// const YourStack = ({ stackItems, onRemoveFromStack, onRemoveAll }) => {
//   return (
//     <div className="bg-base-100 rounded-2xl p-6 border border-base-200 shadow-sm sticky top-20">
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-base-200 pb-4 mb-4">
//         <div className="flex items-center gap-2">
//           <Layers className="w-5 h-5 text-pink-500" />
//           <h2 className="text-xl font-bold">Your Stack</h2>
//         </div>
//         <span className="badge bg-pink-500/10 text-pink-500 font-bold border-none px-3 py-1">
//           {stackItems.length} Selected
//         </span>
//       </div>

//       {/* List or Empty State */}
//       {stackItems.length === 0 ? (
//         <div className="text-center py-10 space-y-3">
//           <div className="w-16 h-16 rounded-full bg-base-200 mx-auto flex items-center justify-center text-base-content/40">
//             <Layers className="w-8 h-8" />
//           </div>
//           <p className="font-semibold text-base-content/80">Your stack is empty</p>
//           <p className="text-xs text-base-content/50 max-w-xs mx-auto">
//             Click "Add to Stack" on any technology card to add it to your personal dev stack.
//           </p>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
//             {stackItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between p-3 bg-base-200/50 rounded-xl border border-base-200"
//               >
//                 <div className="flex items-center gap-3">
//                   <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
//                   <div>
//                     <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
//                     <span className="text-xs text-base-content/60">{item.category}</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => onRemoveFromStack(item.id)}
//                   className="btn btn-ghost btn-xs btn-circle text-base-content/50 hover:text-error hover:bg-error/10"
//                   title="Remove item"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Remove All Button */}
//           <button
//             onClick={onRemoveAll}
//             className="w-full btn btn-outline btn-error btn-sm rounded-xl font-semibold gap-2 mt-2"
//           >
//             <Trash2 className="w-4 h-4" /> Remove All
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default YourStack;


 


import React from 'react';
import { X, Trash2 } from 'lucide-react';

const YourStack = ({ stackItems, onRemoveFromStack, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-20">
      
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-black">Your Stack</h2>
        <p className="text-sm text-gray-400 mt-1">
          {stackItems.length === 0
            ? 'No technologies selected yet.'
            : `${stackItems.length} Technology Selected`}
        </p>
      </div>

      {/* Empty State */}
      {stackItems.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 px-4 text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        /* List of Items */
        <div className="space-y-3">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h4 className="font-bold text-sm leading-tight text-black">
                    {item.name}
                  </h4>
                  <span className="text-xs text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onRemoveFromStack(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                title="Remove item"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 rounded-lg border border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 transition-colors flex items-center justify-center gap-2 mt-4"
          >
            <Trash2 className="w-4 h-4" /> Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;