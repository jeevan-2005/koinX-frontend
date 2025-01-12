import React from 'react';

type Props = {
  value: boolean;
};

const PerformanceChecker = ({ value }: Props) => {
  return (
    <div className='relative h-1 self-center rounded-full bg-black bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-gray-900 col-span-8'>
      {value && (
        <div className='absolute left-2/4 top-full flex flex-col items-center gap-0.5 lg:left-3/4 lg:gap-1'>
          <span>▲</span>
          <span>$46.627.83</span>
        </div>
      )}
    </div>
  );
};

export default PerformanceChecker;
