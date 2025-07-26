"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

interface FichaClienteProps {}

const FichaCliente: FC<FichaClienteProps> = ({ }) => {
  const router = useRouter();
  const [pestana, setPestana] = useState('general');

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'administrativo', label: 'Administrativo' },
    { id: 'registro', label: 'Registro' },
  ];

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">
          Ficha de cliente   
          <span className='px-6 font-light'>Código: 01234</span> 
          <span className='px-6 font-light'>Nombre: Turomas</span>
        </h2>
        <button 
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/Clientes/ficha/editar')}
        >
          <p>Editar</p>
        </button>
      </div>
      
      <div className='flex flex-row mt-12 gap-4'>
        {tabs.map(tab => (
          <p
            key={tab.id}
            className={`p-3 rounded-lg shadow-xl cursor-pointer hover:bg-white/70 ${
              pestana === tab.id ? 'bg-white' : 'bg-gray-200/80'
            }`}
            onClick={() => setPestana(tab.id)}
          >
            {tab.label}
          </p>
        ))}
      </div>

      <div className='bg-white p-12 mt-6'>
        <p>Nombre de la empresa</p>
      </div>
    </div>
  );
};

export default FichaCliente;
