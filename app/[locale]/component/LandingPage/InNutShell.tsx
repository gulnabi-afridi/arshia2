import React from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import * as Icons from '../../../../svg/Icons';
import Image from 'next/image';
import Link from 'next/link';

const InNutShell: React.FC = () => {
  return (
    <div className='w-full py-10 bg-white-1'>
      <Wrapper>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-black-2 text-[40px] font-semibold'>
              itsolve in a nutshell
            </p>
            <Icons.eye className='w-[48px] h-[48px]' />
          </div>
          {/* nutShell cards ---->  */}

          <div className='w-full grid gap-5 grid-cols-3'>
            {/* two cols -->  */}
            <div className='w-full col-span-3 gap-5 grid grid-cols-2'>
              <Link
                href='#'
                className='w-full rounded-xl shadow-lg h-[440px] relative'
              >
                <Image
                  src='assets/nutShell1.svg'
                  alt=''
                  fill
                  className='object-cover rounded-xl'
                />
              </Link>
              <Link
                href='#'
                className='w-full rounded-xl shadow-lg h-[440px] relative'
              >
                <Image
                  src='assets/nutShell2.svg'
                  alt=''
                  fill
                  className='object-cover rounded-xl'
                />
              </Link>
            </div>
            {/* three cols --> */}
            <Link
              href='#'
              className='w-full rounded-xl h-[400px] relative shadow-lg'
            >
              <Image
                src='/assets/nutShell3.svg'
                alt=''
                fill
                className='object-cover rounded-xl'
              />
            </Link>
            <Link
              href='#'
              className="w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/nutShell4.svg')] rounded-xl h-[400px] relative shadow-lg"
            >
              <div className='flex h-full justify-center items-center gap-3'>
                <p className='text-[30px] text-black-1 font-semibold'>
                  Coming soon...
                </p>
                <Icons.eye className='w-[35px] h-[35px]' />
              </div>
            </Link>
            <Link
              href='#'
              className="w-full rounded-xl h-[400px] relative shadow-lg bg-cover bg-center bg-no-repeat bg-[url('/assets/nutShell5.svg')]"
            >
              <div className='w-full flex justify-between items-center p-4'>
                <p className='text-black-1 text-[24px] font-semibold'>
                  Try itsolve
                </p>
                <Icons.rightArrow
                  className='w-[32px] h-[32px]'
                  fill='#1D1F2C'
                />
              </div>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default InNutShell;
