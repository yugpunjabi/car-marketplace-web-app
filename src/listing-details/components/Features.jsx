import React from 'react';
import { FaCheck } from "react-icons/fa";

function Features({ features }) {
  if (!features || typeof features !== 'object') {
    return (
      <div className='p-5 my-7 rounded-xl border shadow-md'>
        <h2 className='font-medium text-2xl'>Features</h2>
        <p className='text-gray-500'>No features available.</p>
      </div>
    );
  }

  const featureEntries = Object.entries(features).filter(([_, value]) => value === true);

  return (
    <div className='p-5 my-7 rounded-xl border shadow-md'>
      <h2 className='font-medium text-2xl mb-4'>Features</h2>
      {featureEntries.length > 0 ? (
        <div className='grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {featureEntries.map(([feature, _], index) => (
            <div key={index} className='flex items-center gap-2'>
              <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-blue-500' />
              <span className='capitalize'>{feature.replace(/([A-Z])/g, ' $1')}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-500'>No features listed.</p>
      )}
    </div>
  );
}

export default Features;
