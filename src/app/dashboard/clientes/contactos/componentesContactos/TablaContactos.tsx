'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

export interface Resultado {
  id: number;
  nombreContacto: string;
  apellidosContacto: string;
  codigoContacto: string;
  empresaAsociada: string;
  telefono: string;
  email: string;
}

interface TablaContactosProps {
  resultados: Resultado[]; // <-- nueva prop
}

const TablaContactos: FC<TablaContactosProps> = ({ resultados }) => {
  const router = useRouter();

  const handleRedirection = (id: number) => {
    router.push(`/dashboard/cuentas/contactos/ficha/${id}`);
  };

  return (
    <div className="p-3 overflow-x-auto">
      <table className="min-w-full">
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
          {resultados.length > 0 ? (
            resultados.map((res) => (
              <tr
                key={res.id}
                className="border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer"
                onClick={() => handleRedirection(res.id)}
              >
                <td className="p-2 border-b border-gray-200">{res.nombreContacto}</td>
                <td className="p-2 border-b border-gray-200">{res.apellidosContacto}</td>
                <td className="p-2 border-b border-gray-200">{res.codigoContacto}</td>
                <td className="p-2 border-b border-gray-200">{res.empresaAsociada}</td>
                <td className="p-2 border-b border-gray-200">{res.telefono}</td>
                <td className="p-2 border-b border-gray-200">{res.email}</td>
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
