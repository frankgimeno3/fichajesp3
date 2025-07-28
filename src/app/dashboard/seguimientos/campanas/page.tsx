'use client';
import React, { FC, useState } from 'react';
import ContenidoPorCliente from './porcliente/ContenidoPorCliente';
import ContenidoPorPublicacion from './porpublicacion/ContenidoPorPublicacion';

interface CampañasProps {}

const Campañas: FC<CampañasProps> = ({ }) => {
  const [pestana, setPestana] = useState<'cliente' | 'publicacion'>('cliente');

  return (
    <div className="bg-white min-h-screen p-12 text-gray-600">
      <h2 className="text-lg font-semibold mb-4">Campañas en curso</h2>
      <div className="flex flex-row relative mb-4">
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'cliente' ? 'bg-gray-100 z-30 rounded-tl-lg' : 'bg-blue-950 text-white z-10 hover:bg-blue-950/80'}`}
          style={{ marginLeft: '0px' }}
          onClick={() => setPestana('cliente')}
        >
          Por cliente
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'publicacion' ? 'bg-gray-100 z-30 rounded-tl-lg' : 'bg-blue-950 text-white z-10 hover:bg-blue-950/80'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('publicacion')}
        >
          Por publicación
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

export default Campañas;
