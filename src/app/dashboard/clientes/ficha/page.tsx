'use client'
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import ContenidoGeneral from './componentesFicha/ContenidoGeneral';
import ContenidoAdministrativo from './componentesFicha/ContenidoAdministrativo';
import ContenidoRegistro from './componentesFicha/ContenidoRegistro';

interface FichaClienteProps {}

const FichaCliente: FC<FichaClienteProps> = ({ }) => {
  const router = useRouter();
  const [pestana, setPestana] = useState<'general' | 'comentarios' |'administrativo' | 'registro'>('general');

  return (
    <div className="bg-gray-100 min-h-screen p-12 text-gray-600">
      {/* Encabezado */}
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">
          Ficha de cliente   
          <span className='px-6 font-light'>Código: 01234</span> 
          <span className='px-6 font-light'>Nombre: Turomas</span>
        </h2>
        <button 
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/Clientes/ficha/editar')}
        >
          <p>Editar</p>
        </button>
      </div>

      {/* Pestañas superpuestas */}
      <div className="flex flex-row mt-12 relative">
        <div
          className={`p-3 rounded-tr-lg  cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'general' ? 'bg-white z-30 rounded-tl-lg' : 'bg-gray-200/70 z-10  hover:bg-gray-200'}`}
          style={{
            position: 'relative',
            marginLeft: '0px',
          }}
          onClick={() => setPestana('general')}
        >
          Datos Generales
        </div>
        <div
          className={`p-3 rounded-tr-lg  cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'comentarios' ? 'bg-white z-30 rounded-tl-lg' : 'bg-gray-200/70 z-20  hover:bg-gray-200'}`}
          style={{
            position: 'relative',
            marginLeft: '-5px',
          }}
          onClick={() => setPestana('comentarios')}
        >
          Comentarios
        </div>
                <div
          className={`p-3 rounded-tr-lg  cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'administrativo' ? 'bg-white z-30 rounded-tl-lg' : 'bg-gray-200/70 z-20  hover:bg-gray-200'}`}
          style={{
            position: 'relative',
            marginLeft: '-5px',
          }}
          onClick={() => setPestana('administrativo')}
        >
          Contenido Administrativo
        </div>
        <div
          className={`p-3 rounded-tr-lg  cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'registro' ? 'bg-white z-30 rounded-tl-lg' : 'bg-gray-200/70 z-10  hover:bg-gray-200'}`}
          style={{
            position: 'relative',
            marginLeft: '-5px',
          }}
          onClick={() => setPestana('registro')}
        >
          Registro
        </div>
      </div>

      {/* Contenido según pestaña */}
      <div className='bg-white p-12 shadow-xl rounded-b-lg'>
        {pestana === 'general' && <ContenidoGeneral />}
        {pestana === 'comentarios' && <ContenidoAdministrativo />}
        {pestana === 'administrativo' && <ContenidoAdministrativo />}
        {pestana === 'registro' && <ContenidoRegistro />}
      </div>
    </div>
  );
};

export default FichaCliente;
