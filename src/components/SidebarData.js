import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <img src="/dashboard.svg" />, 
     iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Companies',
    path: '/companies',
    icon: <img src="/companies.svg" />, 
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Deals',
    path: '/deals',
    icon: <img src="/deals.svg" />,
    // icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Primary Deals',
        path: '/reports/primary',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Secondary Deals',
        path: '/reports/secondary',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
    ]
  },
  {
    title: 'Investors',
    path: '/investors',
    icon: <img src="/investors.svg" />,
    // icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Logs',
    path: '/logs',
    icon: <img src="/Log.svg" />,
    // icon: <IoIcons.IoMdPeople />
  },
  

];
