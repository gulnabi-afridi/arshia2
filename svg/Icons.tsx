import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  className?: string;
}

export const footerShape: React.FC<Props> = ({
  fill = '#BFEAFF',
  stroke = '',
  className = 'w-[1920px] h-[552px]',
}: Props) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1440 320'
  >
    <path
      fill='#BFEAFF'
      fill-opacity='1'
      d='M0,0L34.3,5.3C68.6,11,137,21,206,42.7C274.3,64,343,96,411,112C480,128,549,128,617,133.3C685.7,139,754,149,823,160C891.4,171,960,181,1029,186.7C1097.1,192,1166,192,1234,165.3C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
    ></path>
  </svg>
);

export const headerShape: React.FC<Props> = ({
  fill = '#BFEAFF',
  stroke = '',
  className = 'w-[1920px] h-[324px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    viewBox='0 0 1920 324'
    fill='none'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M0 324L80 281.467C160 238.933 320 153.867 480 146.777C640 139.689 800 210.577 960 189.311C1120 168.044 1280 54.6223 1440 19.1777C1600 -16.2667 1760 26.2667 1840 47.5333L1920 68.8V0H1840C1760 0 1600 0 1440 0C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V324Z'
      fill='#BFEAFF'
    />
  </svg>
);

export const rightArrow: React.FC<Props> = ({
  fill = '#FFFFFF',
  stroke = '',
  className = 'w-[25px] h-[24px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    viewBox='0 0 25 24'
    fill='none'
  >
    <path
      d='M20.5 12L21.0303 11.4697L21.5607 12L21.0303 12.5303L20.5 12ZM5.5 12.75C5.08579 12.75 4.75 12.4142 4.75 12C4.75 11.5858 5.08579 11.25 5.5 11.25V12.75ZM15.0303 5.46967L21.0303 11.4697L19.9697 12.5303L13.9697 6.53033L15.0303 5.46967ZM21.0303 12.5303L15.0303 18.5303L13.9697 17.4697L19.9697 11.4697L21.0303 12.5303ZM20.5 12.75H5.5V11.25H20.5V12.75Z'
      fill={fill}
    />
  </svg>
);

export const checkIcon: React.FC<Props> = ({
  fill = 'none',
  stroke = '',
  className = 'w-[44px] h-[55px]',
}: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    viewBox='0 0 44 55'
    fill={fill}
    stroke={stroke}
  >
    <g clip-path='url(#clip0_4327_242)'>
      <path
        d='M19.5 55C30.2696 55 39 46.2696 39 35.5C39 24.7304 30.2696 16 19.5 16C8.73045 16 0 24.7304 0 35.5C0 46.2696 8.73045 55 19.5 55Z'
        fill='#E6EDFB'
      />
      <path
        d='M13 27.6014C13.3313 32.2393 13.8795 37.2543 16.1557 41.3799C18.0777 44.8635 18.0672 45.4473 20.6004 42.0021C29.223 30.2754 37.1875 15.842 41.8015 2'
        stroke='#0B70D6'
        stroke-width='4'
        stroke-linecap='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_4327_242'>
        <rect width='44' height='55' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
