'use client';

import { useRouter } from 'next/navigation';
import React, { FC, useState, useEffect } from 'react';
import FiltrosContactos from './componentesContactos/FiltrosContactos';
import TablaContactos, { Resultado } from './componentesContactos/TablaContactos';
import MiddleNav from '../../../general_components/componentes_recurrentes/MiddleNav';
import ButtonsRow from '@/app/general_components/componentes_recurrentes/ButtonsRow';

interface Contacto {
  id: number;
  nombreContacto: string;
  apellidosContacto: string;
  codigoContacto: string;
  empresaAsociada: string;
  telefono: string;
  email: string;
}

const Contactos: FC = () => {
  const router = useRouter();

  // Filtros
  const [contactoFiltro, setContactoFiltro] = useState('');
  const [apellidosFiltro, setApellidosFiltro] = useState('');
  const [codigoContactoFiltro, setCodigoContactoFiltro] = useState('');
  const [empresaAsociadaFiltro, setEmpresaAsociadaFiltro] = useState('');
  const [telFiltro, setTelFiltro] = useState('');
  const [emailFiltro, setEmailFiltro] = useState('');

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Mock original + generar contactos adicionales para pruebas
  const [allContactos, setAllContactos] = useState<Contacto[]>([]);

  useEffect(() => {
    const baseMock: Contacto[] = [
      {
        id: 1,
        nombreContacto: 'Juan',
        apellidosContacto: 'Pérez',
        codigoContacto: '001',
        empresaAsociada: 'Empresa A',
        telefono: '123456789',
        email: 'juan.perez@empresaA.com',
      },
      {
        id: 2,
        nombreContacto: 'María',
        apellidosContacto: 'Gómez',
        codigoContacto: '002',
        empresaAsociada: 'Empresa B',
        telefono: '987654321',
        email: 'maria.gomez@empresaB.com',
      },
      {
        id: 3,
        nombreContacto: 'Carlos',
        apellidosContacto: 'López',
        codigoContacto: '003',
        empresaAsociada: 'Empresa A',
        telefono: '123123123',
        email: 'carlos.lopez@empresaA.com',
      },
    ];

    // Generar contactos adicionales artificialmente
    const adicionales: Contacto[] = [];
    for (let i = 4; i <= 110; i++) { // 110 total => 7+ páginas con 15 por página
      adicionales.push({
        id: i,
        nombreContacto: `Nombre${i}`,
        apellidosContacto: `Apellido${i}`,
        codigoContacto: i.toString().padStart(3, '0'),
        empresaAsociada: `Empresa ${String.fromCharCode(65 + (i % 10))}`,
        telefono: `555-00${i}`,
        email: `contacto${i}@ejemplo.com`,
      });
    }

    setAllContactos([...baseMock, ...adicionales]);
  }, []);

  // Filtrar resultados
  const filteredContactos = allContactos.filter(c =>
    c.nombreContacto.toLowerCase().includes(contactoFiltro.toLowerCase()) &&
    c.apellidosContacto.toLowerCase().includes(apellidosFiltro.toLowerCase()) &&
    c.codigoContacto.toLowerCase().includes(codigoContactoFiltro.toLowerCase()) &&
    c.empresaAsociada.toLowerCase().includes(empresaAsociadaFiltro.toLowerCase()) &&
    c.telefono.includes(telFiltro) &&
    c.email.toLowerCase().includes(emailFiltro.toLowerCase())
  );

  // Paginación
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
