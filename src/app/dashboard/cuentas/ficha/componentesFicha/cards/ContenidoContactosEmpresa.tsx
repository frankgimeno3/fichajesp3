"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface Contacto {
  codigo: string;
  nombreCompleto: string;
  cargo: string;
  email: string;
}

const mockContactos: Contacto[] = [
  {
    codigo: 'C001',
    nombreCompleto: 'Juan Pérez Gómez',
    cargo: 'Gerente de Ventas',
    email: 'juan.perez@empresa.com',
  },
  {
    codigo: 'C002',
    nombreCompleto: 'María Rodríguez López',
    cargo: 'Directora de Marketing',
    email: 'maria.rodriguez@empresa.com',
  },
  {
    codigo: 'C003',
    nombreCompleto: 'Luis García Fernández',
    cargo: 'Analista Financiero',
    email: 'luis.garcia@empresa.com',
  },
];

interface ContenidoContactosEmpresaProps {}

const ContenidoContactosEmpresa: FC<ContenidoContactosEmpresaProps> = () => {
    const router = useRouter()
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contactos de la Empresa</h2>
    <table className='min-w-full '>
          <thead className='bg-blue-950/80 text-white '>
              <tr>
            <th className='text-left p-2 font-light'>Código de contacto</th>
            <th className='text-left p-2 font-light'>Nombre y apellidos</th>
            <th className='text-left p-2 font-light'>Cargo</th>
            <th className='text-left p-2 font-light'>Email principal</th>
          </tr>
        </thead>
        <tbody>
          {mockContactos.map((contacto) => (
            <tr key={contacto.codigo} className="border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer"
            onClick={()=>{router.push('/dashboard/cuentas/contactos/contacto')}}>
              <td className='p-2 border-b border-gray-200'>{contacto.codigo}</td>
              <td className='p-2 border-b border-gray-200'>{contacto.nombreCompleto}</td>
              <td className='p-2 border-b border-gray-200'>{contacto.cargo}</td>
              <td className='p-2 border-b border-gray-200'>{contacto.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContenidoContactosEmpresa;
