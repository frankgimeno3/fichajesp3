'use client'
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface ContenidoPorClienteProps {}

const ContenidoPorCliente: FC<ContenidoPorClienteProps> = ({ }) => {
  const router = useRouter();

  const mockClientes = [
    {
      empresa: 'Coca-Cola',
      fechaFirma: '2024-03-15',
      fechaRenovacion: '2025-03-15',
      fechaMaterial: '2025-08-10',
      contacto: 'Laura Gómez',
    },
    {
      empresa: 'Nike',
      fechaFirma: '2023-11-20',
      fechaRenovacion: '2024-11-20',
      fechaMaterial: '2025-08-12',
      contacto: 'Carlos Méndez',
    },
    {
      empresa: 'Apple',
      fechaFirma: '2024-01-10',
      fechaRenovacion: '2025-01-10',
      fechaMaterial: '2025-08-15',
      contacto: 'Ana Torres',
    },
    {
      empresa: 'Zara',
      fechaFirma: '2023-07-01',
      fechaRenovacion: '2024-07-01',
      fechaMaterial: '2025-08-17',
      contacto: 'Javier López',
    },
    {
      empresa: 'Microsoft',
      fechaFirma: '2024-05-05',
      fechaRenovacion: '2025-05-05',
      fechaMaterial: '2025-08-20',
      contacto: 'María Fernández',
    },
  ];

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-3'>
        {/* aqui */}
        <div className='overflow-x-auto'>
          <table className='min-w-full border border-gray-200 text-sm text-left text-gray-700'>
            <thead className='bg-gray-100 text-gray-600 uppercase'>
              <tr>
                <th className='px-4 py-2 border'>Empresa</th>
                <th className='px-4 py-2 border'>Fecha de firma</th>
                <th className='px-4 py-2 border'>Fecha renovación</th>
                <th className='px-4 py-2 border'>Fecha próximo material</th>
                <th className='px-4 py-2 border'>Contacto principal</th>
              </tr>
            </thead>
            <tbody>
              {mockClientes.map((cliente, index) => (
                <tr key={index} className='hover:bg-gray-50 cursor-pointer'
                onClick={() => router.push('/dashboard/seguimientos/resumen')}>
                  <td className='px-4 py-2 border'>{cliente.empresa}</td>
                  <td className='px-4 py-2 border'>{cliente.fechaFirma}</td>
                  <td className='px-4 py-2 border'>{cliente.fechaRenovacion}</td>
                  <td className='px-4 py-2 border'>{cliente.fechaMaterial}</td>
                  <td className='px-4 py-2 border'>{cliente.contacto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContenidoPorCliente;
