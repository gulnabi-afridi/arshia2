'use client';

import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Fade, Slide } from 'react-awesome-reveal'; // Import Fade and Slide for animations
import * as Icons from '../../../../svg/Icons';

const Hero = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-blue-2'>
      <Wrapper style='h-full'>
        <div className='w-full h-full flex flex-col justify-center items-center gap-3'>
          {/* Image animation */}
          <Slide direction='down' triggerOnce>
            <div className='w-[300px] h-[180px] relative'>
              <Image
                src='/assets/hero.svg'
                alt=''
                fill
                className='object-fill'
              />
            </div>
          </Slide>
          {/* Title animation */}
          <Slide direction='up' triggerOnce>
            <h1 className='text-[30px] sm:text-[40px] cmd:text-[50px] lg:text-[60px] w-full max-w-[900px] text-center leading-[40px] sm:leading-[50px] cmd:leading-[60px] lg:leading-[70px] text-black-2 font-bold'>
              Together, we empower your freelance journey.
            </h1>
          </Slide>
          {/* Subtitle and links animation */}
          <Fade delay={500} triggerOnce>
            <div className='flex md:flex-row flex-col justify-center items-center gap-3'>
              <h2 className='text-[18px] sm:text-[20px] font-normal text-black-3'>
                Explore our tailored solutions
              </h2>
              <div className='flex justify-center items-center gap-3'>
                {heroLink.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className={` ${item.width} ${item.height} relative`}
                  >
                    <Image
                      src={item.img}
                      fill
                      alt=''
                      className='object-contain overflow-hidden'
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Fade>
          {/* Call to action input animation */}
          <Slide direction='up' triggerOnce className='w-full'>
            <div className='w-full flex justify-center mt-5 items-center h-[50px] sm:h-[50px]'>
              <input
                placeholder='Fill in our e-mail here to start your journey...'
                type='text'
                className='w-full max-w-[400px] h-full bg-white-1 rounded-l-[6px] placeholder:text-black-3 text-[14px] sm:text-[16px] font-normal px-3 focus:outline-none'
              />
              <button className='w-[55px] sm:w-[60px] h-full flex bg-blue-1 rounded-r-[6px] hover:opacity-80 justify-center items-center'>
                <Icons.rightArrow className='w-[25px] h-[25px]' />
              </button>
            </div>
          </Slide>
        </div>
      </Wrapper>
    </div>
  );
};

const heroLink = [
  {
    path: '#',
    width: 'w-[80px] sm:w-[100px]',
    height: 'h-[40px]',
    img: '/assets/itSolveLogo1.svg',
  },
  {
    path: '#',
    width: 'w-[80px] sm:w-[100px]',
    height: 'h-[40px]',
    img: '/assets/itSolveLogo2.svg',
  },
  {
    path: '#',
    width: 'w-[80px] sm:w-[100px]',
    height: 'h-[40px]',
    img: '/assets/itSolveLogo3.svg',
  },
];

export default Hero;
