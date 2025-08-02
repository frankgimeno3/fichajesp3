'use client'
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'; 
import Filtroscuentas from './componentesClientes/FiltrosClientes';
import Tablacuentas from './componentesClientes/TablaClientes';

const cuentas: FC = () => {
  const router = useRouter();

  const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [telFiltro, setTelFiltro] = useState('');
  const [dominioFiltro, setDominioFiltro] = useState('');

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">cuentas</h2>
        <button className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/cuentas/crear')} >
          <p>Crear</p>
        </button>
      </div>

      <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
        <Filtroscuentas
          clienteFiltro={clienteFiltro}
          setClienteFiltro={setClienteFiltro}
          agenteFiltro={agenteFiltro}
          setAgenteFiltro={setAgenteFiltro}
          telFiltro={telFiltro}
          setTelFiltro={setTelFiltro}
          dominioFiltro={dominioFiltro}
          setDominioFiltro={setDominioFiltro}
        />

        <Tablacuentas
          clienteFiltro={clienteFiltro}
          agenteFiltro={agenteFiltro}
          telFiltro={telFiltro}
          dominioFiltro={dominioFiltro}
        />
      </div>
    </div>
  );
};

export default cuentas;
