"use client";
import React, { FC, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

import TablaDatosGenerales from './propuestacomponents/TablaDatosGenerales';
import TablaDatosAnunciante from './propuestacomponents/TablaDatosAnunciante';
import TablaContenidoPropuesta from './propuestacomponents/TablaContenidoPropuesta';
import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import propuestas from '@/app/contents/propuestasContents.json';
import OtrosDatosEnPropuesta from './propuestacomponents/OtrosDatosEnPropuesta';

const ResumenPropuesta: FC = () => {
  const router = useRouter();
  const params = useParams();  
  const idPropuesta = params.id_propuesta;

  const [isDatosContactoShown, setIsDatosContactoShown] = useState(false);

   const propuesta = propuestas.find(p => p.detalles_propuesta.id_propuesta === idPropuesta);

  if (!propuesta) {
    return <div className="text-red-500 p-6">Propuesta no encontrada. {idPropuesta} </div>;
  }

  const handleTogleDatosContactoShown = () => {
    setIsDatosContactoShown(!isDatosContactoShown);
  };

    
 
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={`Propuesta con Código ${propuesta.detalles_propuesta.id_propuesta}`} />

      <div className="bg-gray-100 min-h-screen px-12 text-gray-600">
        <div className='flex flex-row justify-between py-12'>
 
          <div className='flex flex-row justify-end text-right items-right gap-5'>
            <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => router.push('/dashboard/comercial/propuestas/propuesta/editar')}>
              Actualizar
            </button>
            <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => router.push('/dashboard/comercial/propuestas/propuesta/editar')}>
              Eliminar
            </button>
            <button className="bg-green-600 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => router.push('/dashboard/comercial/propuestas')}>
              Marcar como aceptada
            </button>
            <button className="bg-red-600 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => router.push('/dashboard/comercial/propuestas')}>
              Marcar como rechazada
            </button>
           
          </div>
        </div>

        <p className="font-bold text-gray-500">Datos generales:</p>
        <TablaDatosGenerales codigoPropuesta={propuesta.detalles_propuesta.id_propuesta} />

        <div className='flex flex-col bg-gray-100 rounded-lg shadow-xl mt-12 '>
          <div className='flex flex-row items-center justify-between bg-blue-950 text-white p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
            onClick={handleTogleDatosContactoShown}>
            <p className="font-bold">Datos de contacto</p>
            <div className="ml-2">
              {isDatosContactoShown ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          </div>

          {isDatosContactoShown && <div className='px-12 bg-gray-100 pb-12'>
            <p className="font-bold text-gray-500 mt-6">Datos de la empresa anunciante:</p>
            <TablaDatosAnunciante empresaAnunciante={empresaAnunciante} />
          </div>}
        </div>

        <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
        <TablaContenidoPropuesta contenido={propuesta.contenido_propuesta} />

        <p className="font-bold text-gray-500 mt-6">Datos para facturación:</p>
        <OtrosDatosEnPropuesta propuesta={propuesta} />
 
        <p className="font-bold text-gray-500 mt-6">Comentarios adicionales:</p>
        <div className='bg-white rounded text-gray-500 p-5 mb-24'>
          Contenido aquí, Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta et nemo delectus atque at unde, cupiditate fugit quisquam. A ducimus qui cupiditate doloribus nulla maxime obcaecati illum repellendus voluptate?
        </div>
      </div>
    </div>
  );
};

export default ResumenPropuesta;
