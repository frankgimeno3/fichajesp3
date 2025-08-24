"use client"
import React, { FC, useState } from 'react';
import ContenidoGeneralContacto from './ContenidoGeneralContacto';
import ContenidoComentariosContacto from './ContenidoComentariosContacto';

interface FichaContactoProps {
  
}

const FichaContacto: FC<FichaContactoProps> = ({ }) => {
    const [pestana, setPestana] = useState<'general' | 'comentarios' |'administrativo' | 'registro'>('general');
  
  return (
 <div className="bg-gray-100 min-h-screen p-12 text-gray-600">
      {/* Encabezado */}
        <h2 className="text-lg font-semibold">
          Ficha de contacto   
          <span className='px-6 font-light'>Código Contacto: 01234</span> 
          <span className='px-6 font-light'>Nombre: Juan Antonio Gimeno Ramirez</span>
        </h2>

      {/* Pestañas superpuestas */}
      <div className="flex flex-row mt-3 relative">
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
      </div>

      {/* Contenido según pestaña */}
      <div className='bg-white p-12 shadow-xl rounded-b-lg'>
        {pestana === 'general' && <ContenidoGeneralContacto />}
        {pestana === 'comentarios' && <ContenidoComentariosContacto />}
      </div>
    </div>  );
};

export default FichaContacto;