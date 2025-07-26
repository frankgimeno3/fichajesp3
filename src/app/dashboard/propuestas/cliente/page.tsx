"use client"
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import TablaPropuestasCliente from './TablaPropuestasCliente';

interface PropuestasClienteProps {
  
}

const PropuestasCliente: FC<PropuestasClienteProps> = ({ }) => {
      const router = useRouter();

      const [nombreCliente, setNombreCliente] = useState('TVITEC')

      const [clienteFiltro, setClienteFiltro] = useState('');
      const [agenteFiltro, setAgenteFiltro] = useState('');
      const [fechaInicio, setFechaInicio] = useState('');
      const [fechaFin, setFechaFin] = useState('');
      
  return (
<div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">

      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">Propuestas</h2>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/propuestas/crear')}
        >
          <p>Crear</p>
        </button>
      </div>

      <div className='flex flex-col mt-12 p-3 rounded-lg shadow-xl bg-white'>
        <div className='flex flex-row w-full justify-between'>
        <h2 className="text-lg font-semibold mb-4 py-3">Propuestas hechas al cliente {nombreCliente}</h2>
        <div>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/clientes/ficha')}
        >
          <p>Ficha del cliente</p>
        </button>
        </div>
        </div>

        <TablaPropuestasCliente
          clienteFiltro={clienteFiltro}
          agenteFiltro={agenteFiltro}
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
        />
      </div>
    </div>  );
};

export default PropuestasCliente;