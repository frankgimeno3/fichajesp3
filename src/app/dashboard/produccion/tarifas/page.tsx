"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'; 
import MiddleNav from '../../0dashboardcomponents/MiddleNav';
import FiltrosServicios from './serviciosComponents/FiltrosServicios';
import TablaServicios from './serviciosComponents/TablaServicios';

interface ServiciosProps {
  
}

const Servicios: FC<ServiciosProps> = ({ }) => {
    const router = useRouter();
    const [medioFiltro, setMedioFiltro] = useState('')
    const [publicacionFiltro, setPublicacionFiltro] = useState('')
    const [servicioFiltro, setServicioFiltro] = useState('')
  
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Servicios  `} />

    <div className="bg-white min-h-screen  text-gray-600">      
      <div className='mt-8 p-3 rounded-lg shadow-xl bg-white'>
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
      </div>
     </div>  );
};

export default Servicios;