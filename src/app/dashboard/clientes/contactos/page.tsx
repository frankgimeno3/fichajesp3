'use client';

import { useRouter } from 'next/navigation';
import React, { FC, useState, useEffect } from 'react';
import FiltrosContactos from './componentesContactos/FiltrosContactos';
import TablaContactos from './componentesContactos/TablaContactos';
import MiddleNav from '../../../general_components/componentes_recurrentes/MiddleNav';
import ButtonsRow from '@/app/general_components/componentes_recurrentes/ButtonsRow';
import contactos from "@/app/contents/contactsContents.json";

interface Contacto {
  id: string;
  nombreContacto: string;
  apellidosContacto: string;
  codigoContacto: string;
  empresaAsociada: string;
  telefono: string;
  email: string;
}

const Contactos: FC = () => {
  const router = useRouter();

  const [contactoFiltro, setContactoFiltro] = useState('');
  const [apellidosFiltro, setApellidosFiltro] = useState('');
  const [codigoContactoFiltro, setCodigoContactoFiltro] = useState('');
  const [empresaAsociadaFiltro, setEmpresaAsociadaFiltro] = useState('');
  const [telFiltro, setTelFiltro] = useState('');
  const [emailFiltro, setEmailFiltro] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [allContactos, setAllContactos] = useState<Contacto[]>([]);

  useEffect(() => {
    const mapeados: Contacto[] = contactos.map((c) => ({
      id: c.id_contacto,
      nombreContacto: c.nombre_contacto,
      apellidosContacto: c.apellidos_contacto,
      codigoContacto: c.id_cuenta, 
      empresaAsociada: c.nombre_empresa,
      telefono: c.telefono_contacto,
      email: c.email_contacto,
    }));

    setAllContactos(mapeados);
  }, []);

  const filteredContactos = allContactos.filter((c) =>
    c.nombreContacto.toLowerCase().includes(contactoFiltro.toLowerCase()) &&
    c.apellidosContacto.toLowerCase().includes(apellidosFiltro.toLowerCase()) &&
    c.codigoContacto.toLowerCase().includes(codigoContactoFiltro.toLowerCase()) &&
    c.empresaAsociada.toLowerCase().includes(empresaAsociadaFiltro.toLowerCase()) &&
    c.telefono.includes(telFiltro) &&
    c.email.toLowerCase().includes(emailFiltro.toLowerCase())
  );

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredContactos.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="flex flex-col h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal="Contactos" />

      <div className="bg-gray-100 h-full min-h-screen px-12 text-gray-600">
        <div className="mt-12 p-3 rounded-lg shadow-xl bg-white">
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

          <TablaContactos resultados={currentItems} />

          <div className="mt-4">
            <ButtonsRow
              totalItems={filteredContactos.length}
              currentNumber={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
