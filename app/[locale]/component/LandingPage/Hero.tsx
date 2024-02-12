'use client';

import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Fade, Slide } from 'react-awesome-reveal'; // Import Fade and Slide for animations
import * as Icons from '../../../../svg/Icons';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-blue-2 z-40'>
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
              {t('h_title')}
            </h1>
          </Slide>
          {/* Subtitle and links animation */}
          <Fade delay={500} triggerOnce>
            <div className='flex md:flex-row flex-col justify-center items-center gap-3'>
              <h2 className='text-[18px] sm:text-[20px] font-normal text-black-3'>
                {t('h_sub_title')}
              </h2>
              <div className='flex justify-center items-center gap-3'>
                {heroLink.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    data-text={item.tooltip}
                    className={` ${item.width} ${item.height} group tooltip`}
                  >
                    <Image
                      src={item.img}
                      fill
                      alt=''
                      className='object-fill rounded-lg z-10 transition-transform duration-300 transform hover:scale-105'
                    />
                    {/* <span className=''>{item.tooltip}</span> */}
                  </Link>
                ))}
              </div>
            </div>
          </Fade>
          {/* Call to action input animation */}
          <Slide direction='up' triggerOnce className='w-full'>
            <div className='w-full flex justify-center mt-5 items-center h-[50px] sm:h-[50px]'>
              <input
                placeholder={t('call_place_holder')}
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
      <div className='w-full absolute -bottom-[380px] -z-10'>
        <Icons.headerShape className='w-full h-[724px]' />
      </div>
    </div>
  );
};

const heroLink = [
  {
    path: '#',
    width: 'w-[80px] sm:w-[100px]',
    height: 'h-[40px]',
    img: '/assets/itSolveLogo1.svg',
    tooltip: 'Tooltip 1',
  },
  {
    path: '#',
    width: 'w-[80px] sm:w-[100px]',
    height: 'h-[40px]',
    img: '/assets/itSolveLogo2.svg',
    tooltip: 'Tooltip 2',
  },
  {
    path: '#',
    width: 'w-[80px] sm:w-[100px]',
    height: 'h-[36px]',
    img: '/assets/itSolveLogo3.png',
    tooltip: 'Tooltip 3',
  },
];

export default Hero;
