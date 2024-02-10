'use client';

import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import * as Icons from '../../../../svg/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const InNutShell: React.FC = () => {
  return (
    <div className='w-full py-10 bg-white-1'>
      <Wrapper>
        <div className='flex flex-col gap-6'>
          <Fade duration={1000} triggerOnce>
            <div className='flex justify-center items-center gap-2'>
              <p className='text-black-2 text-[20px] sm:text-[25px] csm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold'>
                itsolve in a nutshell
              </p>
              <Zoom duration={1000} triggerOnce>
                <Icons.eye className='w-[30px] csm:w-[48px] h-[30px] csm:h-[48px]' />
              </Zoom>
            </div>
          </Fade>
          {/* nutShell cards ---->  */}

          <Zoom>
            <div className='w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {/* two cols -->  */}
              <div className='w-full col-span-1 md:col-span-2 lg:col-span-3 gap-5 grid grid-cols-1 md:grid-cols-2'>
                <Slide direction='up' delay={50} triggerOnce className='w-full'>
                  <div className='w-full flex justify-center items-center'>
                    <Link
                      href='#'
                      className='w-full max-w-[400px] md:max-w-full rounded-xl shadow-lg h-[250px] sm:h-[300px] lg:h-[440px] relative'
                    >
                      <Image
                        src='assets/nutShell1.svg'
                        alt=''
                        fill
                        className='object-cover rounded-xl'
                      />
                    </Link>
                  </div>
                </Slide>
                <Slide
                  direction='up'
                  delay={100}
                  triggerOnce
                  className='w-full'
                >
                  <div className='w-full flex justify-center items-center'>
                    <Link
                      href='#'
                      className='w-full max-w-[400px] md:max-w-full rounded-xl shadow-lg h-[250px] sm:h-[300px] lg:h-[440px] relative'
                    >
                      <Image
                        src='assets/nutShell2.svg'
                        alt=''
                        fill
                        className='object-cover rounded-xl'
                      />
                    </Link>
                  </div>
                </Slide>
              </div>

              {/* three cols --> */}
              <Slide direction='up' delay={150} triggerOnce className='w-full'>
                <div className='w-full flex justify-center items-center'>
                  <Link
                    href='#'
                    className='w-full max-w-[400px] md:max-w-full rounded-xl h-[250px] sm:h-[300px] clg:h-[400px] relative shadow-lg'
                  >
                    <Image
                      src='/assets/nutShell3.svg'
                      alt=''
                      fill
                      className='object-cover rounded-xl'
                    />
                  </Link>
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
                        Coming soon...
                      </p>
                      <Icons.eye className='w-[30px] sm:w-[35px] h-[30px] sm:h-[35px]' />
                    </div>
                  </Link>
                </div>
              </Slide>
              <Slide direction='up' delay={250} triggerOnce className='w-full'>
                <div className='w-full flex justify-center items-center'>
                  <Link
                    href='#'
                    className="w-full max-w-[400px] md:max-w-full rounded-xl h-[250px] sm:h-[300px] clg:h-[400px] relative shadow-lg bg-cover bg-center bg-no-repeat bg-[url('/assets/nutShell5.svg')]"
                  >
                    <div className='w-full flex justify-between items-center p-4'>
                      <p className='text-black-1 text-[20px] sm:text-[24px] font-semibold'>
                        Try itsolve
                      </p>
                      <Icons.rightArrow
                        className='w-[26px] sm:w-[32px] h-[26px] sm:h-[32px]'
                        fill='#1D1F2C'
                      />
                    </div>
                  </Link>
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
