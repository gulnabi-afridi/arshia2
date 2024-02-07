'use client';

import React, { useState } from 'react';
import Wrapper from './ComponentWrapper';
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className='w-full h-[50px] sm:h-[60px] md:h-[80px] lg:h-[90px] bg-blue-2'>
        <Wrapper style='h-full'>
          <div className='w-full flex justify-between h-full items-center'>
            {/* logo --->  */}
            <div className='w-[90px] sm:w-[100px] md:w-[140px] h-[40px] sm:h-[50px] md:h-[80px] relative'>
              <Image
                src='/assets/logo.svg'
                alt=''
                fill
                className='object-fill'
              />
            </div>
            {/* links ---->  */}
            <div className='hidden lg:flex justify-center items-center gap-5'>
              {/* services --->  */}
              <Link
                href='#'
                className='flex justify-center px-3 py-3 rounded-[10px] hover:bg-blue-1/90 bg-transparent items-center gap-0 hover:opacity-80'
              >
                <p className='text-[18px] font-semibold text-black-2'>
                  services
                </p>
                <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
              </Link>
              {/* itsolve --->  */}
              <Link
                href='#'
                className='flex justify-center px-3 py-3 rounded-[10px] hover:bg-blue-1/90 bg-transparent items-center gap-0 hover:opacity-80'
              >
                <p className='text-[18px] font-semibold text-black-2'>
                  itsolve
                </p>
                <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
              </Link>
              {/* itsolve --->  */}
              <Link
                href='#'
                className='flex justify-center px-3 py-3 rounded-[10px] hover:bg-blue-1/90 bg-transparent items-center gap-0 hover:opacity-80'
              >
                <p className='text-[18px] font-semibold text-black-2'>
                  contact
                </p>
                <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
              </Link>
              {/* change language --->  */}
              <Link
                href='#'
                className='flex justify-center px-3 py-3 rounded-[10px] hover:bg-blue-1/90 bg-transparent items-center gap-0 hover:opacity-80'
              >
                <p className='text-[18px] font-semibold text-black-2'>en</p>
                <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
              </Link>
            </div>
            {/* signUp + signIn links -----> */}
            <div className='hidden lg:flex justify-center items-center gap-3'>
              <button className='w-[100px] h-[45px] active:translate-y-[1px] rounded-[6px] bg-blue-1 text-[18px] font-semibold text-white-1 hover:opacity-80'>
                Sign up
              </button>
              <button className='w-[100px] h-[45px] active:translate-y-[1px] rounded-[6px] border-[1px] border-blue-1 text-[18px] font-semibold text-black-2 hover:opacity-80'>
                Login
              </button>
            </div>
            {/* for small screen ----> */}
            <div className='lg:hidden block'>
              <RxHamburgerMenu
                onClick={toggleDrawer}
                className='text-[30px] sm:text-[30px] md:text-[40px] text-blue-1'
              />
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawer'
              >
                <div className='w-full flex flex-col p-4'>
                  {/* cross icon --->  */}
                  <div className='w-full flex justify-end pr-4 pt-2'>
                    <RxCross1
                      onClick={toggleDrawer}
                      className='text-[30px] text-blue-1'
                    />
                  </div>
                  {/* links ---->  */}
                  <div className=''></div>
                </div>
              </Drawer>
            </div>
          </div>
        </Wrapper>
      </div>
    </React.Fragment>
  );
};

export default Navibar;
