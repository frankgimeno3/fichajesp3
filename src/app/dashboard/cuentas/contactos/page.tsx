'use client'

import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import FiltrosContactos from './componentesContactos/FiltrosContactos';
import TablaContactos from './componentesContactos/TablaContactos';

const Contactos: FC = () => {
  const router = useRouter();

  const [contactoFiltro, setContactoFiltro] = useState('');
  const [apellidosFiltro, setApellidosFiltro] = useState('');
  const [codigoContactoFiltro, setCodigoContactoFiltro] = useState('');
  const [empresaAsociadaFiltro, setEmpresaAsociadaFiltro] = useState('');
  const [telFiltro, setTelFiltro] = useState('');
  const [emailFiltro, setEmailFiltro] = useState('');

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className="text-lg font-semibold mb-4">Contactos</h2>
        <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/cuentas/contactos/crear')}
        >
          <p>Crear</p>
        </button>
      </div>

      <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
        <FiltrosContactos
          contactoFiltro={contactoFiltro}
          setContactoFiltro={setContactoFiltro}
          apellidosFiltro={apellidosFiltro}
          setApellidosFiltro={setApellidosFiltro}
          codigoContactoFiltro={codigoContactoFiltro}
          setCodigoContactoFiltro={setCodigoContactoFiltro}
          empresaAsociadaFiltro={empresaAsociadaFiltro}
          setEmpresaAsociadaFiltro={setEmpresaAsociadaFiltro}
          telFiltro={telFiltro}
          setTelFiltro={setTelFiltro}
          emailFiltro={emailFiltro}
          setEmailFiltro={setEmailFiltro}
        />

        <TablaContactos
          contactoFiltro={contactoFiltro}
          apellidosFiltro={apellidosFiltro}
          codigoContactoFiltro={codigoContactoFiltro}
          empresaAsociadaFiltro={empresaAsociadaFiltro}
          telFiltro={telFiltro}
          emailFiltro={emailFiltro}
        />
      </div>
    </div>
  );
};

export default Contactos;
