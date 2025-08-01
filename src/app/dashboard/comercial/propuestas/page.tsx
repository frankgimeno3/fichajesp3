'use client'
import TablaPropuestas from './componentesPropuestas/TablaPropuestas';
import React, { FC, useState } from 'react';
import FiltrosPropuestas from './componentesPropuestas/FiltrosPropuestas';
import MiddleNav from '../../0dashboardcomponents/MiddleNav';
import { useRouter } from 'next/navigation';

const Propuestas: FC = () => {

  const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const router = useRouter();

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Propuestas  `} />

      <div className="bg-gray-100 min-h-screen px-12 text-gray-600">
        <div className='flex flex-row justify-end py-5'>
          <button
            className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900  text-xl'
            onClick={() => router.push('/dashboard/propuestas/crear')}
          >
            <p>Crear propuesta</p>
          </button>
        </div>

        <div className='flex flex-row justify-between w-full items-center bg-white rounded p-5'>
          <FiltrosPropuestas
            clienteFiltro={clienteFiltro}
            setClienteFiltro={setClienteFiltro}
            agenteFiltro={agenteFiltro}
            setAgenteFiltro={setAgenteFiltro}
            fechaInicio={fechaInicio}
            setFechaInicio={setFechaInicio}
            fechaFin={fechaFin}
            setFechaFin={setFechaFin}
          />


        </div>

        <div className='mt-5 p-12 rounded-lg shadow-xl bg-white'>

          <h2 className="text-lg font-semibold mb-4">Propuestas creadas</h2>
          <TablaPropuestas
            clienteFiltro={clienteFiltro}
            agenteFiltro={agenteFiltro}
            fechaInicio={fechaInicio}
            fechaFin={fechaFin}
          />
        </div>
      </div>
    </div>
  );
};

export default Propuestas;
