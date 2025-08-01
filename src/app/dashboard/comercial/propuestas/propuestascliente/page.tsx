"use client"
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import TablaPropuestasCliente from './propuestasclientecomponents/TablaPropuestasAprobadas';
import PropsAprobadasContent from './propuestasclientecomponents/PropsAprobadas';
import PropsPendientesContent from './propuestasclientecomponents/PropsPendientes';
import PropsRechazadasContent from './propuestasclientecomponents/PropsRechazadas';

interface PropuestasClienteProps {

}

const PropuestasCliente: FC<PropuestasClienteProps> = ({ }) => {
  const router = useRouter();

  const [nombreCliente, setNombreCliente] = useState('TVITEC')
    const [pestana, setPestana] = useState<'pendientes' | 'aprobadas' | 'rechazadas'>('pendientes');
  

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">

      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">Propuestas</h2>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/propuestas/crear')}
        >
          <p>Crear</p>
        </button>
      </div>

      <div className='flex flex-col mt-12 p-3 rounded-lg shadow-xl bg-white'>
        <div className='flex flex-row w-full justify-between'>
          <h2 className="text-lg font-semibold mb-4 py-3">Propuestas hechas al cliente {nombreCliente}</h2>
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
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'pendientes' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '0px' }}
          onClick={() => setPestana('pendientes')}
        >
          Pendientes
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'aprobadas' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('aprobadas')}
        >
          Aprobadas
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'rechazadas' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('rechazadas')}
        >
          Rechazadas
        </div>
      </div>

      <div className="bg-white p-8 shadow-xl rounded-b-lg">
        {pestana === 'pendientes' && (
          <div>
            <PropsPendientesContent/>
          </div>
        )}
        {pestana === 'aprobadas' && (
          <div>
            <PropsAprobadasContent/>
          </div>
        )}        
        {pestana === 'rechazadas' && (
          <div>
            <PropsRechazadasContent/>
          </div>
        )}
      </div>
        
      </div>
    </div>);
};

export default PropuestasCliente;