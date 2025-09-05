import MiddleNav from '@/app/general_components/MiddleNav';
import React, { FC } from 'react';

interface CrearPropuestasProps {
  
}

const CrearPropuestas: FC<CrearPropuestasProps> = ({ }) => {
  return (
        <div className="bg-white min-h-screen p-12 text-gray-600">
      <MiddleNav tituloprincipal={` Crear propuesta  `} />

      <div className='flex flex-row justify-between w-full items-center'>
        <p>Check</p>
      </div>
        
      </div>
    );
};

export default CrearPropuestas;