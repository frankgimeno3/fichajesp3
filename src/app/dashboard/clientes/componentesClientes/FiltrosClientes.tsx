'use client'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface FiltrosClientesProps {
  clienteFiltro: string;
  setClienteFiltro: (value: string) => void;
  agenteFiltro: string;
  setAgenteFiltro: (value: string) => void;
  telFiltro: string;
  setTelFiltro: (value: string) => void;
  dominioFiltro: string;
  setDominioFiltro: (value: string) => void;
}

const FiltrosClientes: FC<FiltrosClientesProps> = ({
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
    <div className='flex flex-col justify-between mb-6 '>
      <p className="text-lg font-semibold">Buscador de Clientes</p>

      <div className='flex flex-wrap gap-4 items-end p-5'>
        <div className='flex flex-col'>
          <label className='text-sm font-medium'>Nombre cliente</label>
          <input
            type='text'
            value={clienteFiltro}
            onChange={(e) => setClienteFiltro(e.target.value)}
            placeholder='Nombre de empresa'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-sm font-medium'>Código CRM</label>
          <input
            type='number'
            value={clienteFiltro}
            onChange={(e) => setClienteFiltro(e.target.value)}
            placeholder='Cuenta de cliente'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-sm font-medium'>Agente (número)</label>
          <input
            type='number'
            value={agenteFiltro}
            onChange={(e) => setAgenteFiltro(e.target.value)}
            placeholder='Ej: 123'
            className='border px-2 py-1 rounded'
          />
        </div>
                <div className='flex flex-col'>
          <label className='text-sm font-medium'>Tel principal</label>
          <input
            type='number'
            value={telFiltro}
            onChange={(e) => setTelFiltro(e.target.value)}
            placeholder='Ej: 123'
            className='border px-2 py-1 rounded'
          />
        </div>
                <div className='flex flex-col'>
          <label className='text-sm font-medium'>Dominio</label>
          <input
            type='text'
            value={dominioFiltro}
            onChange={(e) => setDominioFiltro(e.target.value)}
            placeholder='Ej: vidrioperfil.com'
            className='border px-2 py-1 rounded'
          />
        </div>

        
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/Clientes/crear')}
        >
          <p>Buscar</p>
        </button>
      </div>
    </div>
  );
};

export default FiltrosClientes;
