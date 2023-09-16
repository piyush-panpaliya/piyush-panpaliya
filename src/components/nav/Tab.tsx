'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const switcher = {
  _hello: '/',
  '_about-me': '/about-me',
  _projects: '/projects',
};
const Tab = ({ name }: { name: string }) => {
  const [isActive, setIsActive] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setIsActive(
      path.split('/')[1] === switcher[name as keyof typeof switcher].slice(1),
    );
  }, [path, name]);
  return (
    <Link
      href={switcher[name as keyof typeof switcher] || '/'}
      className={cn(
        'border-r-[1px] border-x-[#607B96]/50  px-[16px] py-[12px]  hover:cursor-pointer xl:px-8 2xl:py-[18px]',
        isActive && ' border-b-[3px] border-[#FEA55F]',
      )}
    >
      {name}
    </Link>
  );
};
export default Tab;
