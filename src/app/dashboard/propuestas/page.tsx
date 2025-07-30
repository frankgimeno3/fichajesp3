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
       <h2 className="text-xl font-semibold mb-4">Clientes con propuestas creadas</h2>

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
  );
};

export default Propuestas;
