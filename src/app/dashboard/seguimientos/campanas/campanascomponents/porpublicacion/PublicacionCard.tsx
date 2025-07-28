import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface PublicacionCardProps {
  
}

const PublicacionCard: FC<PublicacionCardProps> = ({ }) => {
            const router = useRouter()
    
  return (
 <div className='flex flex-col bg-gray-100/60 hover:bg-gray-100/40 cursor-pointer border border-gray-100 px-6 py-3'
        onClick={()=>{router.push('/dashboard/seguimientos/campanas/publicacion')}}>
            <p className='font-bold text-gray-600'>Turomas</p>
            <div className='flex flex-row gap-6'>
            <div className='flex flex-row text-sm'>
                <p className='font-bold text-gray-500'>Fecha próxima deadline:</p>
                <p className='pl-3'>10 / 11 / 2025</p>
            </div>
                        <div className='flex flex-row text-sm'>
                <p className='font-bold text-gray-500'>Próxima publicación:</p>
                <p className='pl-3'>Página de publicidad en Revista del vidrio España 250</p>
            </div>
            </div>
        </div>  );
};

export default PublicacionCard;