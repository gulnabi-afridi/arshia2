'use client';

import React, { useRef, useEffect, useState } from 'react';
import Wrapper from '../Shared/ComponentWrapper';
import * as Icons from '../../../../svg/Icons';
import Image from 'next/image';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import Typewriter from 'typewriter-effect/dist/core';
import { useTranslation } from 'react-i18next';
import Spinner from '../Shared/Spinner';

const ImportReviews: React.FC = () => {
  const { t } = useTranslation();

  const typewriterRef = useRef(null);
  const [showReview1, setShowReview1] = useState<boolean | string>(false);
  const [showReview2, setShowReview2] = useState<boolean | string>(false);
  const [showReview3, setShowReview3] = useState<boolean | string>(false);
  const [importStatus, setImportStatus] = useState({
    1: 'importing',
    2: 'importing',
    3: 'importing',
  });

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ['Reviews'],
        autoStart: true,
        changeDeleteSpeed: 3,
        changeDelay: 2,
        pauseFor: 100,
        loop: true,
      });
    }
  }, []);

  const handleImportClick = () => {
    setImportStatus({ 1: 'importing', 2: 'importing', 3: 'importing' });

    setTimeout(() => {
      setShowReview1(true);
    }, 500);
    setTimeout(
      () => setImportStatus((prev) => ({ ...prev, 1: 'imported' })),
      2500
    );

    setTimeout(() => {
      setShowReview2(true);
    }, 1000);
    setTimeout(
      () => setImportStatus((prev) => ({ ...prev, 2: 'imported' })),
      3000
    );

    setTimeout(() => {
      setShowReview3(true);
    }, 1500);
    setTimeout(
      () => setImportStatus((prev) => ({ ...prev, 3: 'imported' })),
      3500
    );

    setTimeout(() => setShowReview1('hiding'), 4500);
    setTimeout(() => setShowReview2('hiding'), 5000);
    setTimeout(() => setShowReview3('hiding'), 5500);
  };

  const handleAnimationEnd = (reviewNumber: number) => {
    if (reviewNumber === 1 && showReview1 === 'hiding') setShowReview1(false);
    if (reviewNumber === 2 && showReview2 === 'hiding') setShowReview2(false);
    if (reviewNumber === 3 && showReview3 === 'hiding') setShowReview3(false);
  };

  return (
    <div className='w-full py-10 bg-white-1'>
      <Wrapper>
        <div className='flex flex-col gap-8 w-full justify-center items-center'>
          <Fade triggerOnce className='w-full'>
            <div className='flex flex-col gap-2 csm:gap-4 w-full justify-center items-center'>
              <p className='text-[20px] csm:text-[25px] md:text-[30px] lg:text-[40px] text-black-1 font-semibold'>
                {t('im_title')},{' '}
                <span className='uppercase text-[12px] sm:text-[16px] csm:text-[22px] md:text-[28px] lg:text-[35px] text-[#534599] font-rockSalt'>
                  {t('one_click')}
                </span>
              </p>
              <p className='text-[16px] csm:text-[18px] md:text-[20px] max-w-[550px] w-full text-center text-black-3 font-normal'>
                {t('im_sub_title')}
              </p>
              {/* try it now ---->  */}
              <Fade delay={100} triggerOnce>
                <div className='flex justify-center items-center gap-2'>
                  <p className='text-[12px] whitespace-nowrap sm:text-[16px] csm:text-[18px] md:text-[20px] lg:text-[24px] text-black-2 font-medium'>
                    {t('try_it_now')}
                  </p>
                  <p className='text-[12px] whitespace-nowrap sm:text-[16px] csm:text-[18px] md:text-[20px] lg:text-[24px] text-[#F38B94] bg-[#FEECEE] px-[6px] md:px-[8px] py-[3px] md:py-[4px] rounded-[4px] font-medium'>
                    20 {t('free_import')}
                  </p>
                  <Icons.rightArrow
                    className='w-[24px] h-[24px]'
                    fill='#33363F'
                  />
                  <p className='text-[12px] whitespace-nowrap sm:text-[16px] csm:text-[18px] md:text-[20px] lg:text-[24px] text-[#15B1FE] font-medium'>
                    {t('how_it_work')}
                  </p>
                  <Icons.bulb className='w-[20px] lg:w-[24px] h-[20px] lg:h-[25px]' />
                </div>
              </Fade>
            </div>
          </Fade>
          {/* import reviews --->  */}
          <Slide direction='up' triggerOnce className='w-full'>
            <div className='w-full flex flex-col gap-2 csm:gap-4 justify-center items-center'>
              <Zoom
                triggerOnce
                className='w-full flex justify-center items-center'
              >
                <div className='w-full relative max-w-[580px] md:gap-0 gap-1 md:max-w-[880px] p-3 sm:p-5 lg:p-6 flex md:flex-row flex-col justify-between items-start csm:items-center rounded-[15px] bg-[#D0D8FF]'>
                  {/* left portion --->  */}
                  <div className='flex gap-3 justify-center items-start'>
                    <Fade triggerOnce>
                      <div className='w-[80px] csm:w-[100px] h-[80px] csm:h-[100px] relative'>
                        <Image
                          src='/assets/profile.svg'
                          fill
                          alt=''
                          className='object-fill'
                        />
                      </div>
                    </Fade>
                    <Fade cascade damping={0.5} triggerOnce>
                      <div className='flex flex-col gap-3 items-start'>
                        <p className='text-[18px] csm:text-[20px] lg:text-[24px] text-black-1 font-medium'>
                          {t('im_card_title')}
                        </p>
                        <div className='flex justify-center items-center gap-2 csm:gap-3'>
                          {/* send review icon -->  */}
                          <Slide direction='left' triggerOnce>
                            <button className='flex hover:opacity-80 justify-center rounded-md bg-[#534599] items-center gap-1 lg:gap-2 px-[10px] csm:px-[14px] lg:px-[16px] py-[8px]'>
                              <Icons.clickArrow className='w-[18px] csm:w-[24px] h-[18px] csm:h-[24px]' />
                              <p className='text-[12px] csm:text-[16px] lg:text-[18px] text-white-1 font-medium'>
                                {t('send_review')}
                              </p>
                            </button>
                          </Slide>
                          {/* share icon --->  */}
                          <Slide direction='right' triggerOnce>
                            <button className='hover:opacity-80 px-[10px] py-[8px] bg-white-1 rounded-[4px] flex justify-center items-center'>
                              <Icons.share className='w-[20px] csm:w-[25px] h-[20px] csm:h-[25px]' />
                            </button>
                          </Slide>
                          {/* report button ---->  */}
                          <Fade triggerOnce>
                            <button className='csm:flex hidden bg-white-1 rounded-md px-[14px] lg:px-[16px] py-[8px] justify-center items-center gap-2'>
                              <Icons.report className='w-[20px] csm:w-[25px] h-[20px] csm:h-[25px]' />
                              <p className='text-black-2 text-[12px] csm:text-[18px] font-medium'>
                                {t('report')}
                              </p>
                            </button>
                          </Fade>
                        </div>
                      </div>
                    </Fade>
                  </div>
                  {/* import button ----> */}
                  <Zoom triggerOnce className='w-full csm:w-auto'>
                    <div className='w-full flex justify-center items-center gap-2'>
                      <button
                        onClick={handleImportClick}
                        disabled={
                          showReview1 === true &&
                          showReview2 === true &&
                          showReview3 === true
                        }
                        className='buttonScaleAnimation disabled:opacity-50 disabled:cursor-not-allowed flex justify-center bg-[#534599] rounded-md items-center gap-2 px-[18px] hover:opacity-80 py-[8px]'
                      >
                        <Icons.star className='w-[16px] csm:w-[19px] h-[16px] csm:h-[18px]' />

                        <p
                          // ref={typewriterRef}
                          className='text-white-1 text-[12px] csm:text-[16px] lg:text-[18px] font-medium'
                        >
                          Import
                        </p>
                      </button>
                      {/* report button for small screen  ---->  */}
                      <button className='flex csm:hidden bg-white-1 rounded-md px-[14px] lg:px-[16px] py-[8px] justify-center items-center gap-2'>
                        <Icons.report className='w-[20px] csm:w-[25px] h-[20px] csm:h-[25px]' />
                        <p className='text-black-2 text-[12px] csm:text-[18px] font-medium'>
                          {t('report')}
                        </p>
                      </button>

                      <p></p>
                    </div>
                  </Zoom>
                  {/* arrow icon */}
                  <div className='absolute left-[7rem] csm:left-[18rem] sm:left-[12rem] md:left-auto md:-right-[1rem] cmd:-right-[1rem] celg:-right-[5rem] clg:-right-[10rem] xl:-right-[14rem] -bottom-[5rem] sm:-bottom-[5rem] csm:-bottom-[5rem] csm2:-bottom-[7rem] md:-top-[5rem] celg:-top-[10rem] lg:-top-[2rem] cmd:-top-[5rem] xl:-top-[10rem]'>
                    <div className='w-[60px] csm2:w-[100px] md:w-[60px] lg:w-[100px] celg:w-[130px] clg:w-[170px] xl:w-[240px] h-[80px] csm2:h-[120px] md:h-[80px] lg:h-[120px] celg:h-[170px] xl:h-[280px] relative'>
                      <Image
                        src='/assets/fillArrow.svg'
                        alt=''
                        className='object-cover opacity-70 md:rotate-0 rotate-90'
                        fill
                      />
                      {/* text  */}
                      <div className='flex justify-center items-center gap-1 lg:gap-2 absolute top-[2rem] md:top-[1rem] lg:top-[2rem] celg:top-[3rem] xl:top-[5rem] -left-[3rem] md:-left-[5rem] celg:-left-[3rem] clg:-left-[2rem] xl:-left-[1rem]'>
                        <p className='text-[12px] csm2:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[24px] text-[#534599] font-bold '>
                          Import
                        </p>
                        <p
                          ref={typewriterRef}
                          className='text-[12px] csm2:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[24px] text-[#534599] font-bold '
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
              {/* reviews --->  */}
              <div className='flex flex-col gap-1 w-full justify-center items-center'>
                {/* upwork review -->  */}
                {showReview1 && (
                  <div
                    onAnimationEnd={() => handleAnimationEnd(1)}
                    className={`w-full max-w-[340px] sm:max-w-[380px] csm:max-w-[480px] md:max-w-[720px] bg-[#F3F5F7] rounded-[10px] p-2 csm:p-3 md:p-4 flex justify-between
                    ${showReview1 === 'hiding' ? 'review-slide-out ' : ''} 
                    ${showReview1 === true ? 'review-slide-in' : ''}
                    items-center`}
                  >
                    <div className='flex justify-center items-center gap-2 csm:gap-3'>
                      <Icons.upwork className='w-[30px] csm:w-[48px] h-[30px] csm:h-[48px]' />
                      <p className='text-[14px] csm:text-[18px] text-black-2 font-medium'>
                        {t('found_reviews')}
                      </p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                      {importStatus[1] === 'importing' ? (
                        <>
                          <Spinner />
                          <p className='text-[14px] csm:text-[18px] text-[#777980] font-medium'>
                            {t('importing')}...
                          </p>
                        </>
                      ) : (
                        <p className='text-[14px] csm:text-[18px] text-[#534599] font-medium'>
                          imported
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/* fiver review ---> */}
                {showReview2 && (
                  <div
                    onAnimationEnd={() => handleAnimationEnd(2)}
                    className={`w-full max-w-[320px] sm:max-w-[360px] csm:max-w-[460px] md:max-w-[700px] bg-[#F3F5F7] rounded-[10px] p-3      ${
                      showReview2 === 'hiding' ? 'review-slide-out ' : ''
                    } 
                    ${
                      showReview2 === true ? 'review-slide-in' : ''
                    } md:p-4 flex justify-between items-center`}
                  >
                    <div className='flex justify-center items-center gap-2 csm:gap-3'>
                      <Icons.fiver className='w-[30px] csm:w-[48px] h-[30px] csm:h-[48px]' />
                      <p className='text-[14px] csm:text-[18px] text-black-2 font-medium'>
                        {t('found_reviews ')}
                      </p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                      {importStatus[2] === 'importing' ? (
                        <>
                          <Spinner />
                          <p className='text-[14px] csm:text-[18px] text-[#777980] font-medium'>
                            {t('importing')}...
                          </p>
                        </>
                      ) : (
                        <p className='text-[14px] csm:text-[18px] text-[#534599] font-medium'>
                          imported
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/* google review ---> */}

                {showReview3 && (
                  <div
                    onAnimationEnd={() => handleAnimationEnd(3)}
                    className={`w-full  max-w-[300px] ${
                      showReview3 === 'hiding' ? 'review-slide-out ' : ''
                    } 
                    ${
                      showReview3 === true ? 'review-slide-in' : ''
                    } sm:max-w-[340px] csm:max-w-[440px] md:max-w-[680px] bg-[#F3F5F7] rounded-[10px] p-3 md:p-4 flex justify-between items-center`}
                  >
                    <div className='flex justify-center items-center gap-2 csm:gap-3'>
                      <Icons.google className='w-[30px] csm:w-[48px] h-[30px] csm:h-[48px]' />
                      <p className='text-[14px] csm:text-[18px] text-black-2 font-medium'>
                        {t('found_reviews ')}
                      </p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                      {importStatus[3] === 'importing' ? (
                        <>
                          <Spinner />
                          <p className='text-[14px] csm:text-[18px] text-[#777980] font-medium'>
                            {t('importing')}...
                          </p>
                        </>
                      ) : (
                        <p className='text-[14px] csm:text-[18px] text-[#534599] font-medium'>
                          imported
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Slide>
        </div>
      </Wrapper>
    </div>
  );
};

export default ImportReviews;
