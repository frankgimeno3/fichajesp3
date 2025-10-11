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
    <div className='flex flex-col justify-between   text-white bg-blue-950 p-5 rounded-t'>
      <div className='flex flex-row justify-between items-top'>
        <p className="text-lg font-semibold pb-5">Todas las cuentas</p>
        <div className='my-auto '>
          <button className='bg-white text-blue-950 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-950/70 hover:text-white'
            onClick={() => router.push('/dashboard/clientes/cuentas/crear')} >
            <p>Crear cuenta</p>
          </button>
        </div>
      </div>
      <div className='flex flex-row justify-end items-center'>

        <div className='flex flex-row gap-4 items-end  text-xs '>
          <div className='flex flex-col'>
            <label className=' font-medium'>Nombre cliente</label>
            <input
              type='text'
              value={clienteFiltro}
              onChange={(e) => setClienteFiltro(e.target.value)}
              placeholder='Nombre de empresa'
              className='border px-2 py-1 rounded'
            />
          </div>

          <div className='flex flex-col'>
            <label className=' font-medium'>Código CRM</label>
            <input
              type='number'
              value={clienteFiltro}
              onChange={(e) => setClienteFiltro(e.target.value)}
              placeholder='Cuenta de cliente'
              className='border px-2 py-1 rounded'
            />
          </div>

          <div className='flex flex-col'>
            <label className=' font-medium'>Agente (número)</label>
            <input
              type='number'
              value={agenteFiltro}
              onChange={(e) => setAgenteFiltro(e.target.value)}
              placeholder='Ej: 123'
              className='border px-2 py-1 rounded'
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


          <button className='bg-white text-blue-950 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-950/70 hover:text-white'
            onClick={() => router.push('/dashboard/cuentas/crear')}
          >
            <p>Buscar</p>
          </button>
        </div>
      </div>


    </div>
  );
};

export default Filtroscuentas;
