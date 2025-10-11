'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { InterfazContacto } from '@/app/interfaces/interfaces';

 

interface TablaContactosProps {
  contactosFiltrados: InterfazContacto[];
}

const TablaContactos: FC<TablaContactosProps> = ({ contactosFiltrados }) => {
  const router = useRouter();

  const handleRedirection = (id: string) => {
    router.push(`/dashboard/clientes/contactos/${id}`);
  };

  return (
    <div className="p-3 overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Nombre</th>
            <th className="text-left p-2 font-light">Apellidos</th>
            <th className="text-left p-2 font-light">Código Contacto</th>
            <th className="text-left p-2 font-light">Empresa Asociada</th>
            <th className="text-left p-2 font-light">Teléfono</th>
            <th className="text-left p-2 font-light">Email</th>
          </tr>
        </thead>
        <tbody>
          {contactosFiltrados.length > 0 ? (
            contactosFiltrados.map((res) => (
              <tr
                key={res.id_contacto}
                className="border-t border-gray-200 hover:bg-gray-100/40 cursor-pointer transition-colors"
                onClick={() => handleRedirection(res.id_contacto)}
              >
                <td className="p-2 border-b border-gray-200">{res.nombre_contacto}</td>
                <td className="p-2 border-b border-gray-200">{res.apellidos_contacto}</td>
                <td className="p-2 border-b border-gray-200">{res.id_contacto}</td>
                <td className="p-2 border-b border-gray-200">{res.nombre_empresa}</td>
                <td className="p-2 border-b border-gray-200">{res.telefono_contacto}</td>
                <td className="p-2 border-b border-gray-200">{res.email_contacto}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-500">
                No se encontraron resultados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaContactos;
