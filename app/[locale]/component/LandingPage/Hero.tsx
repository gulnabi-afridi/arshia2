import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '../../../../svg/Icons';

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-90px)] bg-blue-2'>
      <Wrapper style='h-full'>
        <div className='w-full h-full flex flex-col justify-center items-center gap-3'>
          {/* image --->  */}
          <div className='w-[300px] h-[180px] relative'>
            <Image src='/assets/hero.svg' alt='' fill className='object-fill' />
          </div>
          {/* title -->  */}
          <h1 className='text-[60px] w-full max-w-[900px] text-center leading-[70px] text-black-2 font-bold'>
            Together, we empower your freelance journey.
          </h1>
          <div className='flex justify-center items-center gap-3'>
            <h2 className='text-[20px] font-normal text-black-3'>
              Explore our tailored solutions
            </h2>
            {heroLink.map((item, index) => {
              return (
                <Link
                  key={index}
                  href='#'
                  className={` ${item.width} ${item.height} relative`}
                >
                  <Image
                    src={item.img}
                    fill
                    alt=''
                    className='object-contain overflow-hidden'
                  />
                </Link>
              );
            })}
          </div>
          {/* call to action input ---->  */}
          <div className='flex justify-center mt-5 items-center h-[50px]'>
            <input
              placeholder='Fill in our e-mail here to start your journey... '
              type='text'
              className='w-[400px] h-full bg-white-1 rounded-l-[6px] placeholder:text-black-3 text-[16px] font-normal px-3 focus:outline-none'
            />
            <button className='w-[60px] h-full flex bg-blue-1 rounded-r-[6px] hover:opacity-80 justify-center items-center'>
              <Icons.rightArrow className='w-[25px] h-[25px] ' />
            </button>
          </div>
        </div>
      </Wrapper>
      {/* shape for header ----> */}
      {/* <div>
        <Icons.headerShape className='w-full h-[300px] absolute' />
      </div> */}
    </div>
  );
};

const heroLink = [
  {
    path: '#',
    width: 'w-[100px]',
    height: 'h-[40px]',
    img: '/assets/itSolveLogo1.svg',
  },
  {
    pathL: '#',
    width: 'w-[100px]',
    height: 'h-[40px]',
    img: '/assets/itSolveLogo2.svg',
  },
  {
    pathL: '#',
    width: 'w-[100px]',
    height: 'h-[40px]',
    img: '/assets/itSolveLogo3.svg',
  },
];

export default Hero;
