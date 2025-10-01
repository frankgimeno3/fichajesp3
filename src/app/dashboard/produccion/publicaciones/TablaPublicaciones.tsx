"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import data from '@/app/contents/publicacionesContents.json'  

interface TablaPublicacionesProps { }

const TablaPublicaciones: FC<TablaPublicacionesProps> = ({ }) => {
  const router = useRouter();

  return (
    <div className='flex flex-row justify-between w-full items-center bg-white rounded'>
      <table className='min-w-full'>
        <thead className='bg-blue-950 text-white'>
          <tr>
            <th className='text-left p-2 font-light'>Edición Publicación</th>
            <th className='text-left p-2 font-light'>Medio de Publicación</th>
            <th className='text-left p-2 font-light'>Detalle Publicación</th>
            <th className='text-left p-2 font-light'>Deadline Material</th>
            <th className='text-left p-2 font-light'>Fecha Publicación</th>
            <th className='text-left p-2 font-light'>Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className='hover:bg-gray-50 cursor-pointer'
              onClick={() => router.push(`/dashboard/produccion/publicaciones/${item.id_publicacion}`)}
            >
              <td className='p-2 border-b border-gray-200'>{item.edicion_publicacion}</td>
              <td className='p-2 border-b border-gray-200'>{item.medio_publicacion}</td>
              <td className='p-2 border-b border-gray-200'>{item.detalle_publicacion}</td>
              <td className='p-2 border-b border-gray-200'>{item.deadline_material}</td>
              <td className='p-2 border-b border-gray-200'>{item.fecha_publicacion}</td>
              <td className='p-2 border-b border-gray-200'>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaPublicaciones;