import React from 'react';
import Wrapper from './ComponentWrapper';
import Link from 'next/link';
import * as Icons from '../../../../svg/Icons';

const Footer: React.FC = () => {
  return (
    <div className='w-full bg-blue-2 pt-24 relative mt-[70px]'>
      <Wrapper>
        <div className='w-full grid grid-cols-1 csm:grid-cols-3 md:grid-cols-4 gap-y-5 sm:gap-y-8 lg:grid-cols-5 pb-8'>
          {/*  */}
          {footerData.map((item, index) => {
            return (
              <div key={index} className='flex flex-col'>
                <p className='text-[18px] sm:text-[20px] font-medium text-black-2 underline'>
                  {item.category}
                </p>
                {/* links ---> */}
                <div className='flex flex-col gap-1 sm:gap-2 mt-2 sm:mt-3'>
                  {item.links.map((link, index) => {
                    return (
                      <Link
                        href={link.path}
                        className='text-[16px] sm:text-[18px] w-fit text-black-2 font-normal relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-black-2 hover:after:w-full after:duration-200'
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* copyright ----> */}
        <div className='w-full h-[40px] sm:h-[50px] border-t-[1px] border-black-3 flex justify-center items-center'>
          <p className='text-[14px] sm:text-[18px] font-normal text-black-2'>
            © 2022 itsolve - All Rights Reserved{' '}
          </p>
        </div>
      </Wrapper>
      <div className='w-full md:block hidden absolute -z-10 -top-[250px] csm:-top-[290px] md:-top-[300px] clg:-top-[350px]'>
        <Icons.footerShape className=' w-full h-[450px]' />
      </div>
    </div>
  );
};

const footerData = [
  {
    category: 'Company',
    links: [
      {
        path: '#',
        name: 'About us',
      },
      {
        path: '#',
        name: 'Terms of service',
      },
      {
        path: '#',
        name: 'Privacy policy',
      },
      {
        path: '#',
        name: 'Contact us',
      },
      {
        path: '#',
        name: 'LinkedIn',
      },
    ],
  },
  {
    category: 'Community',
    links: [
      {
        path: '#',
        name: 'Account upgrades',
      },
      {
        path: '#',
        name: 'Advertise with us',
      },
      {
        path: '#',
        name: 'Service offers',
      },
      {
        path: '#',
        name: 'Product offers',
      },
    ],
  },
  {
    category: 'Resources',
    links: [
      {
        path: '#',
        name: 'User overview',
      },
      {
        path: '#',
        name: 'Creator overview',
      },
      {
        path: '#',
        name: 'Alternatives',
      },
      {
        path: '#',
        name: 'Migrations',
      },
    ],
  },
  {
    category: 'Support',
    links: [
      {
        path: '#',
        name: 'Read our rules',
      },
      {
        path: '#',
        name: 'View our wiki',
      },
      {
        path: '#',
        name: 'Create a ticket',
      },
      {
        path: '#',
        name: 'Transaction dispute',
      },
      {
        path: '#',
        name: 'Status',
      },
    ],
  },
  {
    category: 'Partners',
    links: [],
  },
];

export default Footer;
