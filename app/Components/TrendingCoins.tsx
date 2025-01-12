import React from 'react';
import { Box, Card } from '@mui/joy';
import Image from 'next/image';

interface Coin {
  item: {
    thumb: string;
    name: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
      price: number;
      sparkline: string;
    };
  };
}

type Props = {
  trendingCoins: Coin[];
};

const TrendingCoins = ({ trendingCoins }: Props) => {
  return (
    <div className='mt-2'>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          py: 1,
          overflow: 'auto',
          width: '100%',
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {trendingCoins.map((coin: Coin) => {
          const coinPriceInUsd = coin?.item?.data?.price;
          const coinUsdChange24h =
            coin.item?.data?.price_change_percentage_24h?.usd;
          const positiveGrowth = coinUsdChange24h > 0;

          return (
            <Card
              orientation='horizontal'
              size='sm'
              key={coin?.item?.name}
              variant='plain'
              sx={{
                scrollSnapAlign: 'center',
                borderRadius: '10px',
                padding: '0',
              }}
            >
              <div className='flex h-40 min-w-44 flex-col gap-1 rounded-lg border-[2px] border-gray-300 p-2 lg:h-full lg:min-w-72 lg:p-4'>
                <div className='flex items-center gap-1 text-sm lg:text-base'>
                  <Image
                    className='mr-1 h-6 w-6 rounded-full lg:mr-2'
                    width={24}
                    height={24}
                    src={coin?.item?.thumb}
                    alt={coin?.item?.name}
                  />
                  <span>{coin?.item?.name}</span>
                  <span
                    className={`rounded px-1 text-[10px] font-normal lg:px-2 ${positiveGrowth ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}
                  >
                    {positiveGrowth ? '▲' : '▼'} {coinUsdChange24h.toFixed(2)}%
                  </span>
                </div>
                <span className='text-xl font-semibold'>
                  ${coinPriceInUsd.toFixed(2)}
                </span>
                <Image
                  src={coin?.item?.data?.sparkline}
                  className='h-full w-full object-contain'
                  layout='responsive'
                  width={100}
                  height={40}
                  alt={coin?.item?.name}
                />
              </div>
            </Card>
          );
        })}
      </Box>
    </div>
  );
};

export default TrendingCoins;
