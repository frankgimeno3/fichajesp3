'use client';

import React, { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface MiddleNavProps {
  tituloprincipal: string;
}

const MiddleNav: FC<MiddleNavProps> = ({ tituloprincipal }) => {
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname.split('/').filter(Boolean);
  
  const buildPath = (index: number) => '/' + pathSegments.slice(0, index + 1).join('/');

  const problematicSegments = ['fichajes', 'comercial', 'clientes', 'produccion', 'administracion', 'operaciones'];

  const handleClick = (segment: string, index: number) => {
    if (problematicSegments.includes(segment)) {
      router.push('/dashboard');
    } else {
      router.push(buildPath(index));
    }
  };

  return (
    <div className='flex flex-row text-white items-center justify-between bg-blue-950/70 px-8 py-1'>
      <h2 className="text-xl font-black">{tituloprincipal}</h2>
      <div className='flex flex-row flex-wrap items-center gap-1 py-3 text-sm'>
        {pathSegments.map((segment, index) => (
          <div className="flex items-center" key={index}>
            <p
              className="cursor-pointer text-white bg-blue-950/50 px-3 py-1 rounded hover:bg-blue-900"
              onClick={() => handleClick(segment, index)}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </p>
            {index < pathSegments.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1 h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleNav;
