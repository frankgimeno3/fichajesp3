"use client"
import MiddleNav from '@/app/general_components/MiddleNav';
import React, { FC, useState } from 'react';

interface CrearServiciosProps {

}

const CrearServicios: FC<CrearServiciosProps> = ({ }) => {
  const [fase, setFase] = useState()

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Crear Servicios  `} />

      <div className="bg-white min-h-screen  text-gray-600">
        <div className='mt-8 p-3 rounded-lg shadow-xl bg-white min-h-screen'>
        </div>
      </div>
    </div>);
};

export default CrearServicios;