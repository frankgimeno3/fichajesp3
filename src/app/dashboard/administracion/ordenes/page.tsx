"use client"
import React, { FC, useState } from 'react';
import MiddleNav from '../../../general_components/MiddleNav';
import OrdenesCobro from '../componentesadministracion/OrdenesCobro';

interface OrdenesProps {

}

const Ordenes: FC<OrdenesProps> = ({ }) => {
  const [pestana, setPestana] = useState("campanasadministrativas")
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600 overflow-x-scrollw-full">
      <MiddleNav tituloprincipal={` Control administrativo  `} />
      <div className="bg-white min-h-screen p-2 text-gray-600 w-full p-12">
        <p>Órdenes de cobro</p>
        <OrdenesCobro />
      </div>
    </div>
  );
};

export default Ordenes;