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
