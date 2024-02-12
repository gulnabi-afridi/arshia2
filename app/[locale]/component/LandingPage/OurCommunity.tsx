'use client';

import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import Image from 'next/image';
import * as Icons from '../../../../svg/Icons';
import { Zoom, Fade, Bounce } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

const OurCommunity: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full mt-10 lg:mt-20 z-40'>
      <Wrapper>
        <div className='bg-[#BADEFF] px-3 rounded-[10px] py-10 csm:py-20 flex flex-col gap-2 csm:gap-4 justify-center items-center'>
          <Zoom triggerOnce>
            <div className='w-[250px] csm:w-[310px] h-[150px] csm:h-[210px] relative'>
              <Image
                src='/assets/community.svg'
                alt=''
                fill
                className='object-fill'
              />
            </div>
          </Zoom>
          <Fade direction='up' triggerOnce>
            <p className='text-[22px] sm:text-[30px] text-center csm:text-[40px] leading-[40px] text-black-1 font-semibold'>
              {t('join_community')}
            </p>
            <p className='text-[18px] text-center csm:text-[20px] text-black-1 font-normal'>
              {t('join_comm_sub_title')}
            </p>
          </Fade>
          <Bounce triggerOnce>
            <button className='flex justify-center hover:opacity-80 mt-4 csm:mt-8 items-center gap-2 rounded-[6px] bg-[#15B1FE] px-[16px] py-[8px]'>
              <p className='text-[16px] sm:text-[18px] text-white-1 font-normal'>
                {t('join_now')}
              </p>
              <Icons.rightArrow className='w-[22px] sm:w-[24px] h-[22px] sm:h-[24px]' />
            </button>
          </Bounce>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurCommunity;
