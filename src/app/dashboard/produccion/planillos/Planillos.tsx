"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface PlanillosProps { }

const Planillos: FC<PlanillosProps> = ({ }) => {

  const router = useRouter();
  const data = [
    {
      edicion: 'Vidrio ES 212',
      publicacion: '2025-09-01',
      tematica: 'Innovaciones en vidrios inteligentes',
      estado: 'En revision',
    },
    {
      edicion: 'Ventanas AL 213',
      publicacion: '2025-10-01',
      tematica: 'Tendencias en diseño de ventanas en América Latina',
      estado: 'En producción',

    },
    {
      edicion: 'Vidrio AL 214',
      publicacion: '2025-11-05',
      tematica: 'Sostenibilidad en la producción de vidrio',
      estado: 'Planillo previo',

    },
    {
      edicion: 'Ventanas ES 212',
      publicacion: '2025-09-03',
      tematica: 'Eficiencia energética en ventanas europeas',
      estado: 'Planillo previo',

    }
  ];

  return (
    <div className='flex flex-row justify-between w-full items-center bg-white rounded  '>
      <table className='min-w-full '>
        <thead className='bg-blue-950 text-white'>
          <tr>
            <th className='text-left p-2 font-light'>Edición</th>
            <th className='text-left p-2 font-light'>Fecha Publicación Esperada</th>
            <th className='text-left p-2 font-light'>Temática Específica</th>
            <th className='text-left p-2 font-light'>Estado del planillo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='hover:bg-gray-50 cursor-pointer'>
              <td className='p-2 border-b border-gray-200'
                onClick={() => { router.push('/dashboard/produccion/planillos/revista') }}>{item.edicion}</td>
              <td className='p-2 border-b border-gray-200'
                onClick={() => { router.push('/dashboard/produccion/planillos/revista') }}>{item.publicacion}</td>
              <td className='p-2 border-b border-gray-200'
                onClick={() => { router.push('/dashboard/produccion/planillos/revista') }}>{item.tematica}</td>
              <td className='p-2 border-b border-gray-200'
                onClick={() => { router.push('/dashboard/produccion/planillos/revista') }}>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Planillos;
