"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import TablaServicios from './serviciosComponents/TablaServicios';
import FiltrosServicios from './serviciosComponents/FiltrosServicios';

interface ServiciosProps {
  
}

const Servicios: FC<ServiciosProps> = ({ }) => {
    const router = useRouter();
    const [medioFiltro, setMedioFiltro] = useState('')
    const [publicacionFiltro, setPublicacionFiltro] = useState('')
    const [servicioFiltro, setServicioFiltro] = useState('')
  
  return (
  <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">Servicios</h2>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/servicios/crear')}
        >
          <p>Crear</p>
        </button>
      </div>

       <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
        <FiltrosServicios
          medioFiltro={medioFiltro}
          setMedioFiltro={setMedioFiltro}
          publicacionFiltro={publicacionFiltro}
          setPublicacionFiltro={setPublicacionFiltro}
          servicioFiltro={servicioFiltro}
          setServicioFiltro={setServicioFiltro}
        />

        <TablaServicios
          medioFiltro={medioFiltro}
          publicacionFiltro={publicacionFiltro}
          servicioFiltro={servicioFiltro}
        />
      </div>
     </div>  );
};

export default Servicios;