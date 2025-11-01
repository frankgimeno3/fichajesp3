'use client'

import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface FiltrosContactosProps {
  contactoFiltro: string;
  setContactoFiltro: (value: string) => void;
  apellidosFiltro: string;
  setApellidosFiltro: (value: string) => void;
  codigoContactoFiltro: string;
  setCodigoContactoFiltro: (value: string) => void;
  empresaAsociadaFiltro: string;
  setEmpresaAsociadaFiltro: (value: string) => void;
  telFiltro: string;
  setTelFiltro: (value: string) => void;
  emailFiltro: string;
  setEmailFiltro: (value: string) => void;
}

const FiltrosContactos: FC<FiltrosContactosProps> = ({
  contactoFiltro,
  setContactoFiltro,
  apellidosFiltro,
  setApellidosFiltro,
  codigoContactoFiltro,
  setCodigoContactoFiltro,
  empresaAsociadaFiltro,
  setEmpresaAsociadaFiltro,
  telFiltro,
  setTelFiltro,
  emailFiltro,
  setEmailFiltro,
}) => {
  const router = useRouter();

  return (
      <div className="flex flex-col justify-left w-full  bg-white rounded p-5">
      <p className="text-lg font-semibold">Buscador de contactos</p>

      <div className='flex flex-wrap pb-3 w-full justify-between items-end'>

         {/* Nombre cliente */}
        <div className="flex flex-col mt-4">
          <label className='text-sm font-medium'>Nombre del contacto</label>
          <input
            type='text'
            value={contactoFiltro}
            onChange={(e) => setContactoFiltro(e.target.value)}
            placeholder='Nombre del contacto'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col mt-4'>
          <label className='text-sm font-medium'>Apellidos cliente</label>
          <input
            type='text'
            value={apellidosFiltro}
            onChange={(e) => setApellidosFiltro(e.target.value)}
            placeholder='Apellidos del cliente'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col mt-4'>
          <label className='text-sm font-medium'>Código Contacto</label>
          <input
            type='number'
            value={codigoContactoFiltro}
            onChange={(e) => setCodigoContactoFiltro(e.target.value)}
            placeholder='Código del contacto'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col mt-4'>
          <label className='text-sm font-medium'>Empresa asociada</label>
          <input
            type='number'
            value={empresaAsociadaFiltro}
            onChange={(e) => setEmpresaAsociadaFiltro(e.target.value)}
            placeholder='Ej: 123'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col mt-4'>
          <label className='text-sm font-medium'>Tel principal</label>
          <input
            type='number'
            value={telFiltro}
            onChange={(e) => setTelFiltro(e.target.value)}
            placeholder='Teléfono'
            className='border px-2 py-1 rounded'
          />
        </div>

        <div className='flex flex-col mt-4'>
          <label className='text-sm font-medium'>Email</label>
          <input
            type='text'
            value={emailFiltro}
            onChange={(e) => setEmailFiltro(e.target.value)}
            placeholder='correo@ejemplo.com'
            className='border px-2 py-1 rounded'
          />
        </div>

        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900 mt-4'
          onClick={() => router.push('/dashboard/cuentas/contactos/crear')}
        >
          <p>Buscar</p>
        </button>
      </div>
    </div>
  );
};

export default FiltrosContactos;
