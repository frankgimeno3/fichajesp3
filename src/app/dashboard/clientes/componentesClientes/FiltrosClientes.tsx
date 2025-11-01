'use client'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface FiltroscuentasProps {
  clienteFiltro: string;
  setClienteFiltro: (value: string) => void;
  agenteFiltro: string;
  setAgenteFiltro: (value: string) => void;
  telFiltro: string;
  setTelFiltro: (value: string) => void;
  dominioFiltro: string;
  setDominioFiltro: (value: string) => void;
}

const Filtroscuentas: FC<FiltroscuentasProps> = ({
  clienteFiltro,
  setClienteFiltro,
  agenteFiltro,
  setAgenteFiltro,
  telFiltro,
  setTelFiltro,
  dominioFiltro,
  setDominioFiltro,
}) => {
  const router = useRouter();

  return (
      <div className="flex flex-col justify-left w-full  bg-white rounded p-5">
      <p className="text-lg font-semibold mb-2">Buscador de cuentas</p>

      <div className='flex flex-row w-full justify-between items-end'>

         {/* Nombre cliente */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Nombre cliente</label>
          <input
            type="text"
            value={clienteFiltro}
            onChange={(e) => setClienteFiltro(e.target.value)}
            placeholder="Nombre de empresa"
            className="border px-2 py-1 rounded"
          />
        </div>

        {/* Código CRM */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Código CRM</label>
          <input
            type="text"
       value={clienteFiltro}
              onChange={(e) => setClienteFiltro(e.target.value)}
            placeholder="Cuenta de cliente"
            className="border px-2 py-1 rounded"
          />
        </div>

        {/* Agente */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Agente (número)</label>
          <input
            type="text"
           value={agenteFiltro}
              onChange={(e) => setAgenteFiltro(e.target.value)}
            placeholder="Ej: ag_25_0004"
            className="border px-2 py-1 rounded"
          />
        </div>
          <div className='flex flex-col'>
            <label className=' font-medium'>Tel principal</label>
            <input
              type='number'
              value={telFiltro}
              onChange={(e) => setTelFiltro(e.target.value)}
              placeholder='Ej: 123'
              className='border px-2 py-1 rounded'
            />
          </div>
          <div className='flex flex-col'>
            <label className=' font-medium'>Dominio</label>
            <input
              type='text'
              value={dominioFiltro}
              onChange={(e) => setDominioFiltro(e.target.value)}
              placeholder='Ej: vidrioperfil.com'
              className='border px-2 py-1 rounded'
            />
          </div>


          <button className='bg-blue-950 text-white p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-950/70 hover:text-white'
            onClick={() => router.push('/dashboard/cuentas/crear')}
          >
            <p>Buscar</p>
          </button>
        </div>
      </div>


   );
};

export default Filtroscuentas;
