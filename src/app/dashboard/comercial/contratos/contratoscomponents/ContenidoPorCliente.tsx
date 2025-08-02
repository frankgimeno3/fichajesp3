'use client'
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface ContenidoPorClienteProps {}

const ContenidoPorCliente: FC<ContenidoPorClienteProps> = ({ }) => {
  const router = useRouter();

  const mockClientes = [
    {
      empresa: 'TVITEC',
      fechaFirma: '2024-03-15',
      fechaRenovacion: '2025-03-15',
      fechaMaterial: '2025-08-10',
      contacto: 'Laura Gómez',
    },
    {
      empresa: 'VITRUM',
      fechaFirma: '2023-11-20',
      fechaRenovacion: '2024-11-20',
      fechaMaterial: '2025-08-12',
      contacto: 'Carlos Méndez',
    },
    {
      empresa: 'SOLUTEC',
      fechaFirma: '2024-01-10',
      fechaRenovacion: '2025-01-10',
      fechaMaterial: '2025-08-15',
      contacto: 'Ana Torres',
    },
    {
      empresa: 'HANJIANG',
      fechaFirma: '2023-07-01',
      fechaRenovacion: '2024-07-01',
      fechaMaterial: '2025-08-17',
      contacto: 'Javier López',
    },
    {
      empresa: 'A&W',
      fechaFirma: '2024-05-05',
      fechaRenovacion: '2025-05-05',
      fechaMaterial: '2025-08-20',
      contacto: 'María Fernández',
    },
  ];

  return (
      <div className='flex flex-col gap-3'>
        <div className='overflow-x-auto'>
        <table className='min-w-full '>
          <thead className='bg-blue-950 text-white '>
              <tr>
                <th className='text-left p-2 font-light'>Empresa</th>
                <th className='text-left p-2 font-light'>Fecha de firma</th>
                <th className='text-left p-2 font-light'>Fecha renovación</th>
                <th className='text-left p-2 font-light'>Fecha próximo material</th>
                <th className='text-left p-2 font-light'>Contacto principal</th>
              </tr>
            </thead>
            <tbody>
              {mockClientes.map((cliente, index) => (
                <tr key={index} className='hover:bg-gray-50 cursor-pointer' onClick={() => router.push('/dashboard/comercial/contratos/resumen')}>
                  <td className='p-2 border-b border-gray-200'>{cliente.empresa}</td>
                  <td className='p-2 border-b border-gray-200'>{cliente.fechaFirma}</td>
                  <td className='p-2 border-b border-gray-200'>{cliente.fechaRenovacion}</td>
                  <td className='p-2 border-b border-gray-200'>{cliente.fechaMaterial}</td>
                  <td className='p-2 border-b border-gray-200'>{cliente.contacto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default ContenidoPorCliente;