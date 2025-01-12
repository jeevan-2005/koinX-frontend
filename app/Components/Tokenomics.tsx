import React from 'react';
import PieChartDistribution from './PieChartDistribution';

const Tokenomics = () => {
  return (
    <div className='mt-7 rounded-lg bg-white p-6'>
      <h3 className='font-Poppins text-[22px] font-semibold'>Tokenomics</h3>
      <h3 className='mt-6 font-Poppins text-[18px] font-semibold'>
        Initial Distribution
      </h3>
      <div className=''>
        <PieChartDistribution />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        aspernatur blanditiis consectetur consequuntur culpa doloremque ea eaque
        et exercitationem facilis id impedit in ipsam ipsum iste iusto,
        laudantium libero minima molestiae molestias nam nesciunt officia quae
        quaerat recusandae reiciendis rem repudiandae sed similique tempore
        temporibus totam veniam voluptatem. Odio, porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam iusto magnam ab ut molestiae accusantium neque animi, deserunt laboriosam? Totam ea inventore eius accusamus sed similique iste aut nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, iure! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nobis.
      </p>
    </div>
  );
};

export default Tokenomics;
