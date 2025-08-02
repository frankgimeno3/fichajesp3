import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';
import React, { FC } from 'react';

interface informeventasProps {
  
}

const informeventas: FC<informeventasProps> = ({ }) => {
  return (
     <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600 overflow-x-scroll w-full">
      <MiddleNav tituloprincipal={` Informe Ventas agente {agente} mes {mes}`} />

      <div className="bg-white min-h-screen p-4 text-gray-600 w-full">informeventas
        </div>
        </div>  );
};

export default informeventas;