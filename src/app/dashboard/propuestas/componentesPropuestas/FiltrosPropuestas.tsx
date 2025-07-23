'use client'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface FiltrosPropuestasProps {
  clienteFiltro: string;
  setClienteFiltro: (value: string) => void;
  agenteFiltro: string;
  setAgenteFiltro: (value: string) => void;
  fechaInicio: string;
  setFechaInicio: (value: string) => void;
  fechaFin: string;
  setFechaFin: (value: string) => void;
}

const FiltrosPropuestas: FC<FiltrosPropuestasProps> = ({
  clienteFiltro,
  setClienteFiltro,
  agenteFiltro,
  setAgenteFiltro,
  fechaInicio,
  setFechaInicio,
  fechaFin,
  setFechaFin,
}) => {
      const router = useRouter();
    
  return (
    <div className='flex flex-col justify-between mb-6 '>
      <p className="text-lg font-semibold">Buscador de propuestas</p>

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
          <label className='text-sm font-medium'>Desde</label>
          <input
            type='date'
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-sm font-medium'>Hasta</label>
          <input
            type='date'
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className='border px-2 py-1 rounded'
          />
        </div>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/propuestas/crear')}
        >
          <p>Buscar</p>
        </button>
      </div>
    </div>
  );
};

export default FiltrosPropuestas;
