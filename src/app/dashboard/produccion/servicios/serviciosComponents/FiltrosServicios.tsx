'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface FiltrosServiciosProps {
  medioFiltro: string;
  setMedioFiltro: (value: string) => void;
  publicacionFiltro: string;
  setPublicacionFiltro: (value: string) => void;
  servicioFiltro: string;
  setServicioFiltro: (value: string) => void;
}

const FiltrosServicios: FC<FiltrosServiciosProps> = ({
  medioFiltro,
  setMedioFiltro,
  publicacionFiltro,
  setPublicacionFiltro,
  servicioFiltro,
  setServicioFiltro,
}) => {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-between mb-3'>
      <div className='flex flex-row justify-between px-4'>
        <h2 className="text-lg font-semibold mb-4">Buscador de Servicios</h2>
        <div className='my-auto'>
        <button
          className='bg-blue-950 text-xs text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/produccion/servicios/crear')}
        >
          <p>Crear</p>
        </button>
        </div>
      </div>

      <div className='flex flex-wrap gap-4 items-end p-5 text-xs'>
        <div className='flex flex-col'>
          <label className='text-xs font-medium'>Nombre del servicio</label>
          <input
            type='text'
            value={servicioFiltro}
            onChange={(e) => setServicioFiltro(e.target.value)}
            placeholder='Ej: Servicio A'
            className='border px-2 py-1 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-xs font-medium'>Código del servicio</label>
          <input
            type='text'
            value={servicioFiltro}
            onChange={(e) => setServicioFiltro(e.target.value)}
            placeholder='Ej: SRV001'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-xs font-medium'>Medio</label>
          <input
            type='text'
            value={medioFiltro}
            onChange={(e) => setMedioFiltro(e.target.value)}
            placeholder='Ej: Email, Redes Sociales...'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-xs font-medium'>Publicación</label>
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
          onClick={() => router.push('/dashboard/produccion/servicios/crear')}
        >
          <p>Buscar</p>
        </button>
      </div>
    </div>
  );
};

export default FiltrosServicios;
