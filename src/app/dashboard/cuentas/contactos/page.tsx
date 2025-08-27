'use client'

import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import FiltrosContactos from './componentesContactos/FiltrosContactos';
import TablaContactos from './componentesContactos/TablaContactos';
import MiddleNav from '../../../general_components/MiddleNav';

const Contactos: FC = () => {
  const router = useRouter();

  const [contactoFiltro, setContactoFiltro] = useState('');
  const [apellidosFiltro, setApellidosFiltro] = useState('');
  const [codigoContactoFiltro, setCodigoContactoFiltro] = useState('');
  const [empresaAsociadaFiltro, setEmpresaAsociadaFiltro] = useState('');
  const [telFiltro, setTelFiltro] = useState('');
  const [emailFiltro, setEmailFiltro] = useState('');

  return (
        <div className="flex flex-col  h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Contactos  `} />
    <div className="bg-gray-100 h-full min-h-screen px-12 text-gray-600">
   

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
    </div>
  );
};

export default Contactos;
