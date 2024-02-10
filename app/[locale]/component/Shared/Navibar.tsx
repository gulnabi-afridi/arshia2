'use client';

import React, { useState, useEffect } from 'react';
import Wrapper from './ComponentWrapper';
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { Slide } from 'react-awesome-reveal';

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showItSolveDrawer, setShowItSolveDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleItSolveDrawer = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setShowItSolveDrawer((prevState) => !prevState);
    if (!showItSolveDrawer) {
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up, hide if scrolling down
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      if (showItSolveDrawer) {
        setShowItSolveDrawer(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <React.Fragment>
      <div
        className={`w-full ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        } 
        h-[50px] fixed left-0 transition-transform duration-500 sm:h-[60px] z-50 md:h-[80px] lg:h-[90px] bg-blue-2`}
      >
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
                onClick={toggleItSolveDrawer}
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
                  <div className='flex flex-col gap-5 mt-10'>
                    {/* links ---->  */}
                    <div className='flex flex-col justify-center items-center gap-5'>
                      {/* services --->  */}
                      <Link
                        href='#'
                        className='flex justify-center bg-transparent items-center gap-0 hover:opacity-80'
                      >
                        <p className='text-[22px] font-semibold text-black-2'>
                          services
                        </p>
                        <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
                      </Link>
                      {/* itsolve --->  */}
                      <Link
                        href='#'
                        onClick={toggleItSolveDrawer}
                        className='flex justify-center items-center gap-0 hover:opacity-80'
                      >
                        <p className='text-[22px] font-semibold text-black-2'>
                          itsolve
                        </p>
                        <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
                      </Link>
                      {/* itsolve --->  */}
                      <Link
                        href='#'
                        className='flex justify-center items-center gap-0 hover:opacity-80'
                      >
                        <p className='text-[22px] font-semibold text-black-2'>
                          contact
                        </p>
                        <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
                      </Link>
                      {/* change language --->  */}
                      <Link
                        href='#'
                        className='flex justify-center items-center gap-0 hover:opacity-80'
                      >
                        <p className='text-[22px] font-semibold text-black-2'>
                          en
                        </p>
                        <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
                      </Link>
                    </div>
                    {/* signIn + signUp button --->  */}
                    <div className='flex justify-center items-center gap-3 mt-4'>
                      <button className='w-[150px] sm:w-[100px] h-[45px] active:translate-y-[1px] rounded-[6px] bg-blue-1 text-[18px] font-semibold text-white-1 hover:opacity-80'>
                        Sign up
                      </button>
                      <button className='w-[150px] sm:w-[100px] h-[45px] active:translate-y-[1px] rounded-[6px] border-[1px] border-blue-1 text-[18px] font-semibold text-black-2 hover:opacity-80'>
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </Wrapper>
      </div>
      {/* itSolve drawer ----->  */}
      <div
        className={`fixed -top-4 md:top-0 left-0 w-full flex justify-center items-center h-screen z-40 transition-transform ease-in-out ease-out duration-700 ${
          showItSolveDrawer ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='h-[80%] w-full flex flex-col justify-center items-center gap-4 bg-black-1'>
          {itSolveDrawerLinks.map((item, index) => {
            return (
              <Slide key={index} direction='down' delay={100 * index}>
                <Link
                  key={index}
                  href={item.path}
                  className='text-[32px] capitalize text-white-1 font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[3px] after:bg-white-1 hover:after:w-full after:duration-200'
                >
                  {item.name}
                </Link>
              </Slide>
            );
          })}
        </div>
        <div className='h-[20%] bg-black-1/5'></div>
      </div>
    </React.Fragment>
  );
};

export default Navibar;

const itSolveDrawerLinks = [
  {
    path: '#',
    name: 'about',
  },
  {
    path: '#',
    name: 'clients',
  },
  {
    path: '#',
    name: 'team',
  },
  {
    path: '#',
    name: 'careers',
  },
  {
    path: '#',
    name: 'blog',
  },
];
