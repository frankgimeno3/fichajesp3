'use client';

import { useRouter, useParams } from 'next/navigation';
import React, { useState } from 'react';
import ContenidoGeneral from './componentesFicha/ContenidoGeneral';
import ContenidoComentarios from './componentesFicha/ContenidoComentarios';
import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import BotonFlotante from '@/app/general_components/componentes_recurrentes/BotonFlotante';

const FichaCliente = () => {
  const router = useRouter();
  const params = useParams();

   const id_cuenta = params?.id_cuenta as string;
 
  const [pestana, setPestana] = useState<'general' | 'comentarios'>('general');
  const [isContenidoEdited, setIsContenidoEdited] = useState(false);

  if (!id_cuenta) {
    return <p className="text-red-500">El id_cuenta introducido no corresponde a ninguna cuenta</p>;
  }

  return (
    <div className="flex flex-col h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={`Cuenta ${id_cuenta}`} />

      <div className="bg-gray-200 min-h-screen p-12 text-gray-600">
        <div className="flex flex-row justify-between w-full items-center">
          <h2 className="text-lg font-semibold">
            Ficha de cliente
            <span className="px-6 font-light">Código: {id_cuenta}</span>
          </h2>

          <div className="flex flex-row gap-4 items-center">
            <button
              className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() =>
                router.push(`/dashboard/comercial/propuestas/cuentas/${id_cuenta}`)
              }
            >
              <p>Propuestas</p>
            </button>
          </div>
        </div>

         <div className="flex flex-row mt-6 relative">
          {[
            { key: 'general', label: 'Datos Generales' },
            { key: 'comentarios', label: 'Comentarios' },
          ].map(({ key, label }, index) => (
            <div
              key={key}
              className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
                ${
                  pestana === key
                    ? 'bg-gray-100 z-30 rounded-tl-lg'
                    : 'bg-blue-950 text-white z-10 hover:bg-blue-950/80'
                }`}
              style={{ marginLeft: index === 0 ? '0px' : '-5px' }}
              onClick={() => setPestana(key as typeof pestana)}
            >
              {label}
            </div>
          ))}
        </div>

         <div className="bg-white p-12 shadow-xl rounded-b-lg">
          {pestana === 'general' && (
            <ContenidoGeneral
              id_cuenta={id_cuenta}
              setIsContenidoEdited={setIsContenidoEdited}
             />
          )}

          {pestana === 'comentarios' && (
            <ContenidoComentarios id_cuenta={id_cuenta} />
          )}
        </div>
      </div>

      <BotonFlotante isContenidoEdited={isContenidoEdited} />
    </div>
  );
};

export default FichaCliente;
