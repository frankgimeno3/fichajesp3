"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import FiltrosTarifas from './tarifasComponents/FiltrosTarifas';
import TablaTarifas from './tarifasComponents/TablaTarifas';
import MiddleNav from '../../0dashboardcomponents/MiddleNav';

interface TarifasProps {
  
}

const Tarifas: FC<TarifasProps> = ({ }) => {
    const router = useRouter();
    const [medioFiltro, setMedioFiltro] = useState('')
    const [publicacionFiltro, setPublicacionFiltro] = useState('')
    const [servicioFiltro, setServicioFiltro] = useState('')
  
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Tarifas  `} />

    <div className="bg-white min-h-screen p-12 text-gray-600">      
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">Tarifas</h2>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/comercial/tarifas/crear')}
        >
          <p>Crear</p>
        </button>
      </div>

       <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
        <FiltrosTarifas
          medioFiltro={medioFiltro}
          setMedioFiltro={setMedioFiltro}
          publicacionFiltro={publicacionFiltro}
          setPublicacionFiltro={setPublicacionFiltro}
          servicioFiltro={servicioFiltro}
          setServicioFiltro={setServicioFiltro}
        />

        <TablaTarifas
          medioFiltro={medioFiltro}
          publicacionFiltro={publicacionFiltro}
          servicioFiltro={servicioFiltro}
        />
      </div>
      </div>
     </div>  );
};

export default Tarifas;