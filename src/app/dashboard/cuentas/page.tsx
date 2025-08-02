'use client'
import React, { FC, useState } from 'react'; 
import Filtroscuentas from './componentesClientes/FiltrosClientes';
import Tablacuentas from './componentesClientes/TablaCuentas';
import MiddleNav from '../0dashboardcomponents/MiddleNav';

const cuentas: FC = () => {

  const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [telFiltro, setTelFiltro] = useState('');
  const [dominioFiltro, setDominioFiltro] = useState('');

  return (
    <div className="flex flex-col  h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Cuentas  `} />
      <div className="bg-gray-200 min-h-screen p-12 text-gray-600">

      <div className=' rounded-lg shadow-xl bg-white'>
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
          </div>

  );
};

export default cuentas;
