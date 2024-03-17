'use client';

import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from 'lucide-react';

import { Nav } from '@/components/ui/nav';
import { Button } from '@/components/ui/button';
import { useWindowWidth } from '@react-hook/window-size';

type Props = {};

export const SideNavbar: React.FC<Props> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidear() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24 '>
      {!mobileWidth && (
        <div className='absolute right-[-20px] top-7'>
          <Button
            onClick={toggleSidear}
            variant='secondary'
            className='rounded-full p-2'
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: 'Dashboard',
            icon: LayoutDashboard,
            variant: 'default',
            href: '/',
          },
          {
            title: 'Users',
            href: '/users',
            icon: UsersRound,
            variant: 'ghost',
          },
          {
            title: 'Orders',
            icon: ShoppingCart,
            variant: 'ghost',
            href: '/orders',
          },
          {
            title: 'Settings',
            href: '/settings',
            icon: Settings,
            variant: 'ghost',
          },
        ]}
      />
    </div>
  );
};
