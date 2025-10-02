"use client"
import { useRouter, useParams } from 'next/navigation';
import React, { FC } from 'react';
 import data from '@/app/contents/contenidosContents.json'  

const MaterialesRevista: FC = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const idPublicacion = params.id;  

   const materiales = data.filter((item) => item.idPublicacion === idPublicacion);

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
      <h2 className="text-xl font-semibold mb-4">
        Materiales de la publicación {idPublicacion}
      </h2>
    <div className='flex flex-row justify-between w-full items-center bg-white rounded'>
      <table className='min-w-full'>
        <thead className='bg-blue-950 text-white'>
            <tr>
              <th className='text-left p-2 font-light w-1/8'>Empresa</th>
              <th className='text-left p-2 font-light w-2/8'>Tipo de material</th>
              <th className='text-left p-2 font-light w-2/8'>Especificaciones</th>
              <th className='text-left p-2 font-light w-1/8'>Agente</th>
              <th className='text-left p-2 font-light w-1/8'>Estado</th>
              <th className='text-left p-2 font-light w-1/8'>Deadline material</th>
            </tr>
          </thead>
          <tbody>
            {materiales.map((item, index) => (
              <tr
                key={index}
              className='hover:bg-gray-50 cursor-pointer'
                onClick={() =>
                  router.push(`/dashboard/produccion/publicaciones/${idPublicacion}/${item.idContenido}`)
                }
              >
                <td className='p-2 border-b border-gray-200'>{item.idEmpresa}</td>
                <td className='p-2 border-b border-gray-200'>{item.tipoContenido}</td>
                <td className='p-2 border-b border-gray-200'>{item.especificaciones}</td>
                <td className='p-2 border-b border-gray-200'>{item.idAgente}</td>
                <td className='p-2 border-b border-gray-200'>{item.estado}</td>
                <td className='p-2 border-b border-gray-200'>{item.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaterialesRevista;
