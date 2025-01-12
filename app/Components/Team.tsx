import Image from 'next/image';
import React from 'react';
import person1 from '../../public/assests/person1.jpg';
import person2 from '../../public/assests/person2.jpg';
import person3 from '../../public/assests/person3.jpg';

type Props = {};

const Team = (props: Props) => {
  return (
    <div className='mt-6 rounded-lg bg-white p-6'>
      <h3 className='font-Poppins text-[22px] font-semibold'>Team</h3>
      <p className='my-5 mb-7'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
        aperiam architecto eligendi incidunt magni nemo obcaecati quia quod
        ratione? Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className='flex flex-col gap-4'>
      <TeamMemberInfo name='John Smith' src={person1.src} />
      <TeamMemberInfo name='Elina Williams' src={person2.src} />
      <TeamMemberInfo name='John Smith' src={person3.src} />
      </div>
    </div>
  );
};

type Person = {
  name: string;
  src: string;
};

function TeamMemberInfo({ src, name }: Person) {
  return (
    <div className='grid grid-cols-1 gap-x-4 gap-y-1 rounded-lg bg-[#e8f4fd] px-5 py-4 lg:grid-cols-[100px_1fr]'>
      <Image
        className='h-28 max-h-full max-w-full place-self-center rounded-lg object-cover lg:min-w-full'
        width={100}
        height={100}
        src={src}
        alt='name'
      />
      <p className='col-span-full row-start-4 self-center lg:col-start-2 lg:row-start-1 lg:row-end-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        doloribus ea earum et molestias necessitatibus nesciunt nulla, rem ut
        voluptates? Aut enim, error eum illum laborum tenetur totam ut!
        Asperiores corporis cupiditate deserunt distinctio fugiat ipsa possimus,
        praesentium quas? Amet, ducimus exercitationem explicabo incidunt
        inventore ipsa itaque, laboriosam molestias, natus officiis perferendis
        quae ullam vel! Dicta doloremque magni sint voluptatum? Lorem ipsum dolor sit amet.
      </p>
      <h3 className='row-start-2 text-center text-sm font-semibold font-Poppins'>{name}</h3>
      <span className='row-start-3 text-center text-[12px] lg:col-start-1 lg:col-end-2 text-gray-500'>
        Designation here
      </span>
    </div>
  );
}

export default Team;
