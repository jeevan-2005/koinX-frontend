import Navbar from './Components/Navbar';
import React from 'react';
import CryptoChartInfo from './Components/CryptoChartInfo';
import GetStarted from './Components/GetStarted';
import TabsNavigation from './Components/TabsNavigation';
import Sentiment from './Components/Sentiment';
import AboutBitcoin from './Components/AboutBitcoin';
import Tokenomics from './Components/Tokenomics';
import Team from './Components/Team';
import MoreCoinsData from './Components/MoreCoinsData';

const page = () => {

  return (
    <div>
      <Navbar />
      <div className='mt-[74px] bg-[#eef2f5] py-1'>
        <div className='px-14'>
          <p className='my-3 text-sm font-[16px] text-gray-500'>
            Cryptocurrencies <span className='mx-2'>&gt;&gt;</span>{' '}
            <span className='font-medium text-black'>Bitcoin</span>
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4 px-6  lg:px-14 md:grid-cols-4'>
          <div className='col-span-3'>
            <CryptoChartInfo />
            <TabsNavigation />
            <Sentiment />
            <AboutBitcoin />
            <Tokenomics />
            <Team />
          </div>
          <div className='lg:col-span-1 col-span-0'>
            <GetStarted />
          </div>
        </div>
        <div>
          <MoreCoinsData />
        </div>
      </div>
    </div>
  );
};

export default page;
