'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface FiltrosTarifasProps {
  medioFiltro: string;
  setMedioFiltro: (value: string) => void;
  publicacionFiltro: string;
  setPublicacionFiltro: (value: string) => void;
  servicioFiltro: string;
  setServicioFiltro: (value: string) => void;
}

const FiltrosTarifas: FC<FiltrosTarifasProps> = ({
  medioFiltro,
  setMedioFiltro,
  publicacionFiltro,
  setPublicacionFiltro,
  servicioFiltro,
  setServicioFiltro,
}) => {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-between mb-6'>
      <p className='text-lg font-semibold'>Buscador de Tarifas</p>

      <div className='flex flex-wrap gap-4 items-end p-5'>
        <div className='flex flex-col'>
          <label className='text-sm font-medium'>Nombre del servicio</label>
          <input
            type='text'
            value={servicioFiltro}
            onChange={(e) => setServicioFiltro(e.target.value)}
            placeholder='Ej: Servicio A'
            className='border px-2 py-1 rounded'
          />
        </div>
         <div className='flex flex-col'>
          <label className='text-sm font-medium'>Código del servicio</label>
          <input
            type='text'
            value={servicioFiltro}
            onChange={(e) => setServicioFiltro(e.target.value)}
            placeholder='Ej: SRV001'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-sm font-medium'>Medio</label>
          <input
            type='text'
            value={medioFiltro}
            onChange={(e) => setMedioFiltro(e.target.value)}
            placeholder='Ej: Email, Redes Sociales...'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-sm font-medium'>Publicación</label>
          <input
            type='text'
            value={publicacionFiltro}
            onChange={(e) => setPublicacionFiltro(e.target.value)}
            placeholder='Ej: Campaña Julio'
            className='border px-2 py-1 rounded'
          />
        </div>

        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/produccion/tarifas/crear')}
        >
          <p>Buscar</p>
        </button>
      </div>
    </div>
  );
};

export default FiltrosTarifas;
