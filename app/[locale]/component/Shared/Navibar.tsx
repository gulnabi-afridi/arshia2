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
import { Slide, Zoom } from 'react-awesome-reveal';
import OutSideClick from '@/app/hooks/OutSideClick';
import * as Icons from '../../../../svg/Icons';
import { useTranslation } from 'react-i18next';

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showItSolveDrawer, setShowItSolveDrawer] = useState(false);
  const [showPlatFormFirstDrawer, setPlatFormFirstDrawer] = useState(false);
  const [showPlatFormSecDrawer, setPlatFormSecDrawer] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleItSolveDrawer = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setPlatFormFirstDrawer(false);
    setPlatFormSecDrawer(false);
    setIsOpen(false);
    setShowItSolveDrawer((prevState) => !prevState);
    if (!showItSolveDrawer) {
    }
  };

  const togglePlatFormDrawer = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    if (showItSolveDrawer) {
      setShowItSolveDrawer(false);
    }
    setPlatFormSecDrawer(!showPlatFormSecDrawer);

    setTimeout(() => {
      setPlatFormFirstDrawer(!showPlatFormFirstDrawer);
    }, 500);
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
      if (showPlatFormFirstDrawer) {
        setPlatFormFirstDrawer(false);
        setTimeout(() => {
          setPlatFormSecDrawer(false);
        }, 200);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // data ---->

  const itSolveDrawerLinks = [
    {
      path: '#',
      name: t('about'),
    },
    {
      path: '#',
      name: t('client'),
    },
    {
      path: '#',
      name: t('team'),
    },
    {
      path: '#',
      name: t('blog'),
    },
    {
      path: '#',
      name: t('careers'),
    },
  ];

  return (
    <React.Fragment>
      <div
        className={`w-full ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        } 
        h-[50px] fixed left-0 transition-transform duration-500 sm:h-[60px] z-50 md:h-[80px] lg:h-[90px] ${
          showItSolveDrawer || showPlatFormFirstDrawer || showPlatFormSecDrawer
            ? ' bg-blue-1'
            : 'bg-blue-2'
        } `}
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
                onClick={togglePlatFormDrawer}
                className='flex justify-center px-3 py-3 rounded-[10px] hover:bg-blue-1/90 bg-transparent items-center gap-0 hover:opacity-80'
              >
                <p className='text-[18px] font-semibold text-black-2'>
                  {t('h_platform')}
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
                  {t('h_itsolve')}
                </p>
                <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
              </Link>
              {/* itsolve --->  */}
              <Link
                href='#'
                className='flex justify-center px-3 py-3 rounded-[10px] hover:bg-blue-1/90 bg-transparent items-center gap-0 hover:opacity-80'
              >
                <p className='text-[18px] font-semibold text-black-2'>
                  {t('h_contact')}
                </p>
                <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
              </Link>
              {/* change language --->  */}
              <OutSideClick
                Event={() => {
                  setShowLanguageMenu(false);
                }}
                style='relative bottom-0'
              >
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className='flex justify-center px-3 py-3 rounded-[10px] hover:bg-blue-1/90 bg-transparent items-center gap-0 hover:opacity-80'
                >
                  <p className='text-[18px] font-semibold text-black-2'>en</p>
                  <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
                </button>
                {/* drawer for toggle language ---->  */}
                {showLanguageMenu && (
                  <div className='w-[150px] flex bg-white-1 rounded-lg -bottom-[78px] -right-[40px] flex-col shadow-xl absolute'>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('en');
                        setShowLanguageMenu(false);
                      }}
                      className='text-[16px] h-[35px] w-full hover:bg-black-1/5 rounded-t-xl text-black-1 font-medium'
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('fr');
                        setShowLanguageMenu(false);
                      }}
                      className='text-[16px] h-[35px] w-full hover:bg-black-1/5 rounded-b-xl text-black-1 font-medium'
                    >
                      French
                    </button>
                  </div>
                )}
              </OutSideClick>
            </div>
            {/* signUp + signIn links -----> */}
            <div className='hidden lg:flex justify-center items-center gap-3'>
              <button
                className={`px-6 h-[45px] active:translate-y-[1px] rounded-[6px] ${
                  showItSolveDrawer ||
                  showPlatFormFirstDrawer ||
                  showPlatFormSecDrawer
                    ? ' bg-black-1'
                    : 'bg-blue-1'
                } text-[18px] font-semibold text-white-1 hover:opacity-80`}
              >
                {t('sign_up')}
              </button>
              <button
                className={`px-6 h-[45px] active:translate-y-[1px] rounded-[6px] border-[1px] text-[18px] font-semibold text-black-2 hover:opacity-80 ${
                  showItSolveDrawer ||
                  showPlatFormFirstDrawer ||
                  showPlatFormSecDrawer
                    ? ' border-black-1'
                    : 'border-blue-1'
                }`}
              >
                {t('login')}
              </button>
            </div>
            {/* for small screen ----> */}
            <div className='lg:hidden block'>
              <RxHamburgerMenu
                onClick={toggleDrawer}
                className={`text-[30px] sm:text-[30px] md:text-[40px] ${
                  showItSolveDrawer ||
                  showPlatFormFirstDrawer ||
                  showPlatFormSecDrawer
                    ? 'text-black-1'
                    : 'text-blue-1'
                } `}
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
                      <button
                        onClick={togglePlatFormDrawer}
                        className='flex justify-center bg-transparent items-center gap-0 hover:opacity-80'
                      >
                        <p className='text-[22px] font-semibold text-black-2'>
                          {t('h_platform')}
                        </p>
                        <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
                      </button>
                      {/* itsolve --->  */}
                      <button
                        onClick={toggleItSolveDrawer}
                        className='flex justify-center items-center gap-0 hover:opacity-80'
                      >
                        <p className='text-[22px] font-semibold text-black-2'>
                          {t('h_itsolve')}
                        </p>
                        <MdOutlineKeyboardArrowDown className='text-[26px] text-black-2' />
                      </button>
                      {/* itsolve --->  */}
                      <Link
                        href='#'
                        className='flex justify-center items-center gap-0 hover:opacity-80'
                      >
                        <p className='text-[22px] font-semibold text-black-2'>
                          {t('h_contact')}
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
                        {t('sign_up')}
                      </button>
                      <button className='w-[150px] sm:w-[100px] h-[45px] active:translate-y-[1px] rounded-[6px] border-[1px] border-blue-1 text-[18px] font-semibold text-black-2 hover:opacity-80'>
                        {t('login')}
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
        className={`fixed h-[95%] sm:h-[85%] bg-blue-1 -top-4 md:top-0 left-0 w-full flex justify-center items-center z-40 transition-transform ease-in-out ease-out duration-700 ${
          showItSolveDrawer ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Wrapper style='h-full w-full '>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 '>
            <div className='md:block hidden w-full h-full border-l-[1px] border-black-1 border-r-[1px]'></div>
            <div className='w-fill flex flex-col gap-4 justify-center items-center'>
              {itSolveDrawerLinks.map((item, index) => {
                return (
                  <Zoom
                    key={index}
                    triggerOnce
                    direction='down'
                    delay={100 * index}
                  >
                    <Link
                      key={index}
                      href={item.path}
                      className='text-[32px] capitalize text-black-1 font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[3px] after:bg-black-1 hover:after:w-full after:duration-200'
                    >
                      {item.name}
                    </Link>
                  </Zoom>
                );
              })}
            </div>
            <div className='w-full md:block hidden h-full border-l-[1px] border-black-1 border-r-[1px]'></div>
          </div>
        </Wrapper>
      </div>
      {/* platforms drawer ----->  */}
      <div className='w-full'>
        {/* first portion ---->  */}
        <div
          className={`fixed h-[90%] csm:h-[90%] md:h-[78%] bg-blue-1 -top-4 md:top-0 left-0 w-full flex justify-center items-center z-40 transition-transform ease-in-out ease-out duration-700 ${
            showPlatFormFirstDrawer ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <Wrapper style='h-full'>
            <div className='w-full grid justify-center gap-3 sm:gap-4 lg:gap-6 items-center grid-cols-1 csm:grid-cols-2 md:grid-cols-3 mt-[9rem] md:mt-[9rem]'>
              {/* ist and sec card --->  */}
              {platFormDrawer.map((item, index) => {
                return (
                  <Link
                    href='#'
                    className='w-full md:block hidden hover:scale-105 duration-300 hover:opacity-80 h-[250px] lg:h-[300px] xl:h-[370px] relative overflow-hidden rounded-xl'
                  >
                    <Image
                      src={item.img}
                      alt=''
                      fill
                      className='object-cover'
                    />
                  </Link>
                );
              })}
              {/* third card ---->  */}
              <Link
                href='#'
                className="w-full md:flex hidden h-[250px] lg:h-[300px] xl:h-[370px] hover:scale-105 duration-300 hover:opacity-80  flex-col justify-center items-start border-black-1 bg-cover bg-center bg-no-repeat bg-[url('/assets/nutShell4.svg')] rounded-xl"
              >
                <div className='w-full flex h-full justify-center items-center gap-3'>
                  <p className='text-[20px] sm:text-[30px] text-black-1 font-semibold'>
                    {t('comming_soon')}
                  </p>
                  <Icons.eye className='w-[30px] sm:w-[35px] h-[30px] sm:h-[35px]' />
                </div>
              </Link>
              {/* for small screen ---->  */}
              {platFormDrawerDataSmallScreen.map((item, index) => {
                return (
                  <Link
                    href={item.path}
                    className='w-full md:hidden border-[1px] border-black-1 rounded-xl p-3 sm:p-5 flex flex-col'
                  >
                    <h2 className='text-[24px] sm:text-[26px] csm:text-[22px] md:text-[30px] font-medium text-black-1'>
                      {item.name}
                    </h2>
                  </Link>
                );
              })}
              {/*  */}
              <button className='flex md:hidden border-[1px] border-black-1 rounded-xl w-full justify-between p-3 sm:p-5 items-center gap-10'>
                <h2 className='text-[24px] sm:text-[26px] csm:text-[22px] md:text-[30px] text-black-1 font-medium'>
                  Let's work together
                </h2>
              </button>
            </div>
          </Wrapper>
        </div>
        {/* sec portion ---> */}
        <div
          className={`fixed h-[90%] md:flex hidden bg-white-1/90 z-30 -top-4 md:top-0 left-0 w-full justify-center items-center transition-transform ease-in-out ease-out duration-1000 ${
            showPlatFormSecDrawer ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <Wrapper style='w-full h-full'>
            <div className='w-full h-full flex justify-start items-end pb-[18px]'>
              <div className='flex justify-center items-center gap-10'>
                <h2 className='text-[30px] text-black-1 font-medium'>
                  Let's work together
                </h2>
                <button className='text-white-1 cursor-pointer hover:opacity-80 text-[16px] font-medium bg-black-1 px-[40px] py-4 rounded-[60px]'>
                  {t('click_here')}
                </button>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navibar;

const platFormDrawer = [
  {
    img: '/assets/nutShell1.svg',
  },
  {
    img: '/assets/nutShell2.svg',
  },
];

const platFormDrawerDataSmallScreen = [
  {
    path: '#',
    name: 'Platform 1',
  },
  {
    path: '#',
    name: 'Platform 2',
  },
  {
    path: '#',
    name: 'Platform 3',
  },
];
