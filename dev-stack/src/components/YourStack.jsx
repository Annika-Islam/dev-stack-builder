
import React from 'react';
import { X, Trash2 } from 'lucide-react';

const YourStack = ({ stackItems, onRemoveFromStack, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-20">
      
      {/* hearder  */}
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