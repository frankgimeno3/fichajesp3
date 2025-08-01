"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface MaterialesProps {}

const Materiales: FC<MaterialesProps> = ({ }) => {

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
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
       <h2 className="text-xl font-semibold mb-4">Materiales próximas ediciones</h2>

      <div className='flex flex-row justify-between w-full items-center bg-white rounded p-5'>     

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Edición</th>
            <th className="border border-gray-300 px-4 py-2">Deadline Material</th>
            <th className="border border-gray-300 px-4 py-2">Fecha Publicación Esperada</th>
            <th className="border border-gray-300 px-4 py-2">Temática Específica</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2"
              onClick={()=>{router.push('/dashboard/produccion/materiales/revista')}}>{item.edicion}</td>
              <td className="border border-gray-300 px-4 py-2"
              onClick={()=>{router.push('/dashboard/produccion/materiales/revista')}}>{item.deadline}</td>
              <td className="border border-gray-300 px-4 py-2"
              onClick={()=>{router.push('/dashboard/produccion/materiales/revista')}}>{item.publicacion}</td>
              <td className="border border-gray-300 px-4 py-2"
              onClick={()=>{router.push('/dashboard/produccion/materiales/revista')}}>{item.tematica}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Materiales;
