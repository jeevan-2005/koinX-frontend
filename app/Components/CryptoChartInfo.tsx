'use client';
import React, { useEffect, useState } from 'react';
import commaNumber from 'comma-number';
import bitcoinImg from '../../public/assests/bitcoinImg.png';
import Image from 'next/image';
import CoinChart from '../Components/CoinChart';

const COINGECKO_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true';

const CryptoChartInfo = () => {
  const [cryptoInfo, setCryptoInfo] = useState({
    dollarValue: 0,
    rupeeValue: 0,
    usdChangeIn24h: 0,
    positiveGrowth: true,
  });

  useEffect(() => {
    const fetchCryptoInfo = async () => {
      const res = await fetch(COINGECKO_URL);
      const data = await res.json();
      setCryptoInfo({
        dollarValue: data.bitcoin.usd,
        rupeeValue: data.bitcoin.inr,
        usdChangeIn24h: data.bitcoin.usd_24h_change,
        positiveGrowth: data.bitcoin.usd_24h_change > 0,
      });
    };

    fetchCryptoInfo();
  }, []);

  return (
    <div className='rounded-xl bg-white p-5'>
      <div className='flex items-center gap-2'>
        <Image className='h-7 w-7' src={bitcoinImg} alt='bitcoin' />
        <h3 className='text-xl font-semibold'>Bitcoin</h3>
        <span className='text-[12px] font-semibold uppercase text-gray-400'>
          BTC
        </span>
        <span className='ml-6 rounded-lg bg-gray-400 px-3 py-2 font-Poppins text-sm text-white'>
          Rank #1
        </span>
      </div>
      <div className='mt-7 flex items-center justify-start gap-3'>
        <span className='mr-3 font-Poppins text-2xl font-semibold'>
          ${commaNumber(cryptoInfo.dollarValue)}
        </span>
        <span
          className={`rounded-[4px] p-[1px] px-[5px] text-[12px] font-medium ${cryptoInfo.positiveGrowth ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}
        >
          {cryptoInfo.positiveGrowth ? '▲' : '▼'}{' '}
          {cryptoInfo.usdChangeIn24h.toFixed(2)}%
        </span>
        <span className='text-[11px] font-[500] text-gray-500'>(24H)</span>
      </div>
      <div className='mb-6'>
        <span className='font-Poppins text-[14px] font-[500] text-[#000000c7]'>
          ₹{commaNumber(cryptoInfo.rupeeValue)}
        </span>
      </div>
      <hr className='mb-4' />
      <div>
        <CoinChart />
      </div>
    </div>
  );
};

export default CryptoChartInfo;
