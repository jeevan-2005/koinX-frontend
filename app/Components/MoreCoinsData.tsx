'use client';
import React, { useEffect, useState } from 'react';
import TrendingCoins from './TrendingCoins.tsx';

type Props = {};

const COINGECKO_TRENDING_COINS_API_URL =
  'https://api.coingecko.com/api/v3/search/trending';

const MoreCoinsData = (props: Props) => {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchTrendingCoind = async () => {
      const res = await fetch(COINGECKO_TRENDING_COINS_API_URL);
      const data = await res.json();
      setTrendingCoins(data.coins);
    };

    fetchTrendingCoind();
  }, []);

  return (
    <div className='mt-14 bg-white px-7 py-4  lg:p-20 lg:py-14'>
      <h3 className='font-Poppins text-[22px] font-semibold'>
        You May Also Like
      </h3>
      <TrendingCoins trendingCoins={trendingCoins} />
      <h3 className='font-Poppins text-[22px] font-semibold mt-6'>
        Trending Coins
      </h3>
      <TrendingCoins trendingCoins={trendingCoins} />
    </div>
  );
};

export default MoreCoinsData;
