'use client';

import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import ContenidoGeneral from './componentesFicha/ContenidoGeneral';
import ContenidoComentarios from './componentesFicha/ContenidoComentarios';

interface FichaClienteProps {
  id_cuenta: string;  // Recibimos id_cuenta desde la página padre
}

const FichaCliente: FC<FichaClienteProps> = ({ id_cuenta }) => {
  const router = useRouter();
  const [pestana, setPestana] = useState<'general' | 'comentarios' | 'administrativo'>('general');

  return (
    <div className="bg-white min-h-screen p-12 text-gray-600">
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold">
          Ficha de cliente
          <span className='px-6 font-light'>Código: 01234</span>
          <span className='px-6 font-light'>Nombre: Turomas</span>
        </h2>
        <div className='flex flex-row gap-4 items-center'>
          <button
            className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
            onClick={() => router.push('/dashboard/comercial/propuestas/propuestascliente')}
          >
            <p>Propuestas</p>
          </button>
          <button
            className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
            onClick={() => router.push('/dashboard/Clientes/ficha/editar')}
          >
            <p>Editar</p>
          </button>
        </div>
      </div>

       <div className="flex flex-row mt-6 relative mb-4">
        {[
          { key: 'general', label: 'Datos Generales' },
          { key: 'comentarios', label: 'Comentarios' },
        ].map(({ key, label }, index) => (
          <div
            key={key}
            className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
              ${pestana === key ? 'bg-gray-100 z-30 rounded-tl-lg' : 'bg-blue-950 text-white z-10 hover:bg-blue-950/80'}`}
            style={{ marginLeft: index === 0 ? '0px' : '-5px' }}
            onClick={() => setPestana(key as typeof pestana)}
          >
            {label}
          </div>
        ))}
      </div>

       <div className='bg-white p-12 shadow-xl rounded-b-lg'>
        {pestana === 'general' && <ContenidoGeneral id_cuenta={id_cuenta} />}
        {pestana === 'comentarios' && <ContenidoComentarios id_cuenta={id_cuenta}/>}
      </div>
    </div>
  );
};

export default FichaCliente;
