import React from 'react'
import CoinCards from './CoinCards';
import bcoinImg1 from '../../public/assests/bcoinImg1.png';
import bcoinImg2 from '../../public/assests/bcoinImg2.png';

type Props = {}

const AboutBitcoin = (props: Props) => {
  return (
    <div className='rounded-lg bg-white p-6 mt-7'>
        <h3 className='font-Poppins text-[22px] font-semibold mb-5'>About Bitcoin</h3>
        <div>
        <h3 className="text-[17px] font-medium font-Poppins">What is Bitcoin?</h3>
            <p className='mt-2 text-[15px]'>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
            <hr className='my-3 border-[1px]'/>
            <h3 className="text-[17px] font-medium font-Poppins">Lorem ipsum dolor sit amet</h3>
            <p className='mt-2 text-[15px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consequuntur dolore doloribus dolorum enim excepturi facere facilis hic inventore minima, mollitia, natus nulla officia optio perferendis possimus praesentium quasi quibusdam repudiandae sapiente sint suscipit tenetur? Alias blanditiis dolore excepturi impedit iure minima nesciunt soluta. Consectetur dolorem id quaerat voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quis ducimus quisquam laborum incidunt officia cumque minus doloremque, molestiae eum iusto amet facere soluta ab.
            </p>
            <p className='my-5 text-[15px] font'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur atque consequuntur dolores enim error nobis placeat provident recusandae velit? Ad animi aperiam autem beatae commodi consectetur corporis delectus earum ex harum id incidunt laborum magni, minima nobis nulla numquam omnis optio porro quas quidem quisquam ratione recusandae vel veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit animi ex tempore inventore accusantium quibusdam corporis officia iure repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloribus.
            </p>
            <p className='mb-3 text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis deserunt dolor eum illo laborum, laudantium necessitatibus nemo nobis praesentium, ratione recusandae repellat sed, ut veniam? Aliquam dolorem dolorum ea est expedita, facilis ipsum iusto odio placeat quae quasi rerum! Aliquid architecto eius eum id in laboriosam laborum rem rerum.</p>
            <hr className='my-3 border-[1px]'/>
            <h3 className='font-Poppins text-[22px] font-semibold mb-4 mt-6'>Already holding Bitcoin?</h3>
            <div className="flex flex-col lg:flex-row gap-6 align-center">
                <CoinCards heading="Calculate your profits" img={bcoinImg1.src} bg="linear-gradient(to right, #10b981, #06b6d4)"/>
                <CoinCards heading="Calculate your tax liability" img={bcoinImg2.src} bg="linear-gradient(to right, #fdba74, #f97316)"/>
            </div>
            <hr className='my-4 border-[1px]'/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aut debitis earum exercitationem impedit, libero molestiae numquam odit possimus quidem quod similique sint tempore, vero voluptate. Autem consequuntur maiores optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam optio aliquid quasi debitis enim adipisci natus a doloremque eligendi.
            </p>
        </div>
    </div>
  )
}

export default AboutBitcoin