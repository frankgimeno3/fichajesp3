'use client';
import React, { FC, useState } from 'react';
import ContenidoPorCliente from './contratoscomponents/ContenidoPorCliente';
 import MiddleNav from '@/app/general_components/MiddleNav';

interface ContratosProps {}

const Contratos: FC<ContratosProps> = ({ }) => {
  const [pestana, setPestana] = useState<'cliente' | 'publicacion'>('cliente');
  const [agenteActual] = useState("usuario")
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={`Mis contratos  `} />

      <div className="bg-gray-100 min-h-screen px-12 text-gray-600">      
        <h2 className="text-lg font-semibold my-4">Contratos en curso del agente {agenteActual}</h2>
      <div className="flex flex-row relative mb-4">
         
      </div>

                <ContenidoPorCliente/>

     </div>
    </div>
  );
};

export default Contratos;
