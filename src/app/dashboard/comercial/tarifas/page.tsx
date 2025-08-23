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

    <div className="bg-white min-h-screen  text-gray-600">      
      <div className='mt-8 p-3 rounded-lg shadow-xl bg-white'>
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