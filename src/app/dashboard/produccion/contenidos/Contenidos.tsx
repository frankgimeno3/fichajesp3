"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ContenidosProps {}

const Contenidos: FC<ContenidosProps> = ({ }) => {

  const router = useRouter()
  const data = [
    {
      edicion: 'Vidrio ES 212',
      deadline: '2025-08-15',
      publicacion: '2025-09-01',
      tematica: 'Innovaciones en vidrios inteligentes'
    },
    {
      edicion: 'Ventanas AL 213',
      deadline: '2025-09-10',
      publicacion: '2025-10-01',
      tematica: 'Tendencias en diseño de ventanas en América Latina'
    },
    {
      edicion: 'Vidrio AL 214',
      deadline: '2025-10-20',
      publicacion: '2025-11-05',
      tematica: 'Sostenibilidad en la producción de vidrio'
    },
    {
      edicion: 'Ventanas ES 212',
      deadline: '2025-08-18',
      publicacion: '2025-09-03',
      tematica: 'Eficiencia energética en ventanas europeas'
    }
  ];

  return (
   
      <div className='flex flex-row justify-between w-full items-center bg-white rounded  '>     
        <table className='min-w-full '>
          <thead className='bg-blue-950 text-white '>
              <tr>
            <th className='text-left p-2 font-light'>Edición</th>
            <th className='text-left p-2 font-light'>Deadline Material</th>
            <th className='text-left p-2 font-light'>Fecha Publicación Esperada</th>
            <th className='text-left p-2 font-light'>Temática Específica</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='hover:bg-gray-50 cursor-pointer'>
              <td className='p-2 border-b border-gray-200'
              onClick={()=>{router.push('/dashboard/produccion/contenidos/publicacion')}}>{item.edicion}</td>
              <td className='p-2 border-b border-gray-200'
              onClick={()=>{router.push('/dashboard/produccion/contenidos/publicacion')}}>{item.deadline}</td>
              <td className='p-2 border-b border-gray-200'
              onClick={()=>{router.push('/dashboard/produccion/contenidos/publicacion')}}>{item.publicacion}</td>
              <td className='p-2 border-b border-gray-200'
              onClick={()=>{router.push('/dashboard/produccion/contenidos/publicacion')}}>{item.tematica}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   );
};

export default Contenidos;
