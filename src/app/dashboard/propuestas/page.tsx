"use client"

import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import PropSvg from './componentesPropuestas/PropSvg';
import FolderSvg from './componentesPropuestas/FolderSvg';

interface PropuestasProps {

}

const Propuestas: FC<PropuestasProps> = ({ }) => {
  const router = useRouter()
  const handleRedirection = (param: string) => {
    router.push(param)
  }

  const [explorando, setExplorando] = useState("cliente")

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">
          Propuestas
        </h2>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => handleRedirection('/dashboard/propuestas/crear')}
        >
          <p>Crear</p>
        </button>
      </div>

      <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
        <div className='flex flex-row justify-between w-full items-center'>
          <p className="text-lg font-semibold mb-4">
            Explorar propuestas
          </p>
          <div className='flex flex-row gap-3'>
            <button
              className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
              onClick={() => handleRedirection('/dashboard/propuestas/crear')}
            >
              Por código de cliente        </button>
            <button
              className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
              onClick={() => handleRedirection('/dashboard/propuestas/crear')}
            >
              <p>Por código de agente</p>
            </button>
                        <button
              className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
              onClick={() => handleRedirection('/dashboard/propuestas/crear')}
            >
              Por fecha</button>
          </div>
        </div>


          <PropSvg />
        <div className='flex flex-row w-full gap-12'>
          <FolderSvg contenido='VIDRIOPERFIL'/>
             <FolderSvg contenido='VITRUM'/>
          <FolderSvg contenido='GLASSTECH'/>
          <FolderSvg contenido='GLASSINFORMER'/>

        </div>
      </div>

    </div>
  );
};

export default Propuestas;