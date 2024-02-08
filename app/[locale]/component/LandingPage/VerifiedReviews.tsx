import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import * as Icons from '../../../../svg/Icons';
import Link from 'next/link';
import Image from 'next/image';

const VerifiedReviews: React.FC = () => {
  return (
    <div className='bg-white-1'>
      <Wrapper>
        <div className='w-full grid grid-cols-2 justify-center items-center'>
          {/* left portion --->  */}
          <div className='flex flex-col gap-4 items-start w-full pr-4'>
            <div className='flex justify-center items-center gap-4'>
              <p className='text-[40px] text-black-1 font-semibold'>
                Verified reviews.{' '}
                <span className='uppercase text-[25px] text-[#534599] font-rockSalt'>
                  once click
                </span>
              </p>
              <Icons.checkIcon className='w-[44px] h-[55px]' />
            </div>
            <p className='text-[20px] text-black-3 font-normal'>
              Unlock the potential of your freelance careerwith our trusted
              reviews platform. Join today and let your reputation speak
              foritself.
            </p>
            <Link
              className='text-[#0B70D6] hover:opacity-80 text-[18px] font-semibold flex justify-center items-center gap-2'
              href='#'
            >
              Try it now
              <Icons.rightArrow className='w-[24px] h-[24px]' fill='#0B70D6' />
            </Link>
          </div>
          {/* right portion ----> */}
          <div className='w-full h-[600px] relative'>
            <Image
              src='/assets/verified.svg'
              alt=''
              className='object-fill'
              fill
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default VerifiedReviews;
