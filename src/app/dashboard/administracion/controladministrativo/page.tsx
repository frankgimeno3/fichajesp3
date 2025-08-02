import React, { FC } from 'react';
import MiddleNav from '../../0dashboardcomponents/MiddleNav';

interface ControlAdministrativoProps {

}

const ControlAdministrativo: FC<ControlAdministrativoProps> = ({ }) => {
  return (

    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Control administrativo  `} />

      <div className="bg-white min-h-screen p-12 text-gray-600">
      </div>
    </div>
  );
};

export default ControlAdministrativo;