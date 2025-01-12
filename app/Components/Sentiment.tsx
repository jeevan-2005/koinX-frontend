import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Image from 'next/image';
import newsImg from '../../public/assests/newImg.svg';
import trendingImg from '../../public/assests/trendingImg.svg';

const data = [
  {
    name: 'news',
    src: newsImg,
    title:
      'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
  },
  {
    name: 'trending',
    src: trendingImg,
    title:
      'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
  },
];

type Props = {};

const Sentiment = (props: Props) => {
  return (
    <div className='rounded-lg bg-white p-6'>
      <h3 className='mb-4 font-Poppins text-[22px] font-semibold'>Sentiment</h3>
      <h4 className='my-1 font-Poppins text-[18px] font-semibold text-gray-600'>
        Key Events ℹ️
      </h4>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
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
        {data.map((item) => (
          <Card
            orientation='horizontal'
            size='sm'
            key={item.name}
            variant='soft'
            sx={{
              scrollSnapAlign: 'center',
              paddingX: '23px',
              paddingY: '18px',
              borderRadius: '13px',
            }}
            color={item.name === 'news' ? 'primary' : 'success'}
          >
            <div className={`flex w-[250px] lg:w-[500px] items-start gap-3`}>
              <div
                className={`rounded-full ${item.name === 'news' ? 'bg-blue-500' : 'bg-green-500'} w-[120px] p-2`}
              >
                <Image src={item.src} width={50} height={50} alt={item.title} />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[15px] font-semibold'>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </Box>
      <h4 className='my-1 font-Poppins text-[18px] font-semibold text-gray-600 mt-5'>
      Analyst Estimates ℹ️
      </h4>
      <div className='my-4 grid grid-cols-[100px_1fr] gap-x-4 lg:gap-x-10'>
        <div className='flex h-[100px] items-center justify-center gap-0.5 rounded-full bg-green-100 text-green-500'>
          <span className='text-3xl font-semibold'>76</span>
          <span>%</span>
        </div>
        <div className='flex flex-col gap-4 text-sm font-medium text-gray-500'>
          <div className='flex items-center gap-3'>
            <span className='font-normal font-Poppins'>Buy</span>
            <span className='h-2 grow-[0.76] rounded-sm bg-green-500'></span>
            <span>76%</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='font-normal font-Poppins'>Hold</span>
            <span className='h-2 grow-[0.08] rounded-sm bg-gray-200'></span>
            <span>8%</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='font-normal font-Poppins'>Sell</span>
            <span className='h-2 grow-[0.16] rounded-sm bg-red-500'></span>
            <span>16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
