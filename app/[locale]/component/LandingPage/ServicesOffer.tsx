'use client';

import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import * as Icons from '../../../../svg/Icons';
import Link from 'next/link';
import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const ServicesOffer: React.FC = () => {
  return (
    <div className='w-full py-10 bg-white-1'>
      <Wrapper>
        <div className='flex flex-col gap-0 lg:gap-4 w-full justify-center items-center'>
          <Fade cascade triggerOnce>
            <p className='text-[20px] sm:text-[25px] csm:text-[30px] md:text-[35px] lg:text-[40px] text-black-1 font-semibold'>
              Offer your services that{' '}
              <span className='uppercase text-[12px] sm:text-[20px] csm:text-[25px] md:text-[30px] lg:text-[35px] text-[#15B1FE] font-rockSalt relative'>
                CONVERT
                <Icons.underline className='w-[70px] sm:w-[130px] csm:w-[180px] md:w-[300px] h-[18px] absolute right-0 csm:-right-4 lg:-right-10 -bottom-1 csm:bottom-0' />
              </span>
            </p>
            <p className='text-[18px] md:text-[20px] max-w-[550px] w-full text-center mt-3 md:mt-0 lg:mt-1 text-black-3 font-normal'>
              Our advanced import module simplifies the processof importing
              reviews from other platforms, saving you time and hassle.
            </p>
          </Fade>
          {/* how its work link --->  */}
          <Slide direction='up' triggerOnce>
            <div className='flex justify-center mt-2 items-center gap-2 csm:gap-3'>
              <Link
                className='text-[#0B70D6] hover:opacity-80 text-[18px] csm:text-[20px] md:text-[24px] font-semibold flex justify-center items-center gap-2'
                href='#'
              >
                Try it now
                <Icons.rightArrow
                  className='w-[24px] h-[24px]'
                  fill='#33363F'
                />
              </Link>
              <Link
                href='#'
                className='hover:opacity-80 flex justify-center items-center gap-2'
              >
                <p className='text-[18px] csm:text-[20px] md:text-[24px] font-medium text-[#0B70D6]'>
                  How it work
                </p>
                <Icons.bulb
                  className='w-[22px] md:w-[24px] h-[22px] md:h-[25px]'
                  stroke='#0B70D6'
                />
              </Link>
            </div>
          </Slide>
          {/* image ---->  */}
          <Zoom triggerOnce className='w-full flex justify-center items-center'>
            <div className='w-full max-w-[1050px] h-[300px] sm:h-[500px] cmd:h-[600px] lg:h-[650px] relative'>
              <Image
                src='/assets/servicesOffer.svg'
                fill
                alt=''
                className='object-fill'
              />
            </div>
          </Zoom>
        </div>
      </Wrapper>
    </div>
  );
};

export default ServicesOffer;
