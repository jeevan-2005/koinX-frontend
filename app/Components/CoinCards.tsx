import { Card } from '@mui/joy';
import Image from 'next/image';
import React from 'react';

type Props = {
  heading: string;
  img: string;
  bg: string;
};

const CoinCards = ({ heading, img, bg }: Props) => {
  return (
    <Card
      orientation='horizontal'
      size='sm'
      variant='outlined'
      sx={{ background : `${bg}`, paddingX: "15px" , paddingY: "15px", gap: 3 }}
    >
      <div className='rounded-lg'>
        <Image src={`${img}`} height={120} width={120} alt={heading} layout='responsive' />
      </div>
      <div className='flex flex-col justify-center gap-1 items-start'>
        <h3 className='font-Poppins text-white text-[15px] lg:text-[22px] font-semibold'>{heading}</h3>
        <button className='font-Poppins flex items-center gap-1 rounded-lg border-none bg-white px-2 py-1 lg:px-3.5 lg:py-2.5 text-sm font-[500] text-black'>Check now &rarr;</button>
      </div>
    </Card>
  );
};

export default CoinCards;
