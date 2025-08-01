'use client';
import React, { FC, useState } from 'react';
import ContenidoPorCliente from './contratoscomponents/ContenidoPorCliente';
import ContenidoPorPublicacion from './contratoscomponents/ContenidoPorPublicacion';

interface ContratosProps {}

const Contratos: FC<ContratosProps> = ({ }) => {
  const [pestana, setPestana] = useState<'cliente' | 'publicacion'>('cliente');
  const [agenteActual] = useState("usuario")
  return (
    <div className="  pt-24  ">
      <h2 className="text-lg font-semibold mb-4">Contratos en curso para el agente {agenteActual}</h2>
      <div className="flex flex-row relative mb-4">
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'cliente' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '0px' }}
          onClick={() => setPestana('cliente')}
        >
          Contratos por cliente
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'publicacion' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('publicacion')}
        >
          Contenidos por deadline
        </div>
      </div>

      <div className="bg-white p-8 shadow-xl rounded-b-lg">
        {pestana === 'cliente' && (
          <div>
            <ContenidoPorCliente/>
          </div>
        )}
        {pestana === 'publicacion' && (
          <div>
            <ContenidoPorPublicacion/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contratos;
