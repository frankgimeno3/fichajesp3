'use client';

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';

interface MiddleNavProps {
  tituloprincipal: string;
}

const MiddleNav: FC<MiddleNavProps> = ({ tituloprincipal }) => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col bg-gray-100 p-12 '>
        <p>{pathname}</p>
        <h2 className="text-2xl font-bold">{tituloprincipal}</h2>
    </div>
  );
};

export default MiddleNav;
