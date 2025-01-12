'use client';
import React, { useEffect, useState } from 'react';
import getStartedImg from '../../public/assests/getStarted.png';
import Image from 'next/image';

interface Coin {
  item: {
    thumb: string;
    name: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

const COINGECKO_TRENDING_COINS_API_URL =
  'https://api.coingecko.com/api/v3/search/trending';

const GetStarted = () => {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchTrendingCoind = async () => {
      const res = await fetch(COINGECKO_TRENDING_COINS_API_URL);
      const data = await res.json();
      setTrendingCoins([data.coins[0], data.coins[1], data.coins[2]]);
    };

    fetchTrendingCoind();
  }, []);
  return (
    <div className='sticky right-14 top-[74px]'>
      <div className='flex flex-col gap-4 rounded-lg bg-[#1b4aef] px-8 py-8 text-center leading-loose text-white'>
        <h2 className='text-xl font-bold leading-8'>
          Get Started with KoinX <br /> for FREE
        </h2>
        <p className='mb-5 text-[12px]'>
          With our range of features that can equip for free, KoinX allows you
          to be more educated and aware of your tax reports
        </p>
        <Image
          src={getStartedImg}
          className='w-[150px] place-self-center'
          alt='get-started'
        />
        <button className='font-Poppins flex items-center gap-1 self-center rounded-lg border-none bg-white px-3.5 py-2.5 text-sm font-[500] text-black'>
          Get Started for FREE <span className='ml-2'>&rarr;</span>{' '}
        </button>
      </div>
      <div className='mt-5 rounded-lg bg-white px-6 py-4'>
        <h3 className='font-Poppins mb-5 text-[21px] font-semibold'>
          Trending Coins (24h)
        </h3>
        <div className='flex flex-col gap-4'>
          {trendingCoins.map((coin: Coin, index) => {
            const coinUsdChange24h =
              coin.item.data?.price_change_percentage_24h?.usd || 0;
            return (
              <div className='flex items-center gap-2' key={coin.item.name}>
                <Image
                  src={coin.item.thumb}
                  width={23}
                  height={23}
                  className='rounded-full'
                  alt='coin'
                  unoptimized
                />
                <span className='grow text-[13px] font-[600]'>
                  {coin.item.name}
                </span>
                <span
                  className={`rounded-[4px] p-[1px] px-[5px] text-[12px] ${coinUsdChange24h >= 0 ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}
                >
                  {coinUsdChange24h >= 0 ? '▲' : '▼'}{' '}
                  {coinUsdChange24h.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
