'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
const switcher = {
  '/about-me': '',
  '/about-me/bio': 'Bio',
  '/about-me/edu': 'Education ',
  '/about-me/interest': 'Experience',
};
const FileNav = () => {
  const path = usePathname();
  if (path == '/') return null;
  const name = switcher[path as keyof typeof switcher] || 'info';
  return (
    <div className="flex h-10 border-b-[1px] border-[#607B96]/50">
      <div className="flex h-full min-w-[160px] items-center  justify-between gap-6 border-r-[1px] border-[#607B96]/50 pl-4 pr-2">
        <div>{name}</div>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_64_1646)">
            <path
              d="M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z"
              fill="#607B96"
            />
          </g>
          <defs>
            <clipPath id="clip0_64_1646">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0.347656 0.779297)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FileNav;
