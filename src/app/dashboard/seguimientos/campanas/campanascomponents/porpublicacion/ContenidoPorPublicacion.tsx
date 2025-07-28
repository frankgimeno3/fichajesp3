import React, { FC } from 'react';
import PublicacionCard from './PublicacionCard';
import { useRouter } from 'next/navigation';

interface ContenidoPorPublicacionProps {

}

const ContenidoPorPublicacion: FC<ContenidoPorPublicacionProps> = ({ }) => {
  const router = useRouter()
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row mb-6 border border-gray-200 text-gray-100 rounded-sm' style={{ "width": "600px" }}>
        <input className='p-2 px-5 placeholder-gray-400 w-full' placeholder='Buscar por empresa' />
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/seguimientos/campanas')}
        >
          <p>Buscar</p>
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        <PublicacionCard />
        <PublicacionCard />

        <PublicacionCard />

        <PublicacionCard />

      </div>
    </div>);
};

export default ContenidoPorPublicacion;