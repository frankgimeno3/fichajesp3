"use client"
import React, { FC, useState } from 'react';
import ContenidoVidrioEsp from './contenidopreferentes/contenidopestanas/contenidoVidrioEsp';
import ContenidoVidrioAl from './contenidopreferentes/contenidopestanas/contenidoVidrioAl';
import ContenidoVentanasEsp from './contenidopreferentes/contenidopestanas/contenidoVentanasEsp';
import ContenidoVentanasAl from './contenidopreferentes/contenidopestanas/contenidoVentanasAl';
import ContenidoHistorico from './contenidopreferentes/contenidopestanas/contenidoHistorico';

interface PreferentesProps {

}

const Preferentes: FC<PreferentesProps> = ({ }) => {
  const [pestana, setPestana] = useState<'vidrioesp' | 'vidrioal' | 'ventanasesp' | 'ventanasal' | 'historico'>('vidrioesp');

  return (
    <div className="bg-white h-full min-h-screen p-12 text-gray-600">
      <div className='flex flex-row justify-between'>
      <h2 className="text-xl font-semibold mb-4">Páginas preferentes</h2>
<button
            className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900  text-xl'
           >
            <p>Añadir preferente ofertada</p>
          </button>
          <button
            className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900  text-xl'
           >
            <p>Añadir preferente contratada</p>
          </button>
      </div>

      <div className="flex flex-row relative">
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'vidrioesp' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '0px' }}
          onClick={() => setPestana('vidrioesp')}
        >
          Vidrio España
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'ventanasesp' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('ventanasesp')}
        >
          Ventanas España
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'vidrioal' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('vidrioal')}
        >
          Vidrio Latam
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'ventanasal' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('ventanasal')}
        >
          Ventanas Latam
        </div>

        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'historico' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('historico')}
        >
          Historico
        </div>
      </div>
      <div className='bg-gray-100'>
            {pestana == "vidrioesp" && <ContenidoVidrioEsp/>}
            {pestana == "vidrioal" && <ContenidoVidrioAl/>}
            {pestana == "ventanasesp" && <ContenidoVentanasEsp/>}
            {pestana == "ventanasal" && <ContenidoVentanasAl/>}
            {pestana == "historico" && <ContenidoHistorico/>}
      </div>
    </div>
  );
};

export default Preferentes;