import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import Image from 'next/image';
import * as Icons from '../../../../svg/Icons';

const OurCommunity: React.FC = () => {
  return (
    <div className='w-full mt-10 lg:mt-20 z-40'>
      <Wrapper>
        <div className='bg-[#BADEFF] px-3 rounded-[10px] py-10 csm:py-20 flex flex-col gap-2 csm:gap-4 justify-center items-center'>
          <div className='w-[250px] csm:w-[310px] h-[150px] csm:h-[210px] relative'>
            <Image
              src='/assets/community.svg'
              alt=''
              fill
              className='object-fill'
            />
          </div>
          <p className='text-[22px] sm:text-[30px] text-center csm:text-[40px] leading-[40px] text-black-1 font-semibold'>
            Join our lively community
          </p>
          <p className='text-[18px] text-center csm:text-[20px] text-black-1 font-normal'>
            Chat with hundreds of more freelancers!'
          </p>
          <button className='flex justify-center hover:opacity-80 mt-4 csm:mt-8 items-center gap-2 rounded-[6px] bg-[#15B1FE] px-[16px] py-[8px]'>
            <p className='text-[16px] sm:text-[18px] text-white-1 font-normal'>
              Join now
            </p>
            <Icons.rightArrow className='w-[22px] sm:w-[24px] h-[22px] sm:h-[24px]' />
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurCommunity;
