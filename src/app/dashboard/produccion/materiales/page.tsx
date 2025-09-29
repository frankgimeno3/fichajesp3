"use client"
import React, { FC, useState } from 'react';
import Contenidos from '../contenidos/Contenidos';
import MiddleNav from '../../../general_components/componentes_recurrentes/MiddleNav';

interface MaterialesProps {

}

const Materiales: FC<MaterialesProps> = ({ }) => {
 

  return (
    <div className="flex flex-col  h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Materiales  `} />
      <div className="bg-gray-200 min-h-screen p-12 text-gray-600">

        <p className='font-bold pb-5'>Seleccione una publicación para ver sus contenidos</p>
        <Contenidos />
      </div>
    </div>
  );
};

export default Materiales;