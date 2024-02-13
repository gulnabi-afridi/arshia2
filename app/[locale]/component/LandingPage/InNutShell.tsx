'use client';

import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import * as Icons from '../../../../svg/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

const InNutShell: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full pt-10 pb-0 csm:pb-10 bg-white-1'>
      <Wrapper>
        <div className='flex flex-col gap-6'>
          <Fade duration={1000} triggerOnce>
            <div className='flex justify-center items-center gap-2'>
              <p className='text-black-2 text-[20px] sm:text-[25px] csm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold'>
                {t('nut_shell_title')}
              </p>
              <Zoom duration={1000} triggerOnce>
                <Icons.eye className='w-[30px] csm:w-[48px] h-[30px] csm:h-[48px]' />
              </Zoom>
            </div>
          </Fade>
          {/* nutShell cards ---->  */}

          <Zoom triggerOnce>
            <div className='w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {/* two cols -->  */}
              <div className='w-full col-span-1 md:col-span-2 lg:col-span-3 gap-5 grid grid-cols-1 md:grid-cols-2'>
                <Slide direction='up' delay={50} triggerOnce className='w-full'>
                  <div className='w-full flex justify-center items-center'>
                    <div className='w-full max-w-[400px] md:max-w-full rounded-xl shadow-lg h-[250px] sm:h-[300px] lg:h-[440px] relative overflow-hidden group'>
                      <Image
                        src='/assets/nutShell1.svg'
                        alt='Descriptive Text for Image'
                        layout='fill'
                        className='object-cover rounded-xl transition duration-500 ease-in-out transform group-hover:scale-110'
                      />
                      {/* Overlay appears on hover */}
                      <div className='absolute inset-0 flex justify-center items-center bg-black-1/70 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out'>
                        {/* Background for text to ensure readability */}
                        <div className='text-center p-4 bg-black bg-opacity-60 rounded-lg'>
                          <p className='mb-4 text-white-1 text-[20px] font-normal'>
                            {t('dummy_text')}
                          </p>
                          <Link
                            href=''
                            className='inline-block text-white-1 bg-blue-1 mt-2 text-black font-medium rounded-md px-4 py-2 transition duration-300 hover:bg-opacity-80'
                          >
                            {t('click_here')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide
                  direction='up'
                  delay={100}
                  triggerOnce
                  className='w-full'
                >
                  <div className='w-full flex justify-center items-center'>
                    <div className='w-full max-w-[400px] md:max-w-full rounded-xl shadow-lg h-[250px] sm:h-[300px] lg:h-[440px] relative overflow-hidden group'>
                      <Image
                        src='/assets/nutShell2.svg'
                        alt='Descriptive Text for Image'
                        layout='fill'
                        className='object-cover rounded-xl transition duration-500 ease-in-out transform group-hover:scale-110'
                      />
                      {/* Overlay appears on hover */}
                      <div className='absolute inset-0 flex justify-center items-center bg-black-1/70 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out'>
                        {/* Background for text to ensure readability */}
                        <div className='text-center p-4 bg-black bg-opacity-60 rounded-lg'>
                          <p className='mb-4 text-white-1 text-[20px] font-normal'>
                            {t('dummy_text')}
                          </p>
                          <Link
                            href=''
                            className='inline-block text-white-1 bg-blue-1 mt-2 font-medium rounded-md px-4 py-2 transition duration-300 hover:bg-opacity-80'
                          >
                            {t('click_here')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>

              {/* three cols --> */}
              <Slide direction='up' delay={150} triggerOnce className='w-full'>
                <div className='w-full flex justify-center items-center relative rounded-xl overflow-hidden group'>
                  <div className='w-full max-w-[400px] md:max-w-full rounded-xl h-[250px] sm:h-[300px] clg:h-[400px] shadow-lg'>
                    <Image
                      src='/assets/nutShell3.svg'
                      alt=''
                      fill
                      className='object-cover rounded-xl transition duration-500 ease-in-out transform group-hover:scale-110'
                    />
                  </div>
                  {/* Overlay appears on hover */}
                  <div className='absolute inset-0 rounded-xl flex justify-center items-center bg-black-1/70 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out'>
                    {/* Background for text to ensure readability */}
                    <div className='text-center p-4 bg-black bg-opacity-60 rounded-lg'>
                      <Link
                        href=''
                        className='inline-block text-white-1 bg-blue-1 mt-2 text-black font-medium rounded-md px-4 py-2 transition duration-300 hover:bg-opacity-80'
                      >
                        {t('click_here')}
                      </Link>
                    </div>
                  </div>
                  r
                </div>
              </Slide>
              <Slide direction='up' delay={200} triggerOnce className='w-full'>
                <div className='w-full flex justify-center items-center'>
                  <Link
                    href='#'
                    className="w-full max-w-[400px] md:max-w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/nutShell4.svg')] rounded-xl h-[250px] sm:h-[300px] clg:h-[400px] relative shadow-lg"
                  >
                    <div className='flex h-full justify-center items-center gap-3'>
                      <p className='text-[20px] sm:text-[30px] text-black-1 font-semibold'>
                        {t('comming_soon')}
                      </p>
                      <Icons.eye className='w-[30px] sm:w-[35px] h-[30px] sm:h-[35px]' />
                    </div>
                  </Link>
                </div>
              </Slide>
              <Slide direction='up' delay={250} triggerOnce className='w-full'>
                <div className='w-full flex justify-center items-center relative rounded-xl overflow-hidden group'>
                  <div className='w-full max-w-[400px] md:max-w-full rounded-xl h-[250px] sm:h-[300px] clg:h-[400px] shadow-lg'>
                    <Image
                      src='/assets/nutShell5.svg'
                      alt=''
                      fill
                      className='object-cover rounded-xl transition duration-500 ease-in-out transform group-hover:scale-110'
                    />
                  </div>
                  {/* Overlay appears on hover */}
                  <div className='absolute inset-0 rounded-xl flex justify-center items-center bg-black-1/70 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out'>
                    {/* Background for text to ensure readability */}
                    <div className='text-center p-4 bg-black bg-opacity-60 rounded-lg'>
                      <Link
                        href=''
                        className='inline-block text-white-1 bg-blue-1 mt-2 text-black font-medium rounded-md px-4 py-2 transition duration-300 hover:bg-opacity-80'
                      >
                        Click Here
                      </Link>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </Zoom>
        </div>
      </Wrapper>
    </div>
  );
};

export default InNutShell;
