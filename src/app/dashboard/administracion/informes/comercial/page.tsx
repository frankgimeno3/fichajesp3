"use client"
import React, { FC, useState } from 'react';
import InformesRemuneraciones from '../../componentesadministracion/InformesRemuneraciones';
import InformesVentas from '../../componentesadministracion/InformesVentas';
import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';

interface InformesDelComercialProps {
  
}

const InformesDelComercial: FC<InformesDelComercialProps> = ({ }) => {
  const [pestana, setPestana] = useState("remuneraciones")
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600 overflow-x-scrollw-full">
      <MiddleNav tituloprincipal={` Informes del comercial {agente}  `} />
      <div className="bg-white min-h-screen p-2 text-gray-600 w-full">
            <div className="flex flex-row relative mb-4">
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'remuneraciones' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '0px' }}
          onClick={() => setPestana('remuneraciones')}
        >
          Informes de remuneraciones
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'ventas' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('ventas')}
        >
          Informes de ventas
        </div>
      </div>

      <div className="bg-white p-8 shadow-xl rounded-b-lg">
        {pestana === 'remuneraciones' && (
          <div>
            <InformesRemuneraciones/>
          </div>
        )}
        {pestana === 'ventas' && (
          <div>
            <InformesVentas/>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default InformesDelComercial;