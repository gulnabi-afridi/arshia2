import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import * as Icons from '../../../../svg/Icons';
import Link from 'next/link';
import Image from 'next/image';

const ServicesOffer: React.FC = () => {
  return (
    <div className='w-full py-10 bg-white-1'>
      <Wrapper>
        <div className='flex flex-col gap-4 w-full justify-center items-center'>
          <p className='text-[40px] text-black-1 font-semibold'>
            'Offer your services that{' '}
            <span className='uppercase text-[35px] text-[#15B1FE] font-rockSalt relative'>
              CONVERT
              <Icons.underline className='w-[300px] h-[18px] absolute -right-10 bottom-0' />
            </span>
          </p>
          <p className='text-[20px] max-w-[550px] w-full text-center mt-1 text-black-3 font-normal'>
            Our advanced import module simplifies the processof importing
            reviews from other platforms, saving you time and hassle.
          </p>
          {/* how its work link --->  */}
          <div className='flex justify-center mt-2 items-center gap-3'>
            <Link
              className='text-[#0B70D6] hover:opacity-80 text-[24px] font-semibold flex justify-center items-center gap-2'
              href='#'
            >
              Try it now
              <Icons.rightArrow className='w-[24px] h-[24px]' fill='#33363F' />
            </Link>
            <Link
              href='#'
              className='hover:opacity-80 flex justify-center items-center gap-2'
            >
              <p className='text-[24px] font-medium text-[#0B70D6]'>
                How it work
              </p>
              <Icons.bulb className='w-[24px] h-[25px]' stroke='#0B70D6' />
            </Link>
          </div>
          {/* image ---->  */}
          <div className='w-full max-w-[1050px] h-[650px] relative'>
            <Image
              src='/assets/servicesOffer.svg'
              fill
              alt=''
              className='object-fill'
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ServicesOffer;
