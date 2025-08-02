"use client"
import React, { FC, useState } from 'react';
import MiddleNav from '../../0dashboardcomponents/MiddleNav';
import CampanasAdministrativas from '../componentesadministracion/CampanasAdministrativas';
import OrdenesCobro from '../componentesadministracion/OrdenesCobro';

interface ControlAdministrativoProps {

}

const ControlAdministrativo: FC<ControlAdministrativoProps> = ({ }) => {
  const [pestana, setPestana] = useState("campanasadministrativas")
  return (

    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Control administrativo  `} />

      <div className="bg-white min-h-screen p-12 text-gray-600">
              <div className="flex flex-row relative mb-4">
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'campanasadministrativas' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '0px' }}
          onClick={() => setPestana('campanasadministrativas')}
        >
          Campañas administrativas
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'ordenescobro' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('ordenescobro')}
        >
          Órdenes y contratos
        </div>
      </div>

      <div className="bg-white p-8 shadow-xl rounded-b-lg">
        {pestana === 'campanasadministrativas' && (
          <div>
            <CampanasAdministrativas/>
          </div>
        )}
        {pestana === 'ordenescobro' && (
          <div>
            <OrdenesCobro/>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ControlAdministrativo;