"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import MiddleNav from '../0dashboardcomponents/MiddleNav';

interface Seguimiento {
  tema: string;
  descripcion: string;
  link: string;
}

interface SeguimientosProps { }

const Seguimientos: FC<SeguimientosProps> = () => {
    const [agenteActual, setAgenteActual] = useState("usuario")
  
  const router = useRouter()
  const seguimientoData: Seguimiento[] = [
    {
      tema: 'Gestiones de renovación de campañas',
      descripcion:
        'Campañas terminadas en proceso de renovación. Excel con cliente, estado, última gestión y próxima programada',
      link: 'https://www.google.es',
    },
    {
      tema: 'Leads abc',
      descripcion:
        'Excel de trabajo por pestañas, filtrando por importancia los clientes, para seguimiento del comercial y revisión de estados.',
      link: 'https://www.example.com/contrato',
    },
    {
      tema: 'Seguimiento anunciantes competidores',
      descripcion:
        'Listado de anunciantes de la competencia, para ofrecer renovaciones, priorizar, o detectar si no tienen seguimiento, o no suficiente.',
      link: 'https://www.example.com/entrega',
    },
    {
      tema: 'Seguimiento específico ferias',
      descripcion:
        'Listado de expositores de ferias futuras, para su preparación, gestión durante la feria, y gestión post.',
      link: 'https://www.example.com/capacitacion',
    },
  ];

  return (
        <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

            <MiddleNav tituloprincipal={` Seguimientos  `} />

            <div className='m-7 bg-gray-100 p-12 rounded '>
        <div className='flex flex-row items-center justify-between pb-6'>
        <h2 className="text-lg font-semibold mb-4">
          Seguimientos para el agente {agenteActual}
        </h2>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/seguimientos/campanas')}
        >
          <p>Ver mis campañas en curso</p>
        </button>
      </div> 

      <table className="min-w-full">
          <thead className='bg-blue-950 text-white '>
          <tr>
            <th className="text-left p-2 font-light">Tema</th>
            <th className="text-left p-2 font-light">Descripción de las gestiones</th>
            <th className="text-left p-2 font-light">Link al excel</th>
          </tr>
        </thead>
        <tbody>
          {seguimientoData.map((item, index) => (
            <tr key={index} className="bg-white hover:bg-white/50">
              <td className="p-2 border-b border-gray-200">{item.tema}</td>
              <td className="p-2 border-b border-gray-200">{item.descripcion}</td>
              <td className="p-2 border-b border-gray-200">
                <a href={item.link} className="text-blue-950 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                  Ver enlace
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
    </div>
  );
};

export default Seguimientos;
