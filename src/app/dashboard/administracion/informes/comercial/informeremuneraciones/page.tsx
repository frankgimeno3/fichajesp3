import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';
import React, { FC } from 'react';

interface informeremuneracionesProps {
  
}

const informeremuneraciones: FC<informeremuneracionesProps> = ({ }) => {
  return (
     <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600 overflow-x-scroll w-full">
      <MiddleNav tituloprincipal={` Informe Remuneraciones agente {agente} mes {mes}`} />

      <div className="bg-white min-h-screen p-4 text-gray-600 w-full">informeremuneracionesProps
        </div>
        </div>
  );
};

export default informeremuneraciones;