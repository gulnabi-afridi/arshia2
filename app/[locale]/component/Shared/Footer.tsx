'use client';

import React from 'react';
import Wrapper from './ComponentWrapper';
import Link from 'next/link';
import * as Icons from '../../../../svg/Icons';
import { Fade, Slide } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerData = [
    {
      category: t('f_c1'),
      links: [
        {
          path: '#',
          name: t('f_c1_l1'),
        },
        {
          path: '#',
          name: t('f_c1_l2'),
        },
        {
          path: '#',
          name: t('f_c1_l3'),
        },
        {
          path: '#',
          name: t('f_c1_l4'),
        },
        {
          path: '#',
          name: t('f_c1_l5'),
        },
      ],
    },
    {
      category: t('f_c2'),
      links: [
        {
          path: '#',
          name: t('f_c2_l1'),
        },
        {
          path: '#',
          name: t('f_c2_l2'),
        },
        {
          path: '#',
          name: t('f_c2_l3'),
        },
        {
          path: '#',
          name: t('f_c2_l4'),
        },
      ],
    },
    {
      category: t('f_c3'),
      links: [
        {
          path: '#',
          name: t('f_c3_l1'),
        },
        {
          path: '#',
          name: t('f_c3_l2'),
        },
        {
          path: '#',
          name: t('f_c3_l3'),
        },
        {
          path: '#',
          name: t('f_c3_l4'),
        },
      ],
    },
    {
      category: t('f_c4'),
      links: [
        {
          path: '#',
          name: t('f_c4_l1'),
        },
        {
          path: '#',
          name: t('f_c4_l2'),
        },
        {
          path: '#',
          name: t('f_c4_l3'),
        },
        {
          path: '#',
          name: t('f_c4_l5'),
        },
        {
          path: '#',
          name: t('f_c4_l6'),
        },
      ],
    },
    {
      category: t('f_c5'),
      links: [],
    },
  ];

  return (
    <div className='w-full bg-blue-2 pt-10 csm:pt-24 relative mt-[70px]'>
      <Wrapper>
        <Fade duration={500} triggerOnce>
          <div className='w-full grid grid-cols-1 csm:grid-cols-3 md:grid-cols-4 gap-y-5 sm:gap-y-8 lg:grid-cols-5 pb-8'>
            {footerData.map((item, index) => (
              <div key={index} className='flex flex-col'>
                <Slide direction='up' delay={index * 100} triggerOnce>
                  <p className='text-[18px] sm:text-[20px] font-medium text-black-2 underline'>
                    {item.category}
                  </p>
                  <div className='flex flex-col gap-1 sm:gap-2 mt-2 sm:mt-3'>
                    {item.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.path}
                        className='text-[16px] sm:text-[18px] w-fit text-black-2 font-normal relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-black-2 hover:after:w-full after:duration-200'
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </Slide>
              </div>
            ))}
          </div>
        </Fade>
        <div className='w-full h-[40px] sm:h-[50px] border-t-[1px] border-black-3 flex justify-center items-center'>
          <Fade delay={500} triggerOnce>
            <p className='text-[14px] sm:text-[18px] font-normal text-black-2'>
              {t('copy_right')}
            </p>
          </Fade>
        </div>
      </Wrapper>
      <Icons.footerShape className='w-full md:block hidden absolute -z-10 -top-[250px] csm:-top-[290px] md:-top-[300px] clg:-top-[350px] h-[450px]' />
    </div>
  );
};

// footerData array remains the same

export default Footer;
