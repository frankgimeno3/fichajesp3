'use client'
import React, { FC, useState } from 'react';
import Filtroscuentas from '../componentesClientes/FiltrosClientes';
import Tablacuentas from '../componentesClientes/TablaCuentas';
import MiddleNav from '../../../general_components/componentes_recurrentes/MiddleNav';
import { useRouter } from 'next/navigation';

const Cuentas: FC = () => {

  const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [telFiltro, setTelFiltro] = useState('');
  const [dominioFiltro, setDominioFiltro] = useState('');

    const router = useRouter();
  
    
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Cuentas  `} />
      <div className="bg-gray-100 min-h-screen px-12 text-gray-600">
        <div className="flex flex-row justify-end py-5">
          <button
            className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900 text-md"
            onClick={() => router.push('/dashboard/clientes/cuentas/crear')}
          >
            <p>Crear propuesta</p>
          </button>
        </div>
 
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

export default Cuentas;
