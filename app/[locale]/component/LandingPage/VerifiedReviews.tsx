'use client';

import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import * as Icons from '../../../../svg/Icons';
import Link from 'next/link';
import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const VerifiedReviews: React.FC = () => {
  return (
    <Fade duration={1200} triggerOnce>
      {' '}
      {/* General fade effect for the container */}
      <div className='bg-white-1 lg:py-0 py-10'>
        <Wrapper>
          <div className='w-full grid grid-cols-1 sm:gap-0 gap-4 lg:grid-cols-2 justify-center items-center'>
            {/* Left portion with slide effect */}
            <Slide direction='left' triggerOnce>
              <div className='w-full flex flex-col gap-3 sm:gap-4 items-start pr-4'>
                <div className='flex w-full justify-start items-start gap-2 sm:gap-4'>
                  <p className='text-[25px] sm:text-[30px] xl:text-[40px] text-black-1 font-semibold'>
                    Verified reviews.{' '}
                    <span className='uppercase text-[10px] sm:text-[15px] xl:text-[25px] text-[#534599] font-rockSalt'>
                      once click
                    </span>
                  </p>
                  <Icons.checkIcon className='w-[25px] xl:w-[44px] h-[25px] xl:h-[55px]' />
                </div>
                <p className='text-[18px] xl:text-[20px] text-black-3 font-normal'>
                  Unlock the potential of your freelance career with our trusted
                  reviews platform. Join today and let your reputation speak for
                  itself.
                </p>
                <Link
                  className='text-[#0B70D6] hover:opacity-80 text-[18px] font-semibold flex justify-center items-center gap-2'
                  href='#'
                >
                  Try it now
                  <Icons.rightArrow
                    className='w-[24px] h-[24px]'
                    fill='#0B70D6'
                  />
                </Link>
              </div>
            </Slide>
            {/* Right portion with slide effect */}
            <Zoom triggerOnce delay={500}>
              <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] clg:h-[600px] relative'>
                <Image
                  src='/assets/verified.svg'
                  alt=''
                  className='object-fill'
                  fill
                />
              </div>
            </Zoom>
          </div>
        </Wrapper>
      </div>
    </Fade>
  );
};

export default VerifiedReviews;
