import React from 'react';
import PerformanceChecker from './PerformanceChecker';

const fundamentals = [
  {
    heading: 'Bitcoin Price',
    value: <>$16,815.46</>,
  },
  {
    heading: 'Market Cap',
    value: <>$323,507,290,047</>,
  },
  {
    heading: '24h Low / 24h High',
    value: <>$16,382.07 / $16,874.12</>,
  },
  {
    heading: 'Market Cap Dominance',
    value: <>38.343%</>,
  },
  {
    heading: '7d Low / 7d High',
    value: <>$16,382.07 / $16,874.12</>,
  },
  {
    heading: 'Volume / Market Cap',
    value: <>0.0718</>,
  },
  {
    heading: 'Trading Volume',
    value: <>$23,249,202,782</>,
  },
  {
    heading: 'All-Time High',
    value: (
      <>
        <div className='m-0 p-0'>
          <p className='m-0 p-0'>$69,044.77 <span className='m-0 p-0 text-red-500'>&nbsp;-75.6%</span></p>
          <p className='text-[10px] m-0 p-0 font-normal'>
            Nov 10, 2021 (about 1 year)
          </p>
        </div>
      </>
    ),
  },
  {
    heading: 'Market Cap Rank',
    value: <>#1</>,
  },
  {
    heading: 'All-Time Low',
    value: (
      <>
        <div className='relative m-0 p-0'>
          <p className='m-0 p-0'>$67.81 <span className='m-0 p-0 text-green-500'>&nbsp;24729.1%</span></p>
          <p className='p-0 m-0 text-[10px] font-normal'>
            {' '}
            Jul 06, 2013 (about 9 years)
          </p>
        </div>
      </>
    ),
  },
];

const Performance = () => {
  return (
    <div className='rounded-lg bg-white p-6'>
      <h3 className='font-Poppins text-[22px] font-semibold'>Performance</h3>
      <div className='my-5 grid grid-cols-10 gap-x-8 gap-y-5 text-[12px] text-gray-500'>
        <div className='col-span-1 flex flex-col'>
          <span>Today&apos;s Low</span>
          <span className='font-medium text-gray-900'>46, 930.22</span>
        </div>
        <PerformanceChecker value={true} />
        <div className='col-span-1 flex flex-col items-center'>
          <span>Today&apos;s High</span>
          <span className='font-medium text-gray-900'>46, 930.22</span>
        </div>
        <div className='col-span-1 flex flex-col'>
          <span>52W Low</span>
          <span className='font-medium text-gray-900'>46, 930.22</span>
        </div>
        <PerformanceChecker value={false} />
        <div className='col-span-1 flex flex-col items-center'>
          <span>52W High</span>
          <span className='font-medium text-gray-900'>46, 930.22</span>
        </div>
      </div>
      <h3 className='font-Poppins text-lg font-semibold text-gray-600'>
        Fundamentals ℹ️
      </h3>
      <div className='mr-4 mt-4 grid grid-cols-1 gap-x-28 text-sm lg:grid-cols-2 lg:text-base font-Poppins'>
        {fundamentals.map((item, index) => (
          <div
            className='flex items-center justify-between  border-b border-b-gray-300 py-4 font-medium'
            key={index}
          >
            <span className='text-gray-500 text-[14px]'>{item.heading}</span>
            <span className='text-right text-[13px]'>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
