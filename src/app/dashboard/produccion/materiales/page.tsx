"use client"
import React, { FC, useState } from 'react';
import Contenidos from '../contenidos/Contenidos';
import Planillos from '../planillos/Planillos';
import MiddleNav from '../../../general_components/MiddleNav';

interface MaterialesProps {

}

const Materiales: FC<MaterialesProps> = ({ }) => {
  const [pestana, setPestana] = useState("Contenidos")


  return (
    <div className="flex flex-col  h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Materiales  `} />
      <div className="bg-gray-200 min-h-screen p-12 text-gray-600">

        <div className="flex flex-row relative ">
          <div
            className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'Contenidos' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
            style={{ marginLeft: '0px' }}
            onClick={() => setPestana('Contenidos')}
          >
            Pendiente de publicar
          </div>
          <div
            className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'Planillos' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
            style={{ marginLeft: '0px' }}
            onClick={() => setPestana('Planillos')}
          >
            Planillos
          </div>
        </div>
        {pestana == "Contenidos" && <Contenidos />}
        {pestana == "Planillos" && <Planillos />}
      </div>
    </div>
  );
};

export default Materiales;