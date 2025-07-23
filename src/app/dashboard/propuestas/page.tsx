'use client'
import TablaPropuestas from './componentesPropuestas/TablaPropuestas';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import FiltrosPropuestas from './componentesPropuestas/FiltrosPropuestas';

const Propuestas: FC = () => {
  const router = useRouter();

  const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

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

      <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
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

        <TablaPropuestas
          clienteFiltro={clienteFiltro}
          agenteFiltro={agenteFiltro}
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
        />
      </div>
    </div>
  );
};

export default Propuestas;
