'use client'

import React, { FC, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import PropsAprobadasContent from './propuestasclientecomponents/PropsAprobadas';
import PropsPendientesContent from './propuestasclientecomponents/PropsPendientes';
import PropsRechazadasContent from './propuestasclientecomponents/PropsRechazadas';

interface PropuestasClienteProps {}

const PropuestasCliente: FC<PropuestasClienteProps> = ({ }) => {
  const router = useRouter();
  const params = useParams();
  const id_CUENTA = params?.id_CUENTA as string;

  const [pestana, setPestana] = useState<'pendientes' | 'aprobadas' | 'rechazadas'>('pendientes');

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">

      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">Propuestas</h2>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/comercial/propuestas/crear')}
        >
          <p>Crear</p>
        </button>
      </div>

      <div className='flex flex-col mt-12 p-3 rounded-lg shadow-xl bg-white'>
        <div className='flex flex-row w-full justify-between'>
          <h2 className="text-lg font-semibold mb-4 py-3">Propuestas del cliente {id_CUENTA}</h2>
          <div>
            <button
              className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
              onClick={() => router.push('/dashboard/clientes/ficha')}
            >
              <p>Ficha del cliente</p>
            </button>
          </div>
        </div> 

        <div className="flex flex-row relative mb-4">
          {['pendientes','aprobadas','rechazadas'].map((tab) => (
            <div
              key={tab}
              className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
                ${pestana === tab ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
              style={{ marginLeft: tab === 'pendientes' ? '0px' : '-5px' }}
              onClick={() => setPestana(tab as any)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        <div className="bg-white p-8 shadow-xl rounded-b-lg">
          {pestana === 'pendientes' && <PropsPendientesContent id_CUENTA={id_CUENTA} />}
          {pestana === 'aprobadas' && <PropsAprobadasContent id_CUENTA={id_CUENTA} />}
          {pestana === 'rechazadas' && <PropsRechazadasContent id_CUENTA={id_CUENTA} />}
        </div>
      </div>
    </div>
  );
};

export default PropuestasCliente;
