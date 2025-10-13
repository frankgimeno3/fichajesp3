"use client";
import React, { FC, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

import TablaDatosGenerales from './propuestacomponents/TablaDatosGenerales';
import TablaDatosAnunciante from './propuestacomponents/TablaDatosAnunciante';
import TablaContenidoPropuesta from './propuestacomponents/TablaContenidoPropuesta';
import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import propuestas from '@/app/contents/propuestasContents.json';
import OtrosDatosEnPropuesta from './propuestacomponents/OtrosDatosEnPropuesta';
import ModalBorrarPropuesta from './propuestacomponents/ModalBorrarPropuesta';

const ResumenPropuesta: FC = () => {
  const router = useRouter();
  const params = useParams();
  const idPropuesta = params.id_propuesta;
  const [modalOpen, setModalOpen] = useState(false);

  const propuesta = propuestas.find(p => p.detalles_propuesta.id_propuesta === idPropuesta);

  if (!propuesta) {
    return <div className="text-red-500 p-6">Propuesta no encontrada. {idPropuesta}</div>;
  }

   

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={`Propuesta con Código ${propuesta.detalles_propuesta.id_propuesta}`} />

      <div className="bg-gray-100 min-h-screen px-12 text-gray-600">
        <div className="flex flex-row justify-between py-12">
          <div className="flex flex-row justify-end text-right items-right gap-5">
            <button
              className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => router.push('/dashboard/comercial/propuestas/propuesta/editar')}
            >
              Actualizar
            </button>
            <button
              className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => setModalOpen(true)}
            >
              Eliminar
            </button>
            <button
              className="bg-green-600 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => router.push('/dashboard/comercial/propuestas')}
            >
              Marcar como aceptada
            </button>
            <button
              className="bg-red-600 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => router.push('/dashboard/comercial/propuestas')}
            >
              Marcar como rechazada
            </button>
          </div>
        </div>

        <p className="font-bold text-gray-500">Datos generales:</p>
        <TablaDatosGenerales codigoPropuesta={propuesta.detalles_propuesta.id_propuesta} />

        <div className="bg-gray-100 py-12">
          <p className="font-bold text-gray-500">Datos de contacto:</p>
          <TablaDatosAnunciante empresaAnunciante={propuesta.cuenta_propuesta.id_cuenta_propuesta} />
        </div>

        <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
        <TablaContenidoPropuesta contenido={propuesta.contenido_propuesta} />

        <p className="font-bold text-gray-500 mt-6">Datos para facturación:</p>
        <OtrosDatosEnPropuesta propuesta={propuesta} />

        <p className="font-bold text-gray-500 mt-6">Comentarios adicionales:</p>
        <div className="bg-white rounded text-gray-500 p-5 mb-24">
          Contenido aquí, Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta et nemo delectus
          atque at unde, cupiditate fugit quisquam. A ducimus qui cupiditate doloribus nulla maxime obcaecati illum
          repellendus voluptate?
        </div>
      </div>

       <ModalBorrarPropuesta
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
       />
    </div>
  );
};

export default ResumenPropuesta;
